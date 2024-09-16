import { Avatar, Box, Button, IconButton, Stack } from '@mui/material';

import { Logo } from '../Logo';
import NotificationSvg from '@assets/icons/Notification.svg';
import { Props } from 'react-select';
import { Text } from '../Text';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const TopNavBar: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('translation');

  return (
    <Box
      sx={{
        bgcolor: '#1c1c1e',
        borderBottom: '2px solid #333',
        width: '100%',
        boxSizing: 'border-box',
        padding: '20px 20px',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Logo />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
          <Button
            sx={{ color: '#fff' }}
            variant="text"
            onClick={() => navigate('/home')}
          >
            {t('appBarMenu.home')}
          </Button>
          <Button sx={{ color: '#fff' }} variant="text">
            {t('appBarMenu.suggestions')}
          </Button>
          <Button sx={{ color: '#fff' }} variant="text">
            {t('appBarMenu.message')}
          </Button>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Stack direction="row" alignItems="center" gap={2}>
            <Stack spacing={0.5} alignItems="center">
              <Text variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>
                user_name
              </Text>

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
                  user_role
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
  );
};
