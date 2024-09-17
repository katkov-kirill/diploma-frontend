import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#5D6AD1',
    },
    secondary: {
      main: '#F7F7F7',
      light: '#EEEEEE',
    },
    bg: {
      main: '#16191E',
      light: '#D9D9D9',
    },
  },
  typography: {
    fontFamily: 'Saira',
  },
  components: {
    MuiRadio: {
      defaultProps: {
        color: 'secondary',
        sx: {
          color: "secondary.main",
        },
      }
    }
  }
});
