import { Props } from 'react-select';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import NotificationSvg from '@assets/icons/Notification.svg';

export const ProfileNav: React.FC<Props> = ({
// name
// role
// avatar
}) => {
  return (
    <Stack direction="row" alignItems="center" gap={2}>
    <Stack spacing={0.5} alignItems="center">
      <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>
        user_name
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton sx={{ bgcolor: 'transparent', color: '#fff', padding: 0 }}>
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
            maxHeight: '21px'
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
  );
};
