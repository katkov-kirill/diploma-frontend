import React from 'react';
import { Avatar, Box, Button, Chip, Typography } from '@mui/material';
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
      {/* left panel */}
      <Box sx={{ bgcolor: '#2c2c2e', padding: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Left Panel
        </Typography>
      </Box>

      {/* content */}
      <Box sx={{ bgcolor: '#1c1c1e', padding: 2, borderRadius: 2 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '5fr 1fr',
            gap: 2,
            alignItems: 'center',
          }}
        >
          {/* left  */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateRows: '3fr 1fr',
              gap: 2,
              alignItems: 'center',
            }}
          >
            {/* Typography */}
            <Box sx={{ display: 'flex', justifyContent: 'left' }}>
              {/* Profile Image */}
              <Avatar sx={{ width: 100, height: 100 }} src="profile.jpg" />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: 2,
                }}
              >
                {/* Center content (Name, Job Title, Location, and Skills) */}
                <Typography variant="h6" sx={{ color: '#fff' }}>
                  Full name
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#ccc' }}>
                  Position
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#aaa', marginBottom: 1 }}
                >
                  Location: London, United Kingdom
                </Typography>
                {/* Skill Tags */}
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <Chip
                label="UI/UX Design"
                sx={{ bgcolor: '#333', color: '#fff', borderRadius: '6px', minWidth: '110px' }}
              />
              <Chip
                label="HTML/CSS"
                sx={{ bgcolor: '#333', color: '#fff', borderRadius: '6px', minWidth: '110px' }}
              />
              <Chip
                label="Graphic Design Software"
                sx={{ bgcolor: '#333', color: '#fff', borderRadius: '6px', minWidth: '110px' }}
              />
              <Chip
                label="Basic JavaScript"
                sx={{ bgcolor: '#333', color: '#fff', borderRadius: '6px', minWidth: '110px' }}
              />
              <Chip
                label="Edit"
                sx={{ bgcolor: '#333', color: '#fff', borderRadius: '6px' , minWidth: '110px'}}
              />
            </Box>
          </Box>

          {/* right */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateRows: '1fr 2fr', 
              gap: 2,
              alignItems: 'center'
            }}
          >
            <Box></Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right' }}>
              {/* Action Buttons */}
              <Button
                variant="outlined"
                sx={{
                  marginBottom: 3,
                  color: '#fff',
                  borderColor: '#fff',
                  width: '134px',
                  borderRadius: '6px'
                }}
              >
                Edit Profile
              </Button>
              <Button
                variant="contained"
                sx={{ bgcolor: '#6a5acd', width: '134px', borderRadius: '6px' }}
              >
                Activity
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* right panel */}
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
          <p>Log out</p>
        </Button>
      </Box>
    </Box>
  );
};
