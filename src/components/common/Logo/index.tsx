import { Props } from 'react-select';
import LogoSvg from '@assets/icons/Logo.svg';
import { Box, Typography } from '@mui/material';

export const Logo: React.FC<Props> = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mr: 'auto' }}>
      <Typography variant="h6">
        <img src={LogoSvg} />
      </Typography>
    </Box>
  );
};
