import React, { useEffect, useState, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';
import EditPopupSvg from '@assets/icons/EditPopup.svg';
import { ProfileCard, Skill } from 'src/types';
import UploadIcon from '@assets/icons/UploadIcon.svg';
import { Button, Text } from '@components/common';
import { useTranslation } from 'react-i18next';

interface ProfilePopupProps {
  open: boolean;
  skills: Array<Skill> | null;
  onSave: () => void;
  onClose: () => void;
}

export const SkillModal: React.FC<ProfilePopupProps> = ({
  open,
  skills,
  onSave,
  onClose,
}) => {
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4' }}
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: '#16191E',
          color: '#F7F7F7',
          width: {
            xs: '100%',
            md: '100%',
          },
          maxWidth: {
            xs: '100%',
            md: '100%',
          },
          height: {
            xs: '90%',
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
          {/* TODO set skills from, translation file */}
          Skills
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
            gridTemplateColumns: '4fr 1fr',
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              backgroundColor: '#16191E',
              borderRadius: '20px',
            }}
          >
            <Table
              aria-label="skills table"
              style={{ backgroundColor: '#28282C' }}
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: '#F7F7F7', border: 0 }}>
                    {/* TODO: set Text component here and change table title columns styles */}
                    Skills
                  </TableCell>
                  <TableCell sx={{ color: '#F7F7F7', border: 0 }} align="left">
                    Level
                  </TableCell>
                  <TableCell sx={{ color: '#F7F7F7', border: 0 }} align="left">
                    Place
                  </TableCell>
                  <TableCell sx={{ color: '#F7F7F7', border: 0 }} align="left">
                    Upload
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/*  TODO set border and borderRadius */}
                {skills?.map((skill) => (
                  <TableRow style={{ borderRadius: '8px' }} key={skill.id}>
                    <TableCell
                      sx={{ color: '#F7F7F7', border: 0 }}
                      align="left"
                    >
                      {skill.name}
                    </TableCell>
                    <TableCell
                      sx={{ color: '#F7F7F7', border: 0 }}
                      align="left"
                    >
                      {skill.level}
                    </TableCell>
                    <TableCell
                      sx={{ color: '#F7F7F7', border: 0 }}
                      align="left"
                    >
                      {skill.place}
                    </TableCell>
                    <TableCell
                      sx={{ color: '#F7F7F7', border: 0 }}
                      align="right"
                    >
                      {/* TODO set certificate on hover as myStat works */}
                      <img src={UploadIcon} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box>
            {/* {skills?.length() < 10 ? ( */}
            <>
              {skills?.map((skill) => (
                <Box
                  sx={{
                    height: '24px',
                    borderRadius: '6px',
                    border: '1px solid #8A8F98',
                    // width: '94px',
                    marginBottom: '40px',
                    marginLeft: '10px',
                  }}
                >
                  {/* // TODO: setup <Text/>> component */}
                  {skill.name}
                </Box>
              ))}
            </>
            {/* ) : (
              <></>
            )} */}
            <Button
              $variant="primary"
              style={{
                width: '134px',
                height: '21px',
                marginTop: '5px',
              }}
            >
              <Text
                variant="subtitle1"
                fontSize="15px"
                fontWeight={400}
                lineHeight="20px"
              >
                {t('profilePage.saveButtonText')}
              </Text>
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SkillModal;
