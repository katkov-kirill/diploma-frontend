import React, { useEffect, useState, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  IconButton,
  Alert,
  AlertTitle,
  TextField,
} from '@mui/material';
import EditPopupSvg from '@assets/icons/EditPopup.svg';
import { useTranslation } from 'react-i18next';
import { Button, Input, Text } from '@components/common';
import { ProfileCard } from 'src/types';
import { UserProfileCard } from '../../content';
import Select from 'react-select';
import { useParams } from 'react-router-dom';
import { useUpdateProfileMutation } from '@services/profileApi';
import { saveProfile } from 'src/functions';

interface ProfilePopupProps {
  open: boolean;
  profileCard: ProfileCard | null;
  onSave: () => void;
  onClose: () => void;
}

export const EditSkillsPopup: React.FC<ProfilePopupProps> = ({
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
  const [successAlert, setSuccessAlert] = useState(false);

  const [updateProfile] = useUpdateProfileMutation();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setProfileCardData(profileCard);
    setLocationOptions([]);
    // console.log(profileCard);
    // console.log(profileCard?.location);
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

  const handleClose = () => {
    setProfileCardData(profileCard);
    console.log(profileCard);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (value.length < 40) {
      setProfileCardData((prevData) => {
        return prevData === null
          ? null
          : {
              ...prevData,
              [name]: value,
              isOwner: prevData.isOwner ?? false,
            };
      });

      setSuccessAlert(true);

      setTimeout(() => setSuccessAlert(false), 3000);
    }
  };

  // console.log('profilecard data: ', profileCardData);

  const handleLocationChange = (selectedOption: any) => {
    if (selectedOption) {
      setSelectedLocation(selectedOption);
      setProfileCardData((prevData) => {
        return prevData === null
          ? null
          : {
              ...prevData,
              location: selectedOption.label || '',
              isOwner: prevData.isOwner ?? false,
            };
      });
    }
  };

  const handleSave = async () => {
    const profileData = {
      personal_information: {
        name: profileCardData?.name,
        position: profileCardData?.shortDescription,
        location: profileCardData?.location,
      }
    };

    // TODO: set the id from localStorage here:
    saveProfile(profileData, updateProfile, 'user-4');
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4' }}
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: '#16191E',
          color: '#F7F7F7',
          width: {
            xs: '100%',
            md: '90%',
          },
          maxWidth: {
            xs: '100%',
            md: '90%',
          },
          height: {
            xs: '985',
            md: '60%',
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
            md: '15pt',
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
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: {
                xs: '100%',
                md: '90%',
              },
              padding: 2,
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
            display: 'flex',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: 3,
          }}
        >
          {/* name input */}
          <>
            {/* desktop markup */}
            <Box
              sx={{
                width: '30vw',
                color: '#F7F7F7',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '10px',
                marginTop: '10px',
                display: {
                  xs: 'none',
                  md: 'flex',
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
                  border: '1px solid #8A8F98',
                  borderRadius: '8px',
                }}
                onChange={handleChange}
              />
            </Box>

            {/* mobile markup */}
            <Box
              sx={{
                width: '100%',
                color: '#F7F7F7',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '10px',
                marginTop: '10px',
                display: {
                  xs: 'flex',
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
          </>

          {/* short info input desktop */}
          <Box
            sx={{
              width: {
                xs: '100%',
                md: '30vw',
              },
              height: '6vh',
              color: '#F7F7F7',
              fontWeight: 300,
              fontSize: '15px',
              lineHeight: '10px',
              border: '1px solid #8A8F98',
              borderRadius: '8px',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0',
              marginTop: '10px',
              padding: '0',
              boxSizing: 'border-box',
              display: {
                xs: 'none',
                md: 'flex', // desktop
              },
            }}
          >
            <Input
              defaultValue={profileCard?.shortDescription}
              name="shortDescription"
              type="text"
              className="mb-[16px]"
              placeholder="shortDescription"
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
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr 1fr',
            },
            gap: {
              xs: 2,
              md: 0.5,
            },
            marginBottom: '10px',
          }}
        >
          {/* short info input mobile */}
          <Box
            sx={{
              width: '100%',
              height: '6vh',
              color: '#F7F7F7',
              fontWeight: 300,
              fontSize: '15px',
              lineHeight: '10px',
              border: '1px solid #8A8F98',
              borderRadius: '8px',
              textAlign: 'center',
              display: {
                xs: 'flex', // mobile
                md: 'none',
              },
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0',
              padding: '0',
              boxSizing: 'border-box',
            }}
          >
            <Input
              defaultValue={profileCard?.shortDescription}
              name="shortDescription"
              type="text"
              className="mb-[16px]"
              placeholder="About you..."
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

          {/* role */}
          <Box
            sx={{
              width: {
                xs: '100%',
                md: '30vw',
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
              },
              margin: '0',
              padding: '0',
              boxSizing: 'border-box',
            }}
          >
            {profileCard?.role}
          </Box>

          {/* location */}
          <Box
            sx={{
              width: {
                xs: '100%',
                md: '30vw',
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

          {/* save button */}
          <Box
            sx={{
              width: {
                xs: '100%',
                md: '100%',
              },
              height: '6vh',
              color: '#F7F7F7',
              fontWeight: 300,
              fontSize: '15px',
              lineHeight: '10px',
              borderRadius: '8px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: {
                xs: 'center',
                md: 'flex-end',
              },
              margin: { xs: '0' },
              padding: '0',
              boxSizing: 'border-box',
            }}
          >
            <Button
              $variant="primary"
              color="primary"
              onClick={handleSave}
              style={{
                width: '21vh',
                height: '6vh',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '10px',
                borderRadius: '6px',
                marginLeft: '0px',
                margin: '0',
              }}
            >
              {/* TODO set translation here*/}
              Save
            </Button>
          </Box>
        </Box>
        {successAlert && (
          <Alert severity="success" style={{ marginTop: '20px' }}>
            <AlertTitle>Success</AlertTitle>
            The profile has been edited successfully!
          </Alert>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EditProfilePopup;
