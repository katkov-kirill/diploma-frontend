import BGImage from '@assets/report_bgimage.jpeg'
import LogoImage from '@assets/workwave_logo.png'
import {
  BottomNavigation,
  BottomNavigationAction,
  Stack,
  Box,
  TextField,
  //InputAdornment, IconButton, SvgIcon,
  Modal,
} from '@mui/material'
import { Text, Button } from '@components/common'
import { useTranslation } from 'react-i18next'
import { useState, FormEvent } from 'react'

export const Report = () => {

  const { t } = useTranslation('translation')
  const [value, setValue] = useState(0)
  const [showForm, setShowForm] = useState<boolean>(false)
  const [category, setCategory] = useState('')
  const [question, setQuestion] = useState('')
  const [report, setReport] = useState({ category: category, question: question })
  const handleReportForm = (cat: string) => {
    setCategory(cat)
    setShowForm(true)
  }
  const closeForm = () => {
    setShowForm(false)
  }

  const handleReport = async (event: FormEvent) => {
    event.preventDefault()
    setReport({ category: category, question: question })
    if (question !== '' && category !== '') {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(report),
      }
      await fetch(``, requestOptions)
        .then((res) => res.json())
        .catch((err) => {
          console.error(err)
        })
    }
    console.log(report)
    setQuestion('')
    setCategory('')
  }
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
        flexGrow={1}
        sx={{
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
        <Stack>
          <Text variant="h6">{t('report.howHelp')}</Text>
          <Text variant="h6">{t('report.selectCategory')}</Text>
        </Stack>
        <Stack gap={1}>
          <Button fullWidth $variant="transparent"
                  onClick={() => handleReportForm('pages')}>{t('report.buttons.pages')}</Button>
          <Button fullWidth $variant="transparent"
                  onClick={() => handleReportForm('groups')}>{t('report.buttons.groups')}</Button>
          <Button fullWidth $variant="transparent"
                  onClick={() => handleReportForm('profile')}>{t('report.buttons.profile')}</Button>
          <Button fullWidth $variant="transparent"
                  onClick={() => handleReportForm('safety')}>{t('report.buttons.safety')}</Button>
          <Button fullWidth $variant="transparent"
                  onClick={() => handleReportForm('messaging')}>{t('report.buttons.messaging')}</Button>
          <Button fullWidth $variant="transparent"
                  onClick={() => handleReportForm('premium')}>{t('report.buttons.premium')}</Button>
          <Button fullWidth $variant="transparent"
                  onClick={() => handleReportForm('other')}>{t('report.buttons.other')}</Button>
        </Stack>

        <Modal
          open={showForm}
          onClose={closeForm}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box
            sx={{
              width: 500,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'secondary.main',
              border: '1px solid #000',
              borderRadius: '5px',
              boxShadow: 24,
              p: 1,
              color: '#000',
            }}
          >
            <Stack component="form" width="100%" gap="10px" onSubmit={handleReport}>
              <Text variant={'body1'} mb={1}>WorkWave shortcuts</Text>

              <TextField
                id="question"
                label={t('helpTicket.question')}
                multiline
                rows={4}
                onChange={event => setQuestion(event.target.value)}
                // inputProps={{
                //   endAdornment: <InputAdornment position="end">
                //     <IconButton >
                //       <SvgIcon width={26} height={29}>
                //         <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                //           <path fill-rule="evenodd" clip-rule="evenodd"
                //                 d="M22.6487 3.73814C22.3727 3.46241 22.0451 3.24368 21.6845 3.09445C21.3239 2.94523 20.9374 2.86842 20.5471 2.86842C20.1569 2.86842 19.7704 2.94523 19.4098 3.09445C19.0492 3.24368 18.7216 3.46241 18.4456 3.73814L3.9951 18.1759C3.06622 19.1042 2.54445 20.3631 2.54458 21.6757C2.5447 22.9882 3.06671 24.247 3.99576 25.1751C4.92481 26.1032 6.1848 26.6245 7.49856 26.6243C8.81231 26.6242 10.0722 26.1027 11.0011 25.1744L21.1627 15.0218C21.3505 14.847 21.5989 14.7518 21.8555 14.7563C22.1122 14.7608 22.357 14.8647 22.5385 15.046C22.7201 15.2274 22.824 15.472 22.8285 15.7285C22.8331 15.9849 22.7378 16.2331 22.5628 16.4207L12.4012 26.5733C11.7604 27.2304 10.9954 27.7537 10.1505 28.113C9.3056 28.4723 8.39772 28.6604 7.47951 28.6663C6.56131 28.6722 5.65107 28.4959 4.80161 28.1476C3.95216 27.7993 3.1804 27.2858 2.53112 26.6371C1.88183 25.9884 1.36796 25.2173 1.01932 24.3686C0.670678 23.5199 0.494206 22.6105 0.500145 21.6931C0.506084 20.7757 0.694316 19.8686 1.05392 19.0245C1.41352 18.1803 1.93733 17.416 2.59496 16.7757L17.0441 2.33792C17.9732 1.40986 19.2332 0.888548 20.5469 0.888672C21.8607 0.888796 23.1206 1.41034 24.0495 2.33858C24.9784 3.26681 25.5001 4.52569 25.5 5.83829C25.4999 7.15089 24.9779 8.40968 24.0488 9.33774L9.60755 23.7663L9.59698 23.7768L9.58774 23.7861L9.58509 23.7887L9.58113 23.7914C9.01627 24.3181 8.26828 24.6044 7.49575 24.5894C6.72321 24.5745 5.98687 24.2595 5.44283 23.7113C4.89879 23.1632 4.58982 22.4248 4.58143 21.6529C4.57304 20.8809 4.86588 20.136 5.39788 19.5762L15.714 9.26911C15.9008 9.08872 16.151 8.98884 16.4107 8.99097C16.6705 8.9931 16.919 9.09708 17.1028 9.28051C17.2865 9.46394 17.3908 9.71214 17.3932 9.97166C17.3956 10.2312 17.2958 10.4813 17.1155 10.668L6.79934 20.9751C6.61227 21.1595 6.5062 21.4107 6.50447 21.6733C6.50273 21.9359 6.60548 22.1884 6.7901 22.3753C6.97472 22.5622 7.22609 22.6682 7.48891 22.6699C7.75174 22.6716 8.00449 22.569 8.19156 22.3845L22.6487 7.93619C22.9247 7.66046 23.1436 7.33311 23.2929 6.97285C23.4423 6.61258 23.5192 6.22645 23.5192 5.83651C23.5192 5.44656 23.4423 5.06043 23.2929 4.70017C23.1436 4.3399 22.9247 4.01388 22.6487 3.73814Z"
                //                 fill="#5D6AD1" />
                //         </svg>
                //       </SvgIcon>
                //     </IconButton>
                //   </InputAdornment>
                // }}
              />
              <Button $variant={'primary'} type="submit">{t('helpTicket.send')}</Button>
            </Stack>
          </Box>
        </Modal>

      </Stack>
      <BottomNavigation
        component="footer"
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue)
        }}
        sx={{
          '& .MuiBottomNavigationAction-root': {
            color: 'secondary.main',
          },
          '& .Mui-selected, svg': {
            color: 'primary.main',
          },
          alignSelf: 'stretch',
          backgroundColor: 'bg.main',
          justifySelf: 'end',
        }}
      >
        <BottomNavigationAction label={t('bottomNav.home')} />
        <BottomNavigationAction label={t('bottomNav.contactUs')} />
        <BottomNavigationAction label={t('bottomNav.services')} />
        <BottomNavigationAction label={t('bottomNav.news')} />
        <BottomNavigationAction label={t('bottomNav.help')} />
      </BottomNavigation>
    </Box>
  )
}