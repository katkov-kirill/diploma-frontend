import { Button } from '@mui/material';
import { Props } from 'react-select';

export const TopNavMenu: React.FC<Props> = () => {
  return (
    <>
      <Button sx={{ color: '#fff' }} variant="text">Home</Button>
      <Button sx={{ color: '#fff' }} variant="text">Suggestions</Button>
      <Button sx={{ color: '#fff' }} variant="text">Message</Button>
    </>
  );
};
