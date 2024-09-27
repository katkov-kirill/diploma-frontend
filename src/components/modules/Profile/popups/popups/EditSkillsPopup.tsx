import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  IconButton,
  Tooltip,
  Paper,
} from '@mui/material';
import EditPopupSvg from '@assets/icons/EditPopup.svg';
import UploadIcon from '@assets/icons/UploadIcon.svg';
import { Button, Text } from '@components/common';
import { useTranslation } from 'react-i18next';
import { useUpdateProfileMutation } from '@services/profileApi';
import { saveProfile } from 'src/functions';
import { Skill } from 'src/types';

interface ProfilePopupProps {
  open: boolean;
  skills: Array<any> | null;
  onSave: () => void;
  onClose: () => void;
}

export const EditSkillsPopup: React.FC<ProfilePopupProps> = ({
  open,
  skills,
  onSave,
  onClose,
}) => {
  const { t } = useTranslation();

  const [skillsList, setSkillsList] = useState<Array<Skill>>(skills ?? []);
  const [skillsCells, setSkillCells] = useState({
    availableCells: 9, // max number of skills for the 1 user
    cells: skillsList || [], // Ensure cells is always an array
    skillsId: (skillsList || [])?.map((skill) => skill.id), // array of modifiers
  });

  const [updateProfile] = useUpdateProfileMutation();

  useEffect;

  const deleteSkill = (skillId: string) => {
    const updatedSkills = skillsList.filter((skill) => skill.id !== skillId);
    setSkillsList(updatedSkills);

    const skillsData = {
      skills: updatedSkills.map(skill => ({
        id: skill.id,
        edit_info: 'remove', // Mark the skill for removal
      })),
    };
  
    // Save the profile by calling the `saveProfile` function, passing the updated skills
    const userId = 'user-4'; // TODO: Replace with actual user ID (possibly from localStorage)
    saveProfile(skillsData, updateProfile, userId);
  }

  const addSkill = () => {
    
  }

  const saveSkills = () => {

  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: '#16191E',
          color: '#F7F7F7',
          borderRadius: '20px',
          display: 'grid',
        },
      }}
    >
      <Box sx={{ textAlign: 'center', paddingTop: '20px' }}>
        <Text
          variant="subtitle1"
          fontSize={{
            xs: '14px',
            md: '15pt',
          }}
          fontWeight={500}
          lineHeight="10px"
          color="#F7F7F7"
          marginTop="14px"
        >
          Full skills
        </Text>
      </Box>

      <DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <img src={EditPopupSvg} />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '4fr 1fr',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Paper
            sx={{
              borderRadius: '20px',
              padding: '10px',
              backgroundColor: '#28282C',
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                backgroundColor: '#28282C',
                padding: '10px',
                borderRadius: '8px',
                minWidth: 'fit-content',
              }}
            >
              {/* TODO: set name from the translation file */}
              <Text sx={{ color: '#F7F7F7' }}>Skills</Text>
              <Text sx={{ color: '#F7F7F7' }}>Level</Text>
              <Text sx={{ color: '#F7F7F7' }}>Place</Text>
              <Text sx={{ color: '#F7F7F7', justifySelf: 'end' }}>Upload</Text>
            </Box>

            {/* Mapping skills into rows */}
            {skills?.map((skill) => (
              <Box
                key={skill.id}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  borderRadius: '8px',
                  padding: '10px',
                  border: '1px solid #8A8F98',
                  marginBottom: '8px',
                  backgroundColor: '#28282C',
                }}
              >
                {/* TODO: set name from the translation file */}
                <Text sx={{ color: '#F7F7F7' }}>{skill.name}</Text>
                <Text sx={{ color: '#F7F7F7' }}>{skill.level}</Text>
                <Text sx={{ color: '#F7F7F7' }}>{skill.place}</Text>
                <Box sx={{ textAlign: 'right', justifySelf: 'end' }}>
                  <img src={UploadIcon} alt="upload icon" />
                </Box>
              </Box>
            ))}
          </Paper>

          {/* TODO: set name from the translation file */}
          <Box>
            {skillsList?.map((skill) => (
              <Tooltip
                key={skill.id}
                title={'Click to delete'}
                placement="top-end"
              >
                <Box
                  sx={{
                    minHeight: '24pt',
                    display: 'inline-flex',
                    borderRadius: '6px',
                    minWidth: '94px',
                    border: '2px solid #8A8F98',
                    width: 'fit-content',
                    marginBottom: '10px',
                    justifyContent: 'center',
                    marginLeft: '10px',
                    alignItems: 'center',
                    padding: '2px 8px',
                    backgroundColor: '#28282C',
                    cursor: 'pointer',
                  }}
                  onClick={() => deleteSkill(skill.id)}
               >
                  <Text
                    variant="subtitle1"
                    fontSize={{
                      xs: '9pt',
                      md: '10pt',
                    }}
                    display="block"
                    fontWeight={500}
                    lineHeight="14px"
                    color="#F7F7F7"
                  >
                    {skill.name}
                  </Text>
                </Box>
                <div></div>
              </Tooltip>
            ))}

            {/* Add 'Add' boxes if there are fewer than 10 skills */}
            {Array.from({ length: Math.max(0, 10 - (skillsList?.length ?? 0)) }).map(
              (_, index) => (
                <Tooltip
                  key={index}
                  title={'Add a new skill'}
                  placement="top-end"
                >
                  <Box
                    sx={{
                      minHeight: '24pt',
                      minWidth: '94px',
                      display: 'inline-flex',
                      justifyContent: 'center',
                      borderRadius: '6px',
                      border: '1px solid #8A8F98',
                      fontWeight: 300,
                      width: 'fit-content',
                      marginBottom: '10px',
                      marginLeft: '10px',
                      alignItems: 'center',
                      padding: '2px 8px',
                      backgroundColor: '#28282C',
                      cursor: 'pointer',
                    }}
                  >
                    <Text
                      variant="subtitle1"
                      fontSize={{
                        xs: '9pt',
                        md: '10pt',
                      }}
                      display="block"
                      fontWeight={500}
                      lineHeight="14px"
                      color="#8A8F98"
                    >
                      {/* TODO: set name from the translation file */}
                      Add 
                    </Text>
                  </Box>
                  <div></div>
                </Tooltip>
              )
            )}

            <Button
              $variant="primary"
              style={{
                width: '100%',
                height: '28pt',
                marginTop: '5px',
                marginLeft: '10px',
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
      </DialogContent>
    </Dialog>
  );
};

export default EditSkillsPopup;
