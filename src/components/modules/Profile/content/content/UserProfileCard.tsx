import { Avatar, Box, Chip } from '@mui/material';
import { ProfileCard } from 'src/types';
import { Button, Text } from '@components/common';
import { useTranslation } from 'react-i18next';
import { EditPhotoPopup } from '../../popups';
import { useState } from 'react';
import { EditProfilePopup } from '../../popups';

export const UserProfileCard = ({
  profileCardData,
  editMode,
}: {
  profileCardData: ProfileCard;
  editMode: boolean;
}) => {
  const { t } = useTranslation();
  const [isPopupOpen, setPopupOpen] = useState({
    editPhoto: false,
    editProfile: false,
  });

  // Function to handle opening a specific popup
  const handleOpenPopup = (popupName: string) => {
    setPopupOpen((prevState) => ({
      ...prevState,
      [popupName]: true,
    }));
  };

  // Function to handle closing a specific popup
  const handleClosePopup = (popupName: string) => {
    setPopupOpen((prevState) => ({
      ...prevState,
      [popupName]: false,
    }));
  };

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: '5fr 1fr',
          },
          gap: 2,
          alignItems: 'center',
          backgroundColor: '#28282C',
          padding: 2,
          borderRadius: '20px', // bgImage here
        }}
        style={{
          height: '108px',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateRows: '3fr 1fr',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'left' }}>
            {/* TODO setup profile image from backend */}
            {/* Profile Image */}
            <Avatar
              sx={{
                width: {
                  xs: 50,
                  md: 120,
                },
                height: {
                  xs: 50,
                  md: 120,
                },
                cursor: 'pointer',
              }}
              src="profile.jpg"
              onClick={() => handleOpenPopup('editPhoto')}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: 2,
              }}
            >
              <Text
                variant="h6"
                fontSize={{
                  xs: '14px',
                  md: '20px',
                }}
                color="#F7F7F7"
                fontWeight={500}
                lineHeight="10px"
              >
                {profileCardData.name}
              </Text>
              <Text
                variant="subtitle1"
                fontSize={{
                  xs: '12px',
                  md: '15px',
                }}
                color="#F7F7F7"
                fontWeight={400}
              >
                {profileCardData.role}
              </Text>
              <Text
                variant="subtitle1"
                fontSize={{
                  xs: '14px',
                  md: '15px',
                }}
                color="#F7F7F7"
                lineHeight="10px"
                fontWeight={300}
              >
                {profileCardData.shortDescription}
              </Text>
              <Text
                variant="subtitle1"
                fontSize={{
                  xs: '14px',
                  md: '15px',
                }}
                color="#F7F7F7"
                fontWeight={300}
              >
                {t('profilePage.locationTitle')}: {profileCardData.location}
              </Text>
            </Box>
          </Box>
          <>
            {/* Skill Tags */}
            {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Chip
                      label="UI/UX Design"
                      sx={{
                        bgcolor: '#333',
                        color: '#fff',
                        borderRadius: '6px',
                        minWidth: '110px',
                      }}
                    />
                    <Chip
                      label="HTML/CSS"
                      sx={{
                        bgcolor: '#333',
                        color: '#fff',
                        borderRadius: '6px',
                        minWidth: '110px',
                      }}
                    />
                    <Chip
                      label="Graphic Design Software"
                      sx={{
                        bgcolor: '#333',
                        color: '#fff',
                        borderRadius: '6px',
                        minWidth: '110px',
                      }}
                    />
                    <Chip
                      label="Basic JavaScript"
                      sx={{
                        bgcolor: '#333',
                        color: '#fff',
                        borderRadius: '6px',
                        minWidth: '110px',
                      }}
                    />
                    <Chip
                      label="Edit"
                      sx={{
                        bgcolor: '#333',
                        color: '#fff',
                        borderRadius: '6px',
                        minWidth: '110px',
                      }}
                    />
                  </Box> */}
          </>
        </Box>
        <Box
          sx={{
            display: {
              xs: 'none',
              md: 'grid',
            },
            gridTemplateRows: '1fr 2fr',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <Box></Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'row',
                md: 'column',
              },
              alignItems: {
                xs: 'center',
                md: 'flex-end',
              },
              textAlign: 'right',
            }}
          >
            {!editMode ? (
              <>
                {/* Action Buttons */}
                <Button
                  $variant="outlined"
                  style={{
                    width: '134px',
                    backgroundColor: 'white',
                    height: '21px',
                  }}
                  onClick={() => handleOpenPopup('editProfile')}
                >
                  <Text
                    variant="subtitle1"
                    fontSize="15px"
                    fontWeight={400}
                    lineHeight="20px"
                  >
                    {t('profilePage.editButtonText')}
                  </Text>
                </Button>

                <EditPhotoPopup
                  open={isPopupOpen.editPhoto}
                  onClose={() => handleClosePopup('editPhoto')}
                  onSave={() => {}}
                />
                <EditProfilePopup
                  open={isPopupOpen.editProfile}
                  onClose={() => handleClosePopup('editProfile')}
                  profileCard={profileCardData}
                  onSave={() => {}}
                />

                <Button
                  $variant="primary"
                  style={{
                    width: '134px',
                    height: '21px',
                    marginTop: '5px',
                  }}
                >
                  <Text
                    variant="subtitle1"
                    fontSize="15px"
                    fontWeight={400}
                    lineHeight="20px"
                  >
                    {t('profilePage.activityButtonText')}
                  </Text>
                </Button>
              </>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      </Box>
     
    </>
  );
};
