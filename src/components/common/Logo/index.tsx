import { Box } from '@mui/material';
import LogoSvg from '@assets/icons/Logo.svg';
import { Props } from 'react-select';
import { Text } from '../Text';

export const Logo: React.FC<Props> = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mr: 'auto' }}>
      <Text variant="h6">
        <img src={LogoSvg} />
      </Text>
    </Box>
  );
};
