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
      <Box sx={{ padding: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Left Panel
        </Typography>
      </Box>

      {/* content */}
      <Box
        sx={{
          padding: 2,
          borderRadius: 2,
          gridTemplateRows: '1ft auto auto auto auto auto auto',
        }}
      >
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
            </Box>
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
                sx={{ bgcolor: '#6a5acd', width: '134px', borderRadius: '6px' }}
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
                A highly skilled and creative professional with a passion for
                web design and a proven track record of delivering outstanding
                results. I am dedicated to continuously expanding my knowledge
                and expertise in the field of UI/UX design, with a strong
                foundation gained from IT Step Academy.
              </p>
              <p style={{ marginTop: 15 }}>
                Throughout my career, I have successfully collaborated with
                clients and team members to deliver innovative and impactful web
                design solutions. My strong creative skills, combined with
                effective time management, have enabled me to consistently meet
                project deadlines and exceed client expectations.
              </p>
              <p style={{ marginTop: 15 }}>
                I thrive in dynamic and fast-paced environments, where I can
                leverage my creativity and technical expertise to tackle
                challenges and drive success. With a commitment to continuous
                learning and improvement, I am always eager to explore new
                technologies and trends in web design to stay ahead of the
                curve. As a skilled and dedicated web designer, I am confident
                in my ability to deliver exceptional results and contribute
                positively to any project or team.
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
            Perfect proficiency in UI/UX design principles, with a keen eye for
            creating intuitive and visually appealing user interfaces that
            enhance user experience and drive engagement. Basic understanding of
            HTML/CSS, capable of building and styling web pages to create
            aesthetically pleasing layouts and designs. Basic knowledge of
            JavaScript for implementing interactive elements and enhancing user
            interactivity on websites. Perfect command of graphic design
            software, including Photoshop, Illustrator, for creating
            high-quality visuals, logos, and branding materials. C1 level in
            English, enabling effective communication with international clients
            and colleagues. Medium proficiency in responsive design techniques,
            ensuring websites display optimally across various devices and
            screen sizes. Medium proficiency in marketing principles, with the
            ability to integrate marketing strategies and techniques into web
            design projects.
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
            Senior Web Designer - Digital Innovations Ltd. (2018): Led a team of
            designers in the conceptualization and execution of cutting-edge web
            design projects for a diverse range of clients. Spearheaded the
            implementation of UI/UX design best practices, resulting in a 30%
            increase in user engagement and conversion rates. Collaborated
            closely with developers and stakeholders to ensure seamless
            integration of design concepts and functionality. Lead Graphic
            Designer - Creative Solutions Agency (2015-2018): Developed branding
            strategies and visual identities for clients across various
            industries, from concept to execution. Managed a team of graphic
            designers and provided mentorship and guidance to foster creativity
            and professional growth.
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
            During my time at IT Step Academy, I immersed myself in the world of
            computer graphics and design, acquiring a solid foundation of
            knowledge and skills essential for a career in web design. The
            comprehensive curriculum covered a wide range of topics, including
            UI/UX design principles, graphic design fundamentals, HTML/CSS, and
            responsive design techniques. Through hands-on projects and
            practical assignments, I honed my creativity and technical
            proficiency, gaining valuable insights into the intricacies of
            modern web design. To further expand my skill set and stay abreast
            of the latest technologies, I pursued a specialized course in
            JavaScript programming on Udemy. This intensive program provided a
            deep dive into JavaScript fundamentals, advanced concepts, and best
            practices for building dynamic and interactive web applications.
            Through engaging lectures, coding exercises, and real-world
            projects, I developed a comprehensive understanding of JavaScript
            and its applications in web development. In addition to formal
            education, I am committed to lifelong learning and continuous
            improvement in my field. I actively seek out opportunities to expand
            my knowledge and skills through online courses, workshops, and
            industry events. By staying updated with the latest trends,
            technologies, and best practices in web design, I ensure that my
            skills remain relevant and my work remains at the forefront of
            innovation.
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
      </Box>

      {/* right panel */}
      <Box sx={{ padding: 2, borderRadius: 2 }}>
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
