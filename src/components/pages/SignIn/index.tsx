import { Box, Checkbox, Stack } from '@mui/material';
import { Button, Input, Text } from '@components/common';

import { Dropdown } from '@components/common/Dropdown';
import { GoogleButton } from '@components/common/GoogleButton';
import React from 'react';
import SignInBg from '@assets/signin-bg.png';
import { useLoginMutation } from 'src/services/userApi';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { loginSuccess } from 'src/store/userSlice';

export const SignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const [formInputs, setFormInputs] = React.useState({
    email: '',
    password: '',
    role: '',
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeRole = (option: { value: string; label: string }) => {
    setFormInputs((prev) => ({ ...prev, role: option?.value ?? '' }));
  };

  const handleLogin = async () => {
    try {
      const response = await login({
        password: formInputs.password,
        email: formInputs.email,
        role: formInputs.role,
      }).unwrap();

      const { token, user } = response.data;

      // console.log('Token:', token);

      if (token && user) {
        dispatch(
          loginSuccess({
            token,
            user,
          })
        );

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        // console.log('Token stored:', localStorage.getItem('token'));
        // console.log('User stored:', localStorage.getItem('user'));

        navigate('/dashboard');
      } else {
        console.error('Token or user data is missing');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

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
            <Input
              name="email"
              type="email"
              className="mb-[16px]"
              placeholder="E-mail"
              onChange={handleChange}
            />
            <Input
              name="password"
              type="password"
              className="mb-[16px]"
              placeholder="Password"
              onChange={handleChange}
            />
            <Box>
              <Dropdown
                options={[
                  { label: 'Individual', value: 'user' },
                  { label: 'Company', value: 'company' },
                ]}
                label="I am a..."
                onChange={handleChangeRole}
                isClearable
                placeholder="I am a..."
              />
            </Box>
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
            <Button fullWidth $variant="primary" onClick={handleLogin}>
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
