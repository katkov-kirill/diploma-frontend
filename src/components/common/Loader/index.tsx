import { CircularProgress, Stack } from '@mui/material';

export const Loader = () => {
  return (
    <Stack
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Stack>
  );
};
