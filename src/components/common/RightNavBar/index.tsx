import React from 'react';
import { Box, Button } from '@mui/material';
import { Props } from 'react-select';
import AddNewPostSvg from '@assets/icons/AddNewPost.svg';
import VacanciesSvg from '@assets/icons/Vacancies.svg';
import ReportProblemSvg from '@assets/icons/ReportProblem.svg';
import SettingsSvg from '@assets/icons/Settings.svg';
import LogOutSvg from '@assets/icons/LogOut.svg';
import { Text } from '@components/common';
import { useTranslation } from 'react-i18next';

export const RightNavBar: React.FC<Props> = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 2, borderRadius: 2 }}>
      <Button
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          color: '#8A8F98',
          backgroundColor: '#28282C',
          marginBottom: 2,
          padding: 1,
          borderRadius: '8px',
          textTransform: 'none',
          width: '100%',
        }}
      >
        {/* <Text variant="h2" fontSize="39px" fontWeight={600} align="center">
              {t('signInPage.welcomeBack')}
            </Text> */}

        <img
          src={AddNewPostSvg}
          alt="Add new post"
          style={{ marginRight: '8px' }}
        />
        <p>
          <Text
            variant="h2"
            fontSize="15px"
            align="center"
            style={{
              marginTop: '5px',
            }}
          >
            {t('rightManagingProfilePanel.addNewPost')}
          </Text>
        </p>
      </Button>
      <Button
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          color: '#8A8F98',
          backgroundColor: '#28282C',
          marginBottom: 2,
          padding: 1,
          borderRadius: 2,
          textTransform: 'none',
          width: '100%',
        }}
      >
        <img
          src={VacanciesSvg}
          alt="Vacancies"
          style={{ marginRight: '8px' }}
        />
        <p>
          <Text
            variant="h2"
            fontSize="15px"
            align="center"
            style={{
              marginTop: '5px',
            }}
          >
            {t('rightManagingProfilePanel.vacancies')}
          </Text>
        </p>
      </Button>
      <Button
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          color: '#8A8F98',
          backgroundColor: '#28282C',
          marginBottom: 2,
          padding: 1,
          borderRadius: 2,
          textTransform: 'none',
          width: '100%',
        }}
      >
        <img
          src={ReportProblemSvg}
          alt="Report a Problem"
          style={{ marginRight: '8px' }}
        />
        <p>
          <Text
            variant="h2"
            fontSize="15px"
            align="center"
            style={{
              marginTop: '5px',
            }}
          >
            {t('rightManagingProfilePanel.reportProblem')}
          </Text>
        </p>
      </Button>
      <Button
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          color: '#8A8F98',
          backgroundColor: '#28282C',
          marginBottom: 2,
          padding: 1,
          borderRadius: 2,
          textTransform: 'none',
          width: '100%',
        }}
        password123
        password1234
      >
        <img src={SettingsSvg} alt="Settings" style={{ marginRight: '8px' }} />
        <p>
          <Text
            variant="h2"
            fontSize="15px"
            align="center"
            style={{
              marginTop: '5px',
            }}
          >
            {t('rightManagingProfilePanel.settings')}
          </Text>
        </p>
      </Button>
      <Button
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          color: '#8A8F98',
          backgroundColor: '#28282C',
          padding: 1,
          borderRadius: 2,
          textTransform: 'none',
          width: '100%',
        }}
      >
        <img src={LogOutSvg} alt="Log out" style={{ marginRight: '8px' }} />
        <p>
          <Text
            variant="h2"
            fontSize="15px"
            align="center"
            style={{
              marginTop: '5px',
            }}
          >
            {t('rightManagingProfilePanel.logOut')}
          </Text>
        </p>
      </Button>
    </Box>
  );
};
