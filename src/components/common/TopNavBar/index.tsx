import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { Props } from 'react-select';
import { Logo } from '../Logo';
import { Text } from '@components/common';
import { useTranslation } from 'react-i18next';
import NotificationSvg from '@assets/icons/Notification.svg';
import { useParams } from 'react-router-dom';
import { useGetProfileQuery } from 'src/services/profileApi';
import { useEffect, useState } from 'react';
import { isCompanyRole } from 'src/functions';
import { ProfileResponse } from 'src/types';

export const TopNavBar: React.FC<Props> = () => {
  const { t } = useTranslation();
  localStorage.setItem('user', 'user-1');

  const { id } = useParams<{ id: string }>();
  const {
    data: response,
    error,
    isLoading,
  } = useGetProfileQuery(localStorage.getItem('user'));
  const [profileData, setProfileData] = useState<ProfileResponse | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    console.log('Loading profile');
    console.log(response);
    // TODO: fix code here
    if (!isLoading) {
      setProfileData(response as ProfileResponse);
      const userRole = isCompanyRole(response)
        ? response?.profile.company.role
        : response?.profile.user.role;
        console.log('user role: ' + userRole);
      setRole(userRole);
    }
  }, [response]);

  return (
    <>
      {!isLoading ? (
        <Box
          sx={{
            borderBottom: '2px solid #333',
            width: '100%',
            boxSizing: 'border-box',
            padding: '20px 20px',
            backgroundColor: '#16191e',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr 1fr',
                md: '1fr auto 1fr'
              },
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Logo />
            </Box>

            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
                justifyContent: 'center',
                gap: 10,
              }}
            >
              <Button
                sx={{ color: '#fff', textTransform: 'none' }}
                variant="text"
              >
                <Text
                  variant="h2"
                  fontSize="15px"
                  align="center"
                  style={{
                    fontWeight: 600,
                    fontSize: '15pt',
                  }}
                >
                  {t('topNavBar.homeButton')}
                </Text>
              </Button>
              {isCompanyRole(response) ? (
                <Button
                  sx={{ color: '#fff', textTransform: 'none' }}
                  variant="text"
                >
                  <Text
                    variant="h2"
                    fontSize="15px"
                    align="center"
                    style={{
                      fontWeight: 600,
                      fontSize: '15pt',
                    }}
                  >
                    {t('topNavBar.applicationsButton')}
                  </Text>
                </Button>
              ) : (
                <Button
                  sx={{ color: '#fff', textTransform: 'none' }}
                  variant="text"
                >
                  <Text
                    variant="h2"
                    fontSize="15px"
                    align="center"
                    style={{
                      fontWeight: 600,
                      fontSize: '15pt',
                    }}
                  >
                    {t('topNavBar.suggestionsButton')}
                  </Text>
                </Button>
              )}
              <Button
                sx={{ color: '#fff', textTransform: 'none' }}
                variant="text"
              >
                <Text
                  variant="h2"
                  fontSize="15px"
                  align="center"
                  style={{
                    fontWeight: 600,
                    fontSize: '15pt',
                  }}
                >
                  {t('topNavBar.messageButton')}
                </Text>
              </Button>
              {isCompanyRole(response) ? (
                <Button
                  sx={{ color: '#fff', textTransform: 'none' }}
                  variant="text"
                >
                  <Text
                    variant="h2"
                    fontSize="15px"
                    align="center"
                    style={{
                      fontWeight: 600,
                      fontSize: '15pt',
                    }}
                  >
                    {t('topNavBar.notificationsButton')}
                  </Text>
                </Button>
              ) : (
                <></>
              )}
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Stack direction="row" alignItems="center" gap={2}>
                <Stack spacing={0.5} alignItems="center">
                  <Typography
                    variant="body1"
                    sx={{ color: '#fff', fontWeight: 600 }}
                  >
                    {isCompanyRole(response)
                      ? profileData?.profile.company.name
                      : profileData?.profile.user.first_name +
                        ' ' +
                        profileData?.profile.user.last_name}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton
                      sx={{ bgcolor: 'transparent', color: '#fff', padding: 0 }}
                    >
                      <img src={NotificationSvg} />
                    </IconButton>

                    <Box
                      sx={{
                        border: '2px solid #fff',
                        padding: '4px 5px',
                        borderRadius: '6px',
                        color: '#fff',
                        fontWeight: 300,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        maxHeight: '21px',
                      }}
                    >
                      {/* TODO: refactor this code */}
                      {role == 'company' ? 'Company' : 'User'}
                    </Box>
                  </Box>
                </Stack>

                <Avatar
                  src="/path-to-user-avatar.png"
                  alt="User Avatar"
                  sx={{
                    bgcolor: '#6C63FF',
                    width: 50,
                    height: 50,
                  }}
                />
              </Stack>
            </Box>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
