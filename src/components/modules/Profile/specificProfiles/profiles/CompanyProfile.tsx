import { Box } from '@mui/material';
import { UserProfileResponse } from 'src/types';
import { UserProfileCard } from '../../content';
import { ProfileCard } from 'src/types';
import { Section } from '../../content';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const CompanyProfile = ({
  profileResponse,
  isOwner,
}: {
  profileResponse: UserProfileResponse;
  isOwner: boolean;
}) => {
  const { t } = useTranslation();

  const profileData: ProfileCard = {
    name: profileResponse.profile.company.name,
    role: 'Employer',
    shortDescription: profileResponse.profile.company.description,
    location: profileResponse.profile.company.location,
    // aboutUs: , TODO stopped here yesterday
    skills: [],
    isOwner: true,
  };

  useEffect(() => {
    console.log("Company profile profile data: ");
    console.log(profileData);

    console.log("Company profile profile response: ");
    console.log(profileResponse);
  }, []);

  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: 2,
        gridTemplateRows: '1fr auto auto auto auto auto auto',
        backgroundColor: '#16191e',
      }}
    >
      <UserProfileCard profileCardData={profileData} editMode={false} />

      {/* about us */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: '3fr 1fr',
          },
          gap: 2,
          alignItems: 'center',
          marginTop: 2,
          fontFamily: 'Saira',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#28282C',
            borderRadius: '20px',
            padding: 2,
          }}
        >
          <Section
            sectionData={{
              title: t('profilePage.company.aboutUserTitle'),
              content: profileResponse.profile.company.about_info,
              isOwner: profileData.isOwner,
              skills: null,
            }}
            isSkillsSection={false}
          />
        </Box>

        <Box
          sx={{
            backgroundColor: '#28282C',
            borderRadius: '20px',
            padding: 2,
            height: '100%',
            display: {
              xs: 'none',
              md: 'flex',
            },
          }}
        >
          {/* <Typography variant="h6" sx={{ color: '#fff' }}>
            Full skills
          </Typography> */}
        </Box>
      </Box>

      {/* our projects */}
      <Box
        sx={{
          backgroundColor: '#28282C',
          borderRadius: '20px',
          marginTop: 2,
          padding: 2,
        }}
      >
        <Section
          sectionData={{
            title: t('profilePage.company.projectsTitle'),
            content: profileResponse.profile.company.description,
            isOwner: profileData.isOwner,
            skills: null,
          }}
          isSkillsSection={false}
        />
      </Box>

      {/* posts */}
      <Box
        sx={{
          backgroundColor: '#28282C',
          borderRadius: '20px',
          marginTop: 2,
          padding: 2,
        }}
      >
        <Section
          sectionData={{
            title: t('profilePage.postsTitle'),
            // TODO: set posts here
            content: profileResponse.profile.company.contact_phone,
            isOwner: profileData.isOwner,
            skills: null,
          }}
          isSkillsSection={false}
        />
      </Box>
    </Box>
  );
};
