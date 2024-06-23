import { Box, Checkbox, Stack } from '@mui/material';
import { Button, Input, Text } from '@components/common';

import { GoogleButton } from '@components/common/GoogleButton';
import SignInBg from '@assets/signin-bg.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const SignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box
      minHeight="calc(100vh - 24px)"
      display="flex"
      justifyContent="center"
      alignItems={{ md: 'center', xs: 'flex-start' }}
    >
      <Stack
        justifyContent="space-between"
        width="100%"
        height="100%"
        gap={{
          xs: 0,
          md: '20px',
        }}
        sx={{
          flexDirection: {
            xs: 'column-reverse',
            md: 'row',
          },
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          width="100%"
          alignItems="center"
          bgcolor="#242424"
          sx={{
            borderTopLeftRadius: {
              xs: '86px',
              md: 0,
            },
            borderTopRightRadius: {
              xs: '86px',
              md: 0,
            },
          }}
        >
          <Stack padding="30px" width="100%" minWidth="300px" maxWidth="580px">
            <Text variant="h2" fontSize="39px" fontWeight={600} align="center">
              {t('signInPage.welcomeBack')}
            </Text>
            <Text
              variant="h2"
              fontSize="15px"
              align="center"
              marginBottom="20px"
            >
              {t('signInPage.subtitle')}
            </Text>
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
        <Box
          width="100%"
          maxWidth="1036px"
          minHeight="calc(100vh - 24px)"
          marginBottom={{
            xs: '-80px',
            md: 0,
          }}
          sx={{
            backgroundImage: `url(${SignInBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderTopLeftRadius: {
              xs: 0,
              md: '86px',
            },
            borderBottomLeftRadius: {
              xs: 0,
              md: '86px',
            },
            minHeight: {
              xs: 'calc(100vh - 520px)',
              md: 'calc(100vh - 24px)',
            },
          }}
        />
      </Stack>
    </Box>
  );
};
