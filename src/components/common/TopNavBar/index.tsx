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
import NotificationSvg from '@assets/icons/Notification.svg';

export const TopNavBar: React.FC<Props> = () => {
  return (
    <Box
      sx={{
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
          <Button sx={{ color: '#fff' }} variant="text">
            Home
          </Button>
          <Button sx={{ color: '#fff' }} variant="text">
            Suggestions
          </Button>
          <Button sx={{ color: '#fff' }} variant="text">
            Message
          </Button>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Stack direction="row" alignItems="center" gap={2}>
            <Stack spacing={0.5} alignItems="center">
              <Typography
                variant="body1"
                sx={{ color: '#fff', fontWeight: 600 }}
              >
                user_name
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
