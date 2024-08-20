import { RightManagingProfilePanel, TopNavBar } from '@components/common';
import {
  Avatar,
  Box,
  Button,
  Typography,
  CircularProgress,
} from '@mui/material';
// import { Button } from '@components/common';

import { useGetProfileQuery } from '../../../services/profileApi';
import { useEffect, useState } from 'react';

export const Profile = () => {
  // const userId = localStorage.getItem('user');

  const userId = '9cce928a-fd87-4c42-bdc2-b04efdf599ea';

  const { data: response, error, isLoading } = useGetProfileQuery(userId);
  const [role, setRole] = useState();

  useEffect(() => {
    if (!isLoading && response) {
      console.log('response:', response);
      setRole(response.profile.role);
    } else if (error) {
      console.error('Error fetching profile:', error);
    }
  }, [response, error, isLoading]);

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
          <Box
            sx={{
              padding: 2,
              borderRadius: 2,
              gridTemplateRows: '1ft auto auto auto auto auto auto',
            }}
          >
            {/* content layout */}
            <>
              {/* profile data */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '5fr 1fr',
                  gap: 2,
                  alignItems: 'center',
                  backgroundColor: 'gray',
                  padding: 2,
                  borderRadius: '20px', // bgImage here
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
                    <Avatar
                      sx={{ width: 100, height: 100 }}
                      src="profile.jpg"
                    />
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
                        {response.profile.user.first_name +
                          ' ' +
                          response.profile.user.last_name}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: '#ccc' }}>
                        {response.profile.user.position}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: '#aaa', marginBottom: 1 }}
                      >
                        Location:{response.profile.user.location}
                      </Typography>
                    </Box>
                  </Box>
                  {/* Skill Tags */}
                  {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Chip
                      label="UI/UX Design"
                      sx={{
                        bgcolor: '#333',
                        color: '#fff',
                        borderRadius: '6px',
                        minWidth: '110px',
                      }}
                    />
                    <Chip
                      label="HTML/CSS"
                      sx={{
                        bgcolor: '#333',
                        color: '#fff',
                        borderRadius: '6px',
                        minWidth: '110px',
                      }}
                    />
                    <Chip
                      label="Graphic Design Software"
                      sx={{
                        bgcolor: '#333',
                        color: '#fff',
                        borderRadius: '6px',
                        minWidth: '110px',
                      }}
                    />
                    <Chip
                      label="Basic JavaScript"
                      sx={{
                        bgcolor: '#333',
                        color: '#fff',
                        borderRadius: '6px',
                        minWidth: '110px',
                      }}
                    />
                    <Chip
                      label="Edit"
                      sx={{
                        bgcolor: '#333',
                        color: '#fff',
                        borderRadius: '6px',
                        minWidth: '110px',
                      }}
                    />
                  </Box> */}
                </Box>

                {/* right */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateRows: '1fr 2fr',
                    gap: 2,
                    alignItems: 'center',
                  }}
                >
                  <Box></Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      textAlign: 'right',
                    }}
                  >
                    {/* Action Buttons */}
                    <Button
                      variant="outlined"
                      sx={{
                        marginBottom: 3,
                        color: '#fff',
                        borderColor: '#fff',
                        width: '134px',
                        borderRadius: '6px',
                      }}
                    >
                      Edit Profile
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: '#6a5acd',
                        width: '134px',
                        borderRadius: '6px',
                      }}
                    >
                      Activity
                    </Button>
                  </Box>
                </Box>
              </Box>

              {/* about me, full skills */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '3fr 1fr',
                  gap: 2,
                  alignItems: 'center',
                  marginTop: 2,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'gray',
                    borderRadius: '20px',
                    padding: 2,
                  }}
                >
                  {/* Center content (Name, Job Title, Location, and Skills) */}
                  <Typography variant="h6" sx={{ color: '#fff' }}>
                    About me
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#ccc' }}>
                    <p style={{ marginTop: 15 }}>
                      {response.profile.user.about_info}
                    </p>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        padding: 2,
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{ bgcolor: '#6a5acd', borderRadius: '6px' }}
                      >
                        Save
                      </Button>
                    </Box>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: 'gray',
                    borderRadius: '20px',
                    padding: 2,
                    height: '100%',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#fff' }}>
                    Full skills
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  backgroundColor: 'gray',
                  borderRadius: '20px',
                  marginTop: 2,
                  padding: 2,
                }}
              >
                {/* Center content (Name, Job Title, Location, and Skills) */}
                <Typography variant="h6" sx={{ color: '#fff' }}>
                  About skills
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#ccc' }}>
                  <p>{response.profile.user.skills_desc}</p>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      padding: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{ bgcolor: '#6a5acd', borderRadius: '6px' }}
                    >
                      Save
                    </Button>
                  </Box>
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: 'gray',
                  borderRadius: '20px',
                  marginTop: 2,
                  padding: 2,
                }}
              >
                {/* Center content (Name, Job Title, Location, and Skills) */}
                <Typography variant="h6" sx={{ color: '#fff' }}>
                  Experience
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#ccc' }}>
                  <p>{response.profile.user.experience}</p>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      padding: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{ bgcolor: '#6a5acd', borderRadius: '6px' }}
                    >
                      Save
                    </Button>
                  </Box>
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: 'gray',
                  borderRadius: '20px',
                  marginTop: 2,
                  padding: 2,
                }}
              >
                {/* Center content (Name, Job Title, Location, and Skills) */}
                <Typography variant="h6" sx={{ color: '#fff' }}>
                  Education
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#ccc' }}>
                  <p>{response.profile.user.education}</p>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      padding: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{ bgcolor: '#6a5acd', borderRadius: '6px' }}
                    >
                      Save
                    </Button>
                  </Box>
                </Typography>
              </Box>
            </>
          </Box>

          {/* right panel */}
          <RightManagingProfilePanel/>
        </Box>
      )}
    </>
  );
};
