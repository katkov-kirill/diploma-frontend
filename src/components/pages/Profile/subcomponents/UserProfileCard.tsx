import { Avatar, Box, Chip } from '@mui/material';
import { ProfileCard } from '../types/ProfileCard';
import { Button, Text } from '@components/common';
import { useTranslation } from 'react-i18next';

export const UserProfileCard = ({
  profileCardData,
}: {
  profileCardData: ProfileCard;
}) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '5fr 1fr',
        gap: 2,
        alignItems: 'center',
        backgroundColor: '#28282C',
        padding: 2,
        borderRadius: '20px', // bgImage here
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
          <Avatar sx={{ width: 120, height: 120 }} src="profile.jpg" />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: 2,
            }}
          >
            <Text variant="h6" fontSize="20px" color="#F7F7F7" fontWeight={500}>
              {profileCardData.name}
            </Text>
            <Text
              variant="subtitle1"
              fontSize="15px"
              color="#F7F7F7"
              fontWeight={400}
            >
              {profileCardData.role}
            </Text>
            <Text
              variant="subtitle1"
              fontSize="15px"
              color="#F7F7F7"
              fontWeight={300}
            >
              {profileCardData.shortDescription}
            </Text>
            <Text
              variant="subtitle1"
              fontSize="15px"
              color="#F7F7F7"
              fontWeight={300}
              lineHeight="10px"
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
          display: 'grid',
          gridTemplateRows: '1fr 2fr',
          gap: 2,
          alignItems: 'center',
        }}
      >
        <Box></Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            textAlign: 'right',
          }}
        >
          {/* Action Buttons */}
          <Button
            $variant="outlined"
            style={{
              width: '134px',
              backgroundColor: 'white',
              height: '21px',
            }}
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
        </Box>
      </Box>
    </Box>
  );
};
