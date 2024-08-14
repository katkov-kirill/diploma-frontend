import Box from '@mui/material/Box'
import BGImage from '@assets/onboarding_bgimage.jpeg'
import LogoImage from '@assets/workwave_logo.png'
import { BottomNavigation, BottomNavigationAction, Stack } from '@mui/material'
// import { ThemeProvider } from '@mui/material/styles'
import { Text } from '@components/common'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
// import { theme } from '../../../styles/theme.ts'

export const OnBoarding = () => {

  const { t } = useTranslation('translation')
  const [value, setValue] = useState(0)

  return (
    <Box
      width="100%"
      minHeight="calc(100vh - 24px)"
      display="flex"
      flexDirection="column"
      justifyContent={{
        xs: 'end',
        md: 'space-between',
      }}
      alignItems="center"
      sx={{
        backgroundImage: `url(${BGImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Stack
        component="header"
        height="56px"
        justifySelf="start"
        alignSelf="stretch"
        display="flex"
        alignItems="start"
        justifyContent="center"
        sx={{
          backgroundColor: 'bg.main',
        }}
      >
        <img src={LogoImage} alt="WorkWave" style={{ objectFit: 'contain', height: '80%' }} />
      </Stack>
      <Stack
        maxWidth={{ xs: '100%', md: '560px' }}
        width="100%"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        padding="20px"
        bgcolor="#28282CC2"
        sx={{
          flexGrow: 1,
          borderTopLeftRadius: {
            xs: '86px',
            md: 0,
          },
          borderTopRightRadius: {
            xs: '86px',
            md: 0,
          },
        }}
      >
        <img src={LogoImage} alt="WorkWave" style={{ objectFit: 'contain', width: '60%' }} />
        <Text fontSize="32px" fontWeight={600} mb="10px">
          {t('onboarding.about.title')}
        </Text>
        <Text fontSize="12px" maxWidth="560px" align="center" mb="30px">
          {t('onboarding.about.subtitle')}
        </Text>
        <Text fontSize="32px" fontWeight={600} mb="10px">
          {t('onboarding.weAre.title')}
        </Text>
        <Text fontSize="12px" maxWidth="560px" align="center" mb="30px">
          {t('onboarding.weAre.subtitle')}
        </Text>
        <Text fontSize="32px" fontWeight={600} mb="10px">
          {t('onboarding.weDo.title')}
        </Text>
        <Text fontSize="12px" maxWidth="560px" align="center" mb="30px">
          {t('onboarding.weDo.subtitle')}
        </Text>

      </Stack>
      {/*<ThemeProvider theme={theme}>*/}
      <BottomNavigation
        component="footer"
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue)
        }}
        sx={{
          "& .MuiBottomNavigationAction-root": {
            color: "secondary.main",
          },
          "& .Mui-selected, svg": {
            color: "primary.main",
          },
          alignSelf: 'stretch',
          backgroundColor: 'bg.main',
          justifySelf: 'end',
        }}
      >
        <BottomNavigationAction label="Home" />
        <BottomNavigationAction label="Contact Us" />
        <BottomNavigationAction label="Services" />
        <BottomNavigationAction label="News" />
        <BottomNavigationAction label="Help Center" />
      </BottomNavigation>
      {/*</ThemeProvider>*/}
    </Box>
  )
}