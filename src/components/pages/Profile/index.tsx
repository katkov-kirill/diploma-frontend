import { RightManagingProfilePanel, TopNavBar } from '@components/common';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useGetProfileQuery } from '@services/profileApi';
import { SpecificUserProfile } from '@components/modules';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Profile = () => {
  // const userId = localStorage.getItem('user');

  // TODO setup id
  // TODO Full skills popup
  // TODO background image processing
  // TODO short description line must be under 30 caracters
  // TODO fix font family for input text in Section component
  // const userId = 'user1';

  const { id } = useParams<{ id: string }>();
  const { data: response, error, isLoading } = useGetProfileQuery(id);
  
  const [isOwner, setIsOwner] = useState(true);

  useEffect(() => {
    console.log('response from profile page, init: ');
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
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 3fr 1fr'
            },
            gap: 2,
            padding: 2,
            height: '100vh',
            backgroundColor: '#16191e',
          }}
        >
          {/* left panel */}
          <Box
            sx={{
              padding: 2,
              borderRadius: 2,
              display: {
                xs: 'none',
                md: 'grid',
              },
            }}
          >
            <Typography variant="h6" sx={{ color: '#fff' }}>
              Left Panel
            </Typography>
          </Box>

          {/* main content */}
          <SpecificUserProfile response={response} role={response.profile} isOwner={true} />

          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'grid',
              },
            }}
          >
            {/* right panel */}
            <RightManagingProfilePanel
              sx={{
                display: {
                  xs: 'none',
                  md: 'grid',
                },
              }}
            />
          </Box>
        </Box>
      )}
    </>
  );
};
