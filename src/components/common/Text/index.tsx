import Typography from '@mui/material/Typography';
import { TypographyProps } from '@mui/material/Typography';

type Props = {
  children: React.ReactNode;
} & TypographyProps;

export const Text: React.FC<Props> = ({ children, ...otherProps }) => {
  return (
    <Typography {...otherProps} fontFamily="Saira">
      {children}
    </Typography>
  );
};
