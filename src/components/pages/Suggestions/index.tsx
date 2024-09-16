import { useTranslation } from 'react-i18next';
import { AppBar, Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

export const Suggestions = () => {

  const { t } = useTranslation('translation');
  const pages = ['home', 'suggestions', 'message'];

  return (
    <Box
      width="100%"
      minHeight="calc(100vh - 24px)"
      display="flex"
      flexDirection="column"
      justifyContent={{
        xs: 'end',
        md: 'space-between',
      }}
      alignItems="center"
      sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <AppBar position="sticky"
              sx={{
                backgroundColor: 'bg.main'
              }}>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 5 }}>
          {pages.map((page) => (
            <Button
              key={page}
              //onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'secondary.main', fontFamily: '', display: 'block' }}
            >
              <Typography textTransform={'none'}>{t(`appBarMenu.${page}`)}</Typography>
            </Button>
          ))}
        </Box>
      </AppBar>
      <Box>

      </Box>
    </Box>
  );
};