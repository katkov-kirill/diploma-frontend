import { RightManagingProfilePanel, TopNavBar } from '@components/common';
import {
  Box,
  CircularProgress,
  Typography,
} from '@mui/material';
// import { Button } from '@components/common';

import { useGetProfileQuery } from '../../../services/profileApi';
import { SpecificUserProfile } from './subcomponents/SpecificUserProfile';

export const Profile = () => {
  // const userId = localStorage.getItem('user');

  const userId = '9cce928a-fd87-4c42-bdc2-b04efdf599ea';

  const { data: response, error, isLoading } = useGetProfileQuery(userId);


  return (
    <>
      {/* navigation top bar */}
      <TopNavBar />

      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      ) : (
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
        <Box sx={{ padding: 2, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ color: '#fff' }}>
            Left Panel
          </Typography>
        </Box>

        {/* main content */}
        <SpecificUserProfile response={response} role={response.profile.user.role} />

        {/* right panel */}
        <RightManagingProfilePanel />
      </Box>
      )}
    </>
  );
};
