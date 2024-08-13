import Typography from '@mui/material/Typography';
import { TypographyProps } from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

type Props = {
  children: React.ReactNode;
} & TypographyProps;

export const Text: React.FC<Props> = ({ children, ...otherProps }) => {
  const { i18n } = useTranslation();

  return (
    <Typography
      {...otherProps}
      fontFamily={i18n.language === 'en' ? 'Saira' : 'Inter'}
    >
      {children}
    </Typography>
  );
};
