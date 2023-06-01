import { createTheme, ThemeProvider } from '@mui/material';
import useLocalStorage from 'hooks/useLocalStorage';
import React, { useMemo } from 'react';
import { darkTheme, lightTheme } from 'styles/theme';
import { ModeType } from 'types/common';

interface IColorModeContext {
  toggleColorMode: () => void;
  mode: ModeType;
}

interface IColorModeContextProvider {
  children: React.ReactNode;
}

export const ColorModeContext = React.createContext<IColorModeContext>({
  toggleColorMode: () => {},
  mode: 'dark',
});

export const ColorModeContextProvider = ({
  children,
}: IColorModeContextProvider) => {
  const [storedMode, setStoredMode] = useLocalStorage<ModeType>(
    'theme',
    'light'
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setStoredMode(storedMode === 'dark' ? 'light' : 'dark');
      },
      mode: storedMode,
    }),
    [storedMode]
  );

  const theme = createTheme(storedMode === 'dark' ? darkTheme : lightTheme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => React.useContext(ColorModeContext);
