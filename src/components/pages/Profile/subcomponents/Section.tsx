import { Box } from '@mui/material';
import { Button, Text } from '@components/common';
import { SectionData } from '../types/SectionData';
import { useTranslation } from 'react-i18next';

export const Section = ({ sectionData }: { sectionData: SectionData }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        borderRadius: '20px',
        padding: 2,
      }}
    >
      <Text
        variant="h2"
        fontSize="15px"
        marginBottom="20px"
        fontWeight={500}
        lineHeight="10px"
      >
        {sectionData.title}
      </Text>
      <Text
        variant="subtitle1"
        fontSize="15px"
        marginBottom="20px"
        fontWeight={400}
        lineHeight="20px"
        color="#8A8F98"
      >
        {sectionData.content}
      </Text>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 2,
        }}
      >
        <Button
          $variant="outlined"
          style={{
            width: '100px',
            backgroundColor: 'white',
            height: '21px',
            borderRadius: '6px',
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
  );
};
