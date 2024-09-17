import { Box, LinearProgress } from '@mui/material';
import { Button, Text } from '@components/common';
import { SectionData, Skill } from 'src/types';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useUpdateProfileMutation } from '@services/profileApi';
import { saveProfile } from 'src/functions';
import { SkillSectionLine } from '..';
import TextField from '@mui/material/TextField';

export const Section = ({
  sectionData,
  isSkillsSection,
  contextName,
  onContentChange,
}: {
  sectionData: SectionData;
  isSkillsSection: boolean;
  contextName: string;
  onContentChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  const { t } = useTranslation();

  const [showContent, setShowContent] = useState(true);
  const [skills, setSkills] = useState<Array<Skill>>(sectionData.skills || []);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(sectionData.content);
  const [projectsDescription, setProjectsDescription] = useState<string[]>([]);

  const [updateProfile] = useUpdateProfileMutation();

  if (isSkillsSection) console.log('skills', skills);
  if (isSkillsSection) console.log('section data', sectionData);

  const handleDoubleClick = () => {
    sectionData.isOwner && setIsEditing(true);
  };

  // Function to replace <%NEW_LINE%> with actual new lines
  const parseContent = (content: string): string[] => {
    return content.split('<%NEW_LINE%>'); // or replace with '<br />' for HTML line breaks
  };

  useEffect(() => {
    const parsedContent = parseContent(sectionData.content);
    setProjectsDescription(parsedContent);
  }, [sectionData.content, content]);

  // const handleBlur = () => {
  //   setIsEditing(false);
  // };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
    onContentChange(event);
  };

  const handleSave = async () => {
    try {
      const profileData = {
        personal_information: {
          [contextName]: content,
        },
      };

      console.log('update profile data: ', profileData);
      saveProfile(profileData, updateProfile, 'user-4');
      console.log('saved');
    } catch (error) {
      console.error('Error while saving profile: ', error);
    }
  };

  return (
    <Box
      sx={{
        borderRadius: '20px',
        padding: 1,
      }}
    >
      {!isSkillsSection ? (
        <Text
          variant="h2"
          sx={{
            fontSize: {
              xs: '14px',
              md: '15px',
            },
          }}
          marginBottom="20px"
          fontWeight={500}
          lineHeight="10px"
        >
          {sectionData.title}
        </Text>
      ) : (
        <Box
          sx={{
            display: 'flex',
            gridTemplateColumns: '1fr 1fr',
            justifyContent: 'space-between',
          }}
        >
          <Text
            variant="h2"
            sx={{
              fontSize: {
                xs: '14px',
                md: '15px',
              },
            }}
            marginBottom="30px"
            fontWeight={500}
            lineHeight="10px"
          >
            {sectionData.title}
          </Text>
          <Button
            $variant="outlined"
            style={{
              width: '59px',
              backgroundColor: 'white',
              borderRadius: '6px',
              height: '20px',
              padding: 0,
              border: '1px solid #16191E',
              color: '#16191E'
            }}
            onClick={handleSave}
          >
            <Text
              variant="subtitle1"
              fontSize="11px"
              fontWeight={400}
              lineHeight="20px"
            >
              {t('profilePage.editButtonText')}
            </Text>
          </Button>
        </Box>
      )}

      {/* TODO: add edit button to skills section */}

      {isSkillsSection ? (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '10px',
          }}
        >
          {skills.map((skill, index) => (
            <SkillSectionLine skill={skill} index={index} onClick={() => {}} />
          ))}
        </Box>
      ) : (
        <></>
      )}

      {!isSkillsSection &&
        showContent &&
        (isEditing && sectionData.isOwner ? (
          <TextField
            variant="outlined"
            value={content}
            onChange={handleChange}
            autoFocus
            multiline
            rows={4}
            name={contextName}
            style={{
              backgroundColor: '#28282C',
              fontFamily: 'Saira', // TODO fix font family for input text
              width: '100%',
            }}
            InputProps={{
              style: {
                color: '#F7F7F7',
                height: '100%',
              },
            }}
            InputLabelProps={{
              style: {
                color: '#F7F7F7',
              },
            }}
          />
        ) : (
          projectsDescription.map((p, key) => (
            <p key={key}>
              <Text
                variant="subtitle1"
                fontSize={{
                  xs: '14px',
                  md: '15px',
                }}
                style={{
                  cursor: sectionData.isOwner ? 'pointer' : 'text',
                }}
                marginBottom="20px"
                fontWeight={400}
                lineHeight="20px"
                color="#8A8F98"
                onClick={handleDoubleClick}
              >
                {p}
              </Text>
            </p>
          ))
        ))}

      {!isSkillsSection && sectionData.isOwner && isEditing ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 2,
          }}
        >
          <Box
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
              },
            }}
          >
            <a
              onClick={() => setShowContent(!showContent)}
              style={{
                textDecoration: 'underline',
                cursor: sectionData.isOwner ? 'pointer' : 'text',
                color: '#8A8F98',
              }}
            >
              <Text
                variant="subtitle1"
                fontSize="15px"
                fontWeight={400}
                lineHeight="20px"
              >
                {showContent
                  ? t('profilePage.hideButtonText')
                  : t('profilePage.showButtonText')}
              </Text>
            </a>
          </Box>
          <Box>
            <Button
              $variant="outlined"
              style={{
                width: '100px',
                backgroundColor: 'white',
                borderRadius: '6px',
                height: '20px',
                padding: 0,
              }}
              onClick={handleSave}
            >
              <Text
                variant="subtitle1"
                fontSize="15px"
                fontWeight={400}
                lineHeight="20px"
              >
                {t('profilePage.saveButtonText')}
              </Text>
            </Button>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};
