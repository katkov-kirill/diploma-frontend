import { Box } from '@mui/material';
import { UserProfileResponse } from '../types/UserProfileResponse';
import { UserProfileCard } from './UserProfileCard';
import { ProfileCard } from '../types/ProfileCard';
import { Section } from './Section';
import { useTranslation } from 'react-i18next';

export const UserProfile = ({
  profileResponse,
}: {
  profileResponse: UserProfileResponse;
}) => {
  const { t } = useTranslation();

  const profileData: ProfileCard = {
    name:
      profileResponse.profile.user.first_name +
      ' ' +
      profileResponse.profile.user.last_name,
    role: 'Employee',
    shortDescription: profileResponse.profile.user.position,
    location: profileResponse.profile.user.location,
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

      {/* about me + full skills */}
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
              title: t('profilePage.user.aboutUserTitle'),
              content: profileResponse.profile.user.about_info,
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

      {/* about skills */}
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
            title: t('profilePage.user.aboutSkillsTitle'),
            content: profileResponse.profile.user.skills_desc,
          }}
        />
        
      </Box>

      {/* experience */}
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
            title: t('profilePage.user.aboutExperienceTitle'),
            content: profileResponse.profile.user.experience,
          }}
        />
      </Box>

      {/* education */}
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
            title: t('profilePage.user.aboutEducationTitle'),
            content: profileResponse.profile.user.education,
          }}
        />
      </Box>
    </Box>
  );
};
