import { Box, Checkbox, Stack } from '@mui/material';
import { Button, Input, Text } from '@components/common';

import { Dropdown } from '@components/common/Dropdown';
import { GoogleButton } from '@components/common/GoogleButton';
import React from 'react';
import SignInBg from '@assets/signin-bg.png';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from 'src/services/userApi';
import { useTranslation } from 'react-i18next';

export const SignUp = () => {
  const [formInputs, setFormInputs] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'user',
    name: '',
  });
  const { t } = useTranslation();
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeRole = (option: { value: string; label: string }) => {
    setFormInputs((prev) => ({ ...prev, role: option?.value ?? '' }));
  };

  const getRegisterData = function() {
    if (formInputs.role == 'user'){
      return {
        first_name: formInputs.firstName,
        last_name: formInputs.lastName,
        password: formInputs.password,
        email: formInputs.email,
        password_confirmation: formInputs.password,
        role: formInputs.role,
      }
    } else {
      return {
        name: formInputs.firstName + ' ' + formInputs.lastName,
        password: formInputs.password,
        email: formInputs.email,
        password_confirmation: formInputs.password,
        role: formInputs.role,
      }
    }
  }

  const handleRegister = async () => {
    try {  

      const response = await register(getRegisterData()).unwrap();

      const { user } = response.data;

      if (user) {
        navigate('/sign-in');
      } else {
        console.error('Token or user data is missing');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  console.log('formData: ', formInputs);

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
              {t('signUpPage.title')}
            </Text>
            <Text
              variant="h2"
              fontSize="15px"
              align="center"
              marginBottom="20px"
            >
              {t('signUpPage.subtitle')}
            </Text>
            <Input
              name="firstName"
              type="text"
              className="mb-[16px]"
              placeholder="First name"
              onChange={handleChange}
              />
              <Input
                name="lastName"
                type="text"
                className="mb-[16px]"
                placeholder="Last name"
                onChange={handleChange}
              />
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
              placeholder="Password"
              onChange={handleChange}
              className="mb-[16px]"
            />
            <Box>
              <Dropdown
                options={[
                  { label: 'Individual', value: 'user' },
                  { label: 'Company', value: 'company' },
                ]}
                label="I am a..."
                //@ts-ignore
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
            <Button
              fullWidth
              $variant="primary"
              onClick={handleRegister}
            >
              <Text fontWeight={600}>{t('general.signup')}</Text>
            </Button>
            <Text
              textAlign="center"
              mt="5px"
              mb="32px"
              onClick={() => navigate('/sign-in')}
              className="cursor-pointer"
            >
              {t('signUpPage.hasAccount')} <b>{t('general.signin')}</b>
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
