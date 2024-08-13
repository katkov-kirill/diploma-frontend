/// <reference types="vite/client" />
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    bg: Palette['primary'];
  }
  interface PaletteOptions {
    bg?: PaletteOptions['primary'];
  }
}
