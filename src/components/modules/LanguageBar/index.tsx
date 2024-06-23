import { Text } from '@components/common';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';

export const LanguageBar = () => {
  const { i18n } = useTranslation();

  return (
    <Stack flexDirection="row" justifyContent="flex-end">
      <Stack flexDirection="row" gap="8px">
        <Text
          component="span"
          sx={{
            cursor: 'pointer',
            color: i18n.language === 'uk' ? 'primary.main' : 'white',
            ':hover': { color: 'primary.main' },
          }}
          onClick={() => {
            i18n.changeLanguage('uk');
          }}
        >
          UKR
        </Text>
        <Text
          component="span"
          sx={{
            cursor: 'pointer',
            color: i18n.language === 'en' ? 'primary.main' : 'white',
            ':hover': { color: 'primary.main' },
          }}
          onClick={() => {
            i18n.changeLanguage('en');
          }}
        >
          ENG
        </Text>
      </Stack>
    </Stack>
  );
};
