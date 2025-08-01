import { createTheme } from '@mui/material/styles';

export const loadingScreenTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a39cff',
      light: '#d5d0ff',
      dark: '#7269cc',
    },
    secondary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#cccccc',
    },
    background: {
      default: '#000000',
      paper: 'rgba(24, 24, 24, 0.9)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 700,
      fontSize: '0.75rem',
    },
    body2: {
      fontSize: '0.7rem',
      fontWeight: 300,
    },
    caption: {
      fontSize: '0.625rem',
      color: '#7a7a7a',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(24, 24, 24, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(163, 156, 255, 0.1)',
          borderRadius: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#a39cff',
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});