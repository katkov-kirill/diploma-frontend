import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import AddNewPostSvg from '@assets/icons/AddNewPost.svg';
import VacanciesSvg from '@assets/icons/Vacancies.svg';
import ReportProblemSvg from '@assets/icons/ReportProblem.svg';
import SettingsSvg from '@assets/icons/Settings.svg';
import LogOutSvg from '@assets/icons/LogOut.svg';

export const ContentLayout: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',
        gap: 2,
        padding: 2,
        height: '100vh',
      }}
    >
      <Box sx={{ bgcolor: '#2c2c2e', padding: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Left Panel
        </Typography>
      </Box>

      <Box sx={{ bgcolor: '#1c1c1e', padding: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Main Content
        </Typography>
      </Box>

      <Box sx={{ bgcolor: '#2c2c2e', padding: 2, borderRadius: 2 }}>
        <Button
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            color: '#8A8F98',
            backgroundColor: '#3a3a3c',
            marginBottom: 2,
            padding: 1,
            borderRadius: '8px',
            textTransform: 'none',
            width: '100%',
          }}
        >
          <img
            src={AddNewPostSvg}
            alt="Add new post"
            style={{ marginRight: '8px' }}
          />
          <p>Add new post</p>
        </Button>
        <Button
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            color: '#8A8F98',
            backgroundColor: '#3a3a3c',
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
          <p>Vacancies</p>
        </Button>
        <Button
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            color: '#8A8F98',
            backgroundColor: '#3a3a3c',
            marginBottom: 2,
            padding: 1,
            borderRadius: 2,
            textTransform: 'none',
            width: '100%',
          }}
        >
          <img
            src={ReportProblemSvg}
            alt="Report Problem"
            style={{ marginRight: '8px' }}
          />
          <p>Report a problem</p>
        </Button>
        <Button
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            color: '#8A8F98',
            backgroundColor: '#3a3a3c',
            marginBottom: 2,
            padding: 1,
            borderRadius: 2,
            textTransform: 'none',
            width: '100%',
          }}
        >
          <img
            src={SettingsSvg}
            alt="Settings"
            style={{ marginRight: '8px' }}
          />
          <p>Settings</p>
        </Button>
        <Button
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            color: '#8A8F98',
            backgroundColor: '#3a3a3c',
            padding: 1,
            borderRadius: 2,
            textTransform: 'none',
            width: '100%',
          }}
        >
          <img src={LogOutSvg} alt="Log out" style={{ marginRight: '8px' }} />
          <p> Log out</p>
        </Button>
      </Box>
    </Box>
  );
};
