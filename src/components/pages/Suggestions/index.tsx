import { Box, Button, InputBase, Modal } from '@mui/material';
import { TopNavBar } from '@components/common';
import AddNewPostSvg from '@assets/icons/AddNewPost.svg';
import VacanciesSvg from '@assets/icons/Vacancies.svg';
import ReportProblemSvg from '@assets/icons/ReportProblem.svg';
import SettingsSvg from '@assets/icons/Settings.svg';
import LogOutSvg from '@assets/icons/LogOut.svg';
import SearchSvg from '@assets/icons/Search.svg';
import FilterSvg from '@assets/icons/Filter.svg';
import { AddPostModal } from '@components/modules/AddPostModal';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';

export const Suggestions = () => {

  const { t } = useTranslation('translation');
  const [isPostModalOpen, setIsPostModalOpen] = React.useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const handleClosePostModal = () => {
    setIsPostModalOpen(false);
  };

  const handleOpenPostModal = () => {
    setIsPostModalOpen(true);
  };

  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  React.useEffect(() => {

  }, [search]);

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
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <TopNavBar />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 1fr',
          gap: 2,
          padding: 2,
          height: '100vh',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        <Box id="left-panel" sx={{ bgcolor: '#2c2c2e', padding: 2, borderRadius: 2 }}>
          Left
        </Box>

        <Box sx={{
          bgcolor: '#1c1c1e',
          padding: 2,
          borderRadius: 2,
        }}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: '4fr 1fr',
            gap: 1,
          }}
          >
            <Box sx={{ backgroundColor: '#28282C', borderRadius: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <img src={SearchSvg} alt="search" />
              <InputBase fullWidth size={'small'} sx={{ color: 'secondary.light', padding: 1 }}
                         onChange={e => setSearch(e.target.value)} />
            </Box>
            <Box sx={{ backgroundColor: '#28282C', borderRadius: 2 }}>
              <Button sx={{ color: 'secondary.light', gap: 1 }} onClick={handleOpenFilterModal}>
                <img src={FilterSvg} alt="filter" />
                <Typography textTransform={'none'}>{t('suggestions.filter')}</Typography>
              </Button>
            </Box>
            <Modal
              open={isFilterModalOpen}
              onClose={handleCloseFilterModal}
              aria-labelledby={'modal-filter-title'}
            >
              <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'bg.main',
                width: '500px',
                boxShadow: 24,
              }}
              >
                <Typography id={'modal-filter-title'}
                            sx={{
                              textTransform: 'none',
                              textAlign: 'center',
                              color: 'primary.main'
                            }}>
                  {t('suggestions.filter')}
                </Typography>
                <Typography sx={{color: 'primary.main'}} >{t('')}</Typography>
              </Box>
            </Modal>
          </Box>
          <Box sx={{
            bgcolor: 'whitesmoke', width: '100%',
          }}>

          </Box>
        </Box>

        <Box sx={{ bgcolor: '#2c2c2e', padding: 2, borderRadius: 2 }}>
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
            onClick={handleOpenPostModal}
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
            <p> Log out</p>
          </Button>
        </Box>
        <AddPostModal
          isOpen={isPostModalOpen}
          handleClose={handleClosePostModal}
        />
      </Box>
    </Box>
  );
};