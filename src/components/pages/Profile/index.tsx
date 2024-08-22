import { RightManagingProfilePanel, TopNavBar } from '@components/common';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useGetProfileQuery } from '../../../services/profileApi';
import { SpecificUserProfile } from './subcomponents/SpecificUserProfile';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Profile = () => {
  // const userId = localStorage.getItem('user');

  // TODO setup id
  // const userId = 'user1';

  const { id } = useParams<{ id: string }>();
  const { data: response, error, isLoading } = useGetProfileQuery(id);

  useEffect(() => {
    console.log(response);
  }, [response]);

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
            backgroundColor: '#16191e',
            height: '100vh',
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 3fr 1fr',
            gap: 2,
            padding: 2,
            height: '100vh',
            backgroundColor: '#16191e',
          }}
        >
          {/* left panel */}
          <Box sx={{ padding: 2, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ color: '#fff' }}>
              Left Panel
            </Typography>
          </Box>

          {/* main content */}
          <SpecificUserProfile response={response} role={response.profile} />

          {/* right panel */}
          <RightManagingProfilePanel />
        </Box>
      )}
    </>
  );
};
