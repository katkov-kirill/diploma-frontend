import { Button, Text } from '@components/common';

import BGImage from '@assets/login-bg.png';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Welcome = () => {
  const { t } = useTranslation('translation');
  const navigate = useNavigate();

  const handleRedirectSignIn = () => {
    navigate('/sign-in');
  };

  const handleRedirectSignUp = () => {
    navigate('/sign-up');
  };

  return (
    <Box
      width="100%"
      minHeight="calc(100vh - 24px)"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: `url(${BGImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Stack
        maxWidth="560px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text variant="h2" fontWeight={600} mb="10px">
          {t('welcomePage.title')}
        </Text>
        <Text maxWidth="560px" align="center" mb="30px">
          {t('welcomePage.subtitle')}
        </Text>

        <Stack width="100%" gap="30px">
          <Button fullWidth $variant="secondary" onClick={handleRedirectSignIn}>
            <Text fontWeight={600}>{t('general.signin')}</Text>
          </Button>

          <Button fullWidth $variant="primary" onClick={handleRedirectSignUp}>
            <Text fontWeight={600}>{t('general.signup')}</Text>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
