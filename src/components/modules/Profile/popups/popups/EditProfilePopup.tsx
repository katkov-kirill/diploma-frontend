import React, { useEffect, useState, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  IconButton,
} from '@mui/material';
import EditPopupSvg from '@assets/icons/EditPopup.svg';
import { useTranslation } from 'react-i18next';
import { Button, Input, Text } from '@components/common';
import { ProfileCard } from 'src/types/types/ProfileCard';
import { UserProfileCard } from '../../content/content/UserProfileCard';
import Select from 'react-select';

interface ProfilePopupProps {
  open: boolean;
  profileCard: ProfileCard | null;
  onSave: () => void;
  onClose: () => void;
}

export const EditProfilePopup: React.FC<ProfilePopupProps> = ({
  open,
  profileCard,
  onSave,
  onClose,
}) => {
  //               TODO: fix location picked text font color
  //               TODO: plus for photo
  //               TODO: acrtivity button actions
  //               TODO: onClose update request to API
  //               TODO: color theme button + database schema change, add field color theme && background image

  const { t } = useTranslation();
  const [profileCardData, setProfileCardData] = useState<ProfileCard | null>(
    profileCard
  );
  const [locationOptions, setLocationOptions] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.length < 40) {
      setProfileCardData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    // console.log(name, value);
  };

  useEffect(() => {
    setProfileCardData(profileCard);
    setLocationOptions([]);
    console.log(profileCard);
    console.log(profileCard?.location);
    if (profileCard?.location) {
      setSelectedLocation({
        label: profileCard.location,
        value: profileCard.location,
      });
    }
  }, [profileCard]);

  useEffect(() => {
    if (inputValue.length > 2) {
      fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&apiKey=b2b56ea16ac7435da51c15c863ea86a9`
      )
        .then((response) => response.json())
        .then((data) => {
          const newOptions = data.features.map((feature: any) => ({
            label: `${feature.properties.name}, ${feature.properties.country}`,
            value: feature.properties.id,
          }));
          setLocationOptions(newOptions);
        })
        .catch((error) => console.error('Error fetching data:', error));
    } else {
      setLocationOptions([]);
    }
  }, [inputValue]);

  const handleLocationChange = (selectedOption: any) => {
    if (selectedOption) {
      setSelectedLocation(selectedOption);
      setProfileCardData((prevData) => ({
        ...prevData,
        location: selectedOption.label || '',
      }));
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4' }}
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: '#16191E',
          color: '#F7F7F7',
          width: {
            xs: '100%',
            md: '995px',
          },
          maxWidth: {
            xs: '100%',
            md: '995px',
          },
          height: {
            xs: '80%',
            md: '399px',
          },
          borderRadius: '20px',
          display: 'grid',
        },
      }}
    >
      <Box sx={{ textAlign: 'center', paddingTop: '20px' }}>
        <Text
          variant="subtitle1"
          fontSize={{
            xs: '14px',
            md: '15px',
          }}
          fontWeight={500}
          lineHeight="10px"
          color="#F7F7F7"
          marginTop="14px"
        >
          {t('profilePage.editPopup.editProfile')}
        </Text>
      </Box>
      <DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <img src={EditPopupSvg} />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box
          sx={{
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: {
                xs: '100%',
                md: '955px',
              },
              borderRadius: '20px',
            }}
          >
            <UserProfileCard
              profileCardData={profileCardData as ProfileCard}
              editMode={true}
              showSkills={true}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: 3,
          }}
        >
          <Box
            sx={{
              width: {
                xs: '100%',
                md: '350px',
              },
              color: '#F7F7F7',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '10px',
              marginTop: '10px',
              display: {
                xs: 'none',
                md: 'block',
              },
            }}
          >
            <Input
              defaultValue={profileCard?.name}
              name="name"
              type="text"
              className="mb-[16px]"
              placeholder="Name"
              style={{
                height: '42px',
                border: '1px solid #8A8F98',
                borderRadius: '8px',
              }}
              onChange={handleChange}
            />
          </Box>

          <Box
            sx={{
              width: '100%',
              color: '#F7F7F7',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '10px',
              marginTop: '10px',
              display: {
                xs: 'block',
                md: 'none',
              },
            }}
          >
            <Input
              defaultValue={profileCard?.name}
              name="name"
              type="text"
              className="mb-[16px]"
              placeholder="Name"
              style={{
                height: '6vh',
                width: '100%',
                border: '1px solid #8A8F98',
                borderRadius: '8px',
              }}
              onChange={handleChange}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr 1fr',
            },
            gridTemplateRows: {
              xs: '1fr 1fr',
              md: '1fr',
            },
            gap: 2,
            marginBottom: '10px',
          }}
        >
          <Box
            sx={{
              width: {
                xs: '100%',
                md: '350px',
              },
              height: '6vh',
              color: '#F7F7F7',
              fontWeight: 300,
              fontSize: '15px',
              lineHeight: '10px',
              border: '1px solid #8A8F98',
              borderRadius: '8px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: {
                xs: '0',
                md: '20px',
              },
              margin: '0',
              padding: '0',
              boxSizing: 'border-box',
            }}
          >
            <Input
              defaultValue={profileCard?.shortDescription}
              name="name"
              type="text"
              className="mb-[16px]"
              placeholder="Name"
              style={{
                height: '6vh',
                width: '100%',
                border: '1px solid #8A8F98',
                borderRadius: '8px',
                margin: 0,
              }}
              onChange={handleChange}
            />
          </Box>

          <Box
            sx={{
              width: {
                xs: '100%',
                md: '350px',
              },
              height: '6vh',
              color: '#F7F7F7',
              fontWeight: 300,
              fontSize: '15px',
              lineHeight: '10px',
              border: '1px solid #8A8F98',
              borderRadius: '8px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: {
                xs: '0',
                md: '20px',
              },
              margin: '0',
              padding: '0',
              boxSizing: 'border-box',
            }}
          >
            {profileCard?.role}
          </Box>

          <Box
            sx={{
              width: {
                xs: '100%',
                md: '350px',
              },
              height: '6vh',
              color: '#F7F7F7',
              fontWeight: 300,
              fontSize: '15px',
              lineHeight: '10px',
              border: '1px solid #8A8F98',
              borderRadius: '8px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: {
                xs: '0',
                md: '20px',
              },
              margin: '0',
              padding: '0',
              boxSizing: 'border-box',
            }}
          >
            <Box
              sx={{
                width: '100%',
              }}
            >
              <Select
                options={locationOptions}
                id="location"
                onInputChange={(value) => setInputValue(value)}
                onChange={handleLocationChange}
                // TODO: set placeholders from translation file
                placeholder="Location"
                defaultValue={selectedLocation}
                menuPortalTarget={document.body}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    height: '6vh',
                    border: '1px solid #8A8F98',
                    backgroundColor: 'transparent',
                    borderRadius: '8px',
                    paddingLeft: '10px',
                    cursor: 'pointer',
                    width: '100%',
                    minWidth: '100%',
                    boxSizing: 'border-box',
                    color: '#F7F7F7 !important',
                    '& input': {
                      color: '#F7F7F7 !important',
                    },
                  }),
                  menuPortal: (provided) => ({
                    ...provided,
                    zIndex: 9999,
                  }),
                  menu: (provided) => ({
                    ...provided,
                    backgroundColor: '#28282C',
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected
                      ? '#333333'
                      : state.isFocused
                      ? '#555555'
                      : '#000000',
                    color: '#F7F7F7 !important',
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    color: '#F7F7F7 !important',
                    fontSize: '15px',
                    fontWeight: 300,
                    lineHeight: '10px',
                  }),
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              width: {
                xs: '100%',
                md: '350px',
              },
              height: '42px',
              fontWeight: 300,
              fontSize: '15px',
              lineHeight: '10px',
              borderRadius: '8px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0',
              padding: '0',
              boxSizing: 'border-box',
              marginTop: '40px',
            }}
          >
            <Button
              $variant="primary"
              color="primary"
              onClick={onSave}
              style={{
                width: '21vh',
                height: '6vh',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '10px',
                borderRadius: '6px',
                marginLeft: '60px',
                margin: '0',
              }}
            >
              {/* TODO set translation here*/}
              Save
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfilePopup;
