import { Box, LinearProgress } from '@mui/material';
import { Button, Text } from '@components/common';
import { SectionData } from 'src/types';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';

export const Section = ({
  sectionData,
  isSkillsSection,
}: {
  sectionData: SectionData;
  isSkillsSection: boolean;
}) => {
  const { t } = useTranslation();

  const [showContent, setShowContent] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(sectionData.content);

  const handleDoubleClick = () => {
    sectionData.isOwner ? setIsEditing(true) : setIsEditing(false);
  };

  useEffect(() => {
    console.log(sectionData.isOwner);
    console.log(isEditing);
    console.log(sectionData.content);
  }, []);

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  return (
    <Box
      sx={{
        borderRadius: '20px',
        padding: {
          xs: 1,
          md: 2,
        },
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
        marginBottom="20px"
        fontWeight={500}
        lineHeight="10px"
      >
        {sectionData.title}
      </Text>

      {isSkillsSection && (
        <Box>
          {sectionData?.skills?.map((skill, index) => (
            <Box key={index} sx={{ marginBottom: 2 }}>
              <Text
                variant="subtitle1"
                fontSize={{
                  xs: '14px',
                  md: '15px',
                }}
                fontWeight={400}
                lineHeight="20px"
                color="#8A8F98"
              >
                {skill.name}
              </Text>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: '#e0e0e0',
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 5,
                    backgroundColor: '#3f51b5',
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      )}

      {showContent &&
        (isEditing && sectionData.isOwner ? (
          <TextField
            variant="outlined"
            value={content}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
            multiline
            rows={4}
            style={{
              backgroundColor: '#28282C',
              fontFamily: 'Saira'  // TODO fix font family for input text
            }}
            InputProps={{
              style: {
                color: '#F7F7F7',
              },
            }}
            InputLabelProps={{
              style: {
                color: '#F7F7F7',
              },
            }}
          />
        ) : (
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
            onDoubleClick={handleDoubleClick}
          >
            {content}
          </Text>
        ))}

      {sectionData.isOwner ? (
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
              }}
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
