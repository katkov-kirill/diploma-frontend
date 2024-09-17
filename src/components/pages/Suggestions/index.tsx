import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  InputBase,
  Modal,
  Radio,
  RadioGroup,
} from '@mui/material';
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
  const [sortingValue, setSortingValue] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [filterData, setFilterData] = React.useState({
    sortingValue: '',
    intern: false,
    basic: false,
    middle: false,
    assistant: false,
    expert: false,
    location: '',
    fullTime: false,
    partTime: false,
    remote: false,
  });

  const handleSortingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortingValue(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

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

  const handleFilterData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(filterData);



    handleCloseFilterModal();
  };

  React.useEffect(() => {

  }, [search]);

  React.useEffect(() => {

    setFilterData({ ...filterData, sortingValue: sortingValue, location: location });
  }, [location, sortingValue]);

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
              <Box component={'form'} onSubmit={handleFilterData}
                   sx={{
                     position: 'absolute',
                     top: '50%',
                     left: '50%',
                     transform: 'translate(-50%, -50%)',
                     bgcolor: 'bg.main',
                     width: '600px',
                     padding: '1rem',
                     borderRadius: 5,
                   }}
              >
                <Typography id={'modal-filter-title'}
                            sx={{
                              textTransform: 'none',
                              textAlign: 'center',
                              color: 'primary.main',
                            }}>
                  {t('suggestions.filter')}</Typography>
                <Typography sx={{
                  color: 'primary.main',
                  textTransform: 'none',
                }}>
                  {t('suggestions.filterModal.sorting')}</Typography>
                <RadioGroup name={'sorting-group'}
                            onChange={handleSortingChange}
                            sx={{
                              display: 'grid',
                              gridTemplateColumns: '1fr 2fr',
                              gap: 1,
                            }}>
                  <FormControlLabel control={<Radio />}
                                    label={t('suggestions.filterModal.latest')} value={'latest'} />
                  <FormControlLabel control={<Radio />}
                                    label={t('suggestions.filterModal.leastSubmitted')} value={'least'} />
                  <FormControlLabel control={<Radio />}
                                    label={t('suggestions.filterModal.popular')} value={'popular'} />
                  <FormControlLabel control={<Radio />}
                                    label={t('suggestions.filterModal.mostSubmitted')} value={'most'} />
                </RadioGroup>
                <Divider sx={{ backgroundColor: '#28282C' }} />
                <Typography sx={{
                  color: 'primary.main',
                  textTransform: 'none',
                  mt: 1,
                }}>
                  {t('suggestions.filterModal.lvlExperience')}</Typography>
                <FormGroup sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                }}>
                  <FormControlLabel control={<Checkbox checked={filterData.intern} onChange={(e) => setFilterData({
                    ...filterData,
                    intern: e.target.checked,
                  })} />} label={t('suggestions.filterModal.intern')} />
                  <FormControlLabel control={<Checkbox checked={filterData.assistant} onChange={(e) => setFilterData({
                    ...filterData,
                    assistant: e.target.checked,
                  })} />}
                                    label={t('suggestions.filterModal.assistant')} />
                  <FormControlLabel control={<Checkbox checked={filterData.basic} onChange={(e) => setFilterData({
                    ...filterData,
                    basic: e.target.checked,
                  })} />}
                                    label={t('suggestions.filterModal.basic')} />
                  <FormControlLabel control={<Checkbox checked={filterData.expert} onChange={(e) => setFilterData({
                    ...filterData,
                    expert: e.target.checked,
                  })} />}
                                    label={t('suggestions.filterModal.expert')} />
                  <FormControlLabel control={<Checkbox checked={filterData.middle} onChange={(e) => setFilterData({
                    ...filterData,
                    middle: e.target.checked,
                  })} />}
                                    label={t('suggestions.filterModal.middle')} />
                </FormGroup>
                <Divider sx={{ backgroundColor: '#28282C' }} />
                <Box sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 5,
                }}>
                  <Box>
                    <Typography sx={{
                      color: 'primary.main',
                      textTransform: 'none',
                      mt: 1,
                    }}>
                      {t('suggestions.filterModal.location')}</Typography>
                    <InputBase
                      sx={{
                        borderColor: 'secondary.light',
                        borderWidth: 2,
                        borderRadius: 2,
                        mt: 1,
                        padding: 0.5,
                        color: 'secondary.main',
                      }} fullWidth size={'small'} placeholder={t('suggestions.search')}
                      onChange={handleLocationChange} />
                  </Box>
                  <Box>
                    <Typography sx={{
                      color: 'primary.main',
                      textTransform: 'none',
                      mt: 1,
                    }}>
                      {t('suggestions.filterModal.vacancyType')}</Typography>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox checked={filterData.fullTime} onChange={(e) => {
                        setFilterData({ ...filterData, fullTime: e.target.checked });
                      }} />} label={t('suggestions.filterModal.fullTime')} />
                      <FormControlLabel control={<Checkbox checked={filterData.partTime} onChange={(e) => {
                        setFilterData({ ...filterData, partTime: e.target.checked });
                      }} />} label={t('suggestions.filterModal.partTime')} />
                      <FormControlLabel control={<Checkbox checked={filterData.remote} onChange={(e) => {
                        setFilterData({ ...filterData, remote: e.target.checked });
                      }} />} label={t('suggestions.filterModal.remote')} />
                    </FormGroup>
                  </Box>
                </Box>
                <Box sx={{ m: 2, display: 'flex', justifyContent: 'end' }}>
                  <Button type={'submit'} sx={{
                    color: 'secondary.main',
                    backgroundColor: 'primary.main',
                    ':hover': {
                      color: 'primary.main',
                      backgroundColor: 'secondary.light',
                    },
                  }} >{t('suggestions.filterModal.showResults')}</Button>
                </Box>
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