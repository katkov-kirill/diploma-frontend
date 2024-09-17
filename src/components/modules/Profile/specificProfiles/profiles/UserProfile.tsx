import { Box } from '@mui/material';
import { UserProfileResponse } from 'src/types';
import { UserProfileCard } from '../../content';
import { ProfileCard } from 'src/types';
import { Section } from '../../content';
import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';

export const UserProfile = ({
  profileResponse,
  isOwner,
}: {
  profileResponse: UserProfileResponse;
  isOwner: boolean;
}) => {
  const { t } = useTranslation();

  const profileData: ProfileCard = {
    name: profileResponse.profile.user.name,
    role: 'Employee',
    shortDescription: profileResponse.profile.user.position,
    location: profileResponse.profile.user.location,
    skills: [],
    isOwner: true,
  };

  const [formInputs, setFormInputs] = React.useState({
    skills_desc: '',
    about_info: '',
    education: '',
    experience: '',
  });

  useEffect(() => {
    // TODO: set correct values after double click and cha
    console.log('profile response from UserProfile', profileResponse.profile.user.skills);
  }, []);

  // console.log('form inputs: ', formInputs);

  const handleContentChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setFormInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: 2,
        gridTemplateRows: '1fr auto auto auto auto auto auto',
        backgroundColor: '#16191e',
      }}
    >
      {/* TODO: setup showSkills by the ownership of the page */}
      <UserProfileCard
        profileCardData={profileData}
        editMode={false}
        size={''}
        showSkills={false}
      />

      {/* about me + full skills */}
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
            height: '100%',
          }}
        >
          <Section
            sectionData={{
              title: t('profilePage.user.aboutUserTitle'),
              content: profileResponse.profile.user.about_info,
              isOwner: profileData.isOwner,
              skills: null,
            }}
            isSkillsSection={false}
            contextName="about_info"
            onContentChange={handleContentChange}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: '#28282C',
            borderRadius: '20px',
            padding: 2,
            display: {
              xs: 'none',
              md: 'flex',
            },
            height: '100%',
          }}
        >
          <Section
            sectionData={{
              title: 'Full skills',
              // title: t('profilePage.user.aboutUserTitle'),
              content: '',
              isOwner: profileData.isOwner,
              skills: profileResponse.profile.skills,
            }}
            isSkillsSection={true}
            contextName="skills"
            onContentChange={handleContentChange}
          />
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
            isOwner: profileData.isOwner,
            skills: null,
          }}
          isSkillsSection={false}
          contextName="skills_desc"
          onContentChange={handleContentChange}
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
            isOwner: profileData.isOwner,
            skills: null,
          }}
          isSkillsSection={false}
          contextName="experience"
          onContentChange={handleContentChange}
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
            isOwner: profileData.isOwner,
            skills: null,
          }}
          isSkillsSection={false}
          contextName="education"
          onContentChange={handleContentChange}
        />
      </Box>
    </Box>
  );
};
