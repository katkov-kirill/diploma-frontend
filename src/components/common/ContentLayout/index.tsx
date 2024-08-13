import React from 'react';
import { Box, Typography } from '@mui/material';

export const ContentLayout: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',
        gap: 2,
        padding: 2,
        height: '100vh', // Высота контейнера на весь экран
      }}
    >
      {/* Левая панель */}
      <Box sx={{ bgcolor: '#2c2c2e', padding: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Left Panel
        </Typography>
        {/* Контент левой панели */}
      </Box>

      {/* Основной контент */}
      <Box sx={{ bgcolor: '#1c1c1e', padding: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Main Content
        </Typography>
        {/* Основной контент */}
      </Box>

      {/* Правая панель */}
      <Box sx={{ bgcolor: '#2c2c2e', padding: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Right Panel
        </Typography>
        {/* Контент правой панели */}
      </Box>
    </Box>
  );
};
