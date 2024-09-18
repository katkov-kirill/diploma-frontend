import { Box, Button } from '@mui/material';

import AddNewPostSvg from '@assets/icons/AddNewPost.svg';
import { AddPostModal } from '@components/modules/AddPostModal';
import LogOutSvg from '@assets/icons/LogOut.svg';
import React from 'react';
import ReportProblemSvg from '@assets/icons/ReportProblem.svg';
import SettingsSvg from '@assets/icons/Settings.svg';
import { Text } from '../Text';
import VacanciesSvg from '@assets/icons/Vacancies.svg';
import { useLogoutMutation } from 'src/services/userApi';
import { useNavigate } from 'react-router-dom';
import { logoutSuccess } from 'src/store/userSlice';
import { useDispatch } from 'react-redux';

type Props = {
  children: React.ReactNode;
};

export const ContentLayout: React.FC<Props> = ({ children }) => {
  const [isPostModalOpen, setIsPostModalOpen] = React.useState(false);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClosePostModal = () => {
    setIsPostModalOpen(false);
  };

  const handleOpenPostModal = () => {
    setIsPostModalOpen(true);
  };

  const handleLogout = async () => {
    try {
      logout;

      dispatch(
        logoutSuccess()
      );

      navigate('/dashboard');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',
        gap: 2,
        padding: 2,
        height: '100vh',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      <Box sx={{ bgcolor: '#2c2c2e', padding: 2, borderRadius: 2 }}>
        <Text variant="h6" sx={{ color: '#fff' }}>
          Left Panel
        </Text>
      </Box>

      <Box sx={{ bgcolor: '#1c1c1e', padding: 2, borderRadius: 2 }}>
        <Text variant="h6" sx={{ color: '#fff' }}>
          {children}
        </Text>
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
          onClick={handleOpenPostModal}
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
          onClick={handleLogout}
        >
          <img src={LogOutSvg} alt="Log out" style={{ marginRight: '8px' }} />
          <p> Log out</p>
        </Button>
      </Box>
      <AddPostModal
        isOpen={isPostModalOpen}
        handleClose={handleClosePostModal}
      />
    </Box>
  );
};
