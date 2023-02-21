import { createTheme } from '@mui/material';

export const greyColor = {
  100: '#FDFDFD',
  200: '#F7F8F9',
  300: '#C5C8CE',
  400: '#999FA4',
  500: '#5A6166',
  600: '#41474C',
  700: '#1E2427',
  800: '#1E2427',
  900: '#171B1C',
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F36899',
    },
    secondary: {
      main: '#87E4EC',
    },
    grey: greyColor,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#87E4EC',
    },
    grey: greyColor,
  },
});
