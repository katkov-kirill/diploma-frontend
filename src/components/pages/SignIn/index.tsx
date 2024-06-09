import Box from '@mui/material/Box';
import BGImage from '@assets/login-bg.png';

export const SignIn = () => {
  return (
    <Box
      width="100%"
      minHeight="100vh"
      sx={{
        backgroundImage: `url(${BGImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></Box>
  );
};
