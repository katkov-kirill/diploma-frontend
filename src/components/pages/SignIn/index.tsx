import { Button, Input, Text } from '@components/common';
import { GoogleButton } from '@components/common/GoogleButton';
import { Box, Checkbox, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box minHeight="calc(100vh - 24px)">
      <Stack padding="40px">
        <Input type="email" className="mb-[32px]" placeholder="E-mail" />
        <Input type="password" placeholder="Password" />
        <Stack direction="row" alignItems="center">
          <Checkbox
            sx={{
              color: 'white',
              '&.Mui-checked': {
                color: 'primary',
              },
            }}
          />
          <Text>{t('general.rememberMe')}</Text>
        </Stack>
        <Button fullWidth $variant="primary">
          <Text fontWeight={600}>{t('general.signin')}</Text>
        </Button>
        <Text
          textAlign="center"
          mt="5px"
          mb="32px"
          onClick={() => navigate('/sign-up')}
          className="cursor-pointer"
        >
          {t('signInPage.noAccount')} <b>{t('general.signup')}</b>
        </Text>
        <GoogleButton />
      </Stack>
    </Box>
  );
};
