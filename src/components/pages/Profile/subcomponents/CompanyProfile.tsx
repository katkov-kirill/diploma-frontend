import { Box } from '@mui/material';
import { UserProfileResponse } from '../types/UserProfileResponse';
import { UserProfileCard } from './UserProfileCard';
import { ProfileCard } from '../types/ProfileCard';
import { Section } from './Section';
import { useTranslation } from 'react-i18next';

export const CompanyProfile = ({
  profileResponse,
}: {
  profileResponse: UserProfileResponse;
}) => {
  const { t } = useTranslation();

  const profileData: ProfileCard = {
    name: profileResponse.profile.company.name,
    role: 'Employer',
    shortDescription: profileResponse.profile.company.description,
    location: profileResponse.profile.company.location,
    skills: [],
    isOwner: true,
  };

  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: 2,
        gridTemplateRows: '1fr auto auto auto auto auto auto',
        backgroundColor: '#16191e'
      }}
    >
      <UserProfileCard profileCardData={profileData} />

      {/* about us */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '3fr 1fr',
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
              content: profileResponse.profile.company.about_us,
            }}
          />
        </Box>

        <Box
          sx={{
            backgroundColor: '#28282C',
            borderRadius: '20px',
            padding: 2,
            height: '100%',
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
          }}
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
            content: profileResponse.profile.company.contact_phone
          }}
        />
      </Box>
    </Box>
  );
};
