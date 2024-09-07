import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Avatar,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import EditPopupSvg from '@assets/icons/EditPopup.svg';
import OldPhotoSvg from '@assets/icons/OldPhoto.svg';
import CurrentPhotoSvg from '@assets/icons/CurrentPhoto.svg';
import NewPhotoSvg from '@assets/icons/NewPhoto.svg';
import PlusSvg from '@assets/icons/Plus.svg';
import { Button, Text } from '@components/common';
import { useTranslation } from 'react-i18next';

// Define the prop types
interface PhotoPopupProps {
  open: boolean;
  oldPhoto: string | null;
  currentPhoto: string | null;
  newPhoto: string | null;
  onSave: () => void;
  onClose: () => void;
}

export const EditPhotoPopup: React.FC<PhotoPopupProps> = ({
  open,
  oldPhoto,
  currentPhoto,
  newPhoto,
  onSave,
  onClose,
}) => {
  const { t } = useTranslation();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4' }}
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: '#16191E', // Background color of the dialog window
          color: '#F7F7F7', // Text color inside the dialog
          width: '995px',
          maxWidth: '995px',
          padding: '20px',
          borderRadius: '20px'
        },
      }}
    >
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
            mb: 3,
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                width: '152px',
                height: '152px',
                borderColor: (theme) => theme.palette.grey[500],
                marginTop: '30px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitFilter: 'blur(5px)',
                filter: 'blur(5px)',
              }}
            >
              <img
                src={oldPhoto ? oldPhoto : OldPhotoSvg}
                alt="Old photo icon"
                style={{ zIndex: '1', marginTop: '30px' }}
              />
            </Avatar>
            <Text
              variant="subtitle1"
              fontSize="20px"
              fontWeight={300}
              lineHeight="10px"
              color="#F7F7F7"
              marginTop="14px"
            >
              {t('profilePage.editPopup.oldPhoto')}
            </Text>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                width: '216px',
                height: '216px',
                borderColor: (theme) => theme.palette.grey[500],
                marginTop: '30px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <img
                src={currentPhoto ? currentPhoto : CurrentPhotoSvg}
                alt="Current photo icon"
                style={{ zIndex: '1', marginTop: '30px' }}
              />
            </Avatar>
            <Text
              variant="subtitle1"
              fontSize="23px"
              fontWeight={500}
              lineHeight="20px"
              color="#F7F7F7"
              marginTop="14px"
            >
              {t('profilePage.editPopup.currentPhoto')}
            </Text>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                width: '152px',
                height: '152px',
                borderColor: (theme) => theme.palette.grey[500],
                marginTop: '30px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitFilter: 'blur(5px)',
                filter: 'blur(5px)',
              }}
            >
              <img
                src={newPhoto ? newPhoto : NewPhotoSvg}
                alt="New photo icon"
                style={{ zIndex: '1', marginTop: '30px' }}
              />
            </Avatar>
            <Text
              variant="subtitle1"
              fontSize="20px"
              fontWeight={300}
              lineHeight="10px"
              color="#F7F7F7"
              marginTop="14px"
            >
              {t('profilePage.editPopup.newPhoto')}
            </Text>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button
            $variant="primary"
            color="primary"
            onClick={onSave}
            style={{
              width: '170px',
              height: '36px',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '10px',
            }}
          >
            Save
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default EditPhotoPopup;
