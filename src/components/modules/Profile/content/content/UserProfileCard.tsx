import { Avatar, Box, Chip } from '@mui/material';
import { ProfileCard } from 'src/types';
import { Button, Text } from '@components/common';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { EditProfilePopup, EditPhotoPopup } from '../../popups';

export const UserProfileCard = ({
  profileCardData,
  editMode,
  showSkills,
}: {
  profileCardData: ProfileCard;
  editMode: boolean;
  size: string | null;
  showSkills: boolean;
}) => {
  const { t } = useTranslation();

  const [isPopupOpen, setPopupOpen] = useState({
    editPhoto: false,
    editProfile: false,
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
          padding: 3,
          // marginBottom: '10px',
          borderRadius: '20px', // bgImage here
          height: {
            xs: !editMode ? '108px' : 'auto',
            md: '213px',
          },
          width: {
            xs: !editMode ? '100%' : `${windowWidth - 110}px`,
          },
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
                  xs: !editMode ? 50 : '20vw',
                  md: 120,
                },
                height: {
                  xs: !editMode ? 50 : '20vw',
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
                  xs: editMode
                    ? `${windowWidth - windowWidth * 0.97}pt`
                    : '14px',
                  md: '20px',
                }}
                color="#F7F7F7"
                fontWeight={500}
                lineHeight={{
                  xs: editMode
                    ? `${windowWidth - windowWidth * 0.99 + 22}px`
                    : '10px',
                  md: '10px',
                }}
              >
                {profileCardData.name}
              </Text>
              <Text
                variant="subtitle1"
                fontSize={{
                  xs: editMode
                    ? `${windowWidth - windowWidth * 0.98}pt`
                    : '12px',
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
                  // TODO: set onChange -> smaller text - bigger font size
                  xs: editMode
                    ? `${windowWidth - windowWidth * 0.975}px`
                    : `${windowWidth - windowWidth * 0.975}px`,
                  md: '12pt',
                }}
                color="#F7F7F7"
                lineHeight={{
                  xs: '10px',
                  md: '15px',
                }}
                fontWeight={300}
              >
                {profileCardData.shortDescription}
              </Text>
              <Text
                variant="subtitle1"
                fontSize={{
                  // TODO: set onChange -> smaller text - bigger font size
                  xs: editMode
                    ? `${windowWidth - windowWidth * 0.98}pt`
                    : `${windowWidth - windowWidth * 0.98}pt`,
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
      {!editMode ? (
        profileCardData.isOwner ? (
          <Box
            sx={{
              display: {
                xs: 'grid',
                md: 'none',
              },
              gridTemplateColumns: '1fr 1fr',
              gap: 1,
              alignItems: 'center',
              marginTop: 2,
            }}
          >
            <Button
              $variant="outlined"
              sx={{
                width: '100%',
                height: '35px',
              }}
              style={{
                backgroundColor: 'white',
                marginRight: '10px',
                fontSize: '14px',
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

            <Button
              $variant="primary"
              sx={{
                width: '100%',
                height: '35px',
              }}
              style={{
                marginLeft: '10px',
                fontSize: '14px',
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
          </Box>
        ) : (
          <Box
            sx={{
              display: {
                xs: 'grid',
                md: 'none',
              },
              gridTemplateColumns: '1fr',
              gap: 1,
              alignItems: 'center',
              marginTop: 2,
            }}
          >
            <Button
              $variant="primary"
              sx={{
                width: '100%',
                height: '35px',
              }}
              style={{
                marginLeft: '10px',
                fontSize: '14px',
                lineHeight: '10px',
              }}
            >
              <Text
                variant="subtitle1"
                fontSize="15px"
                fontWeight={400}
                lineHeight="20px"
              >
                {t('profilePage.followButtonText')}
              </Text>
            </Button>
          </Box>
        )
      ) : (
        <></>
      )}
    </>
  );
};
