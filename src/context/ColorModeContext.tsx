import { createTheme, ThemeProvider } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { darkTheme, lightTheme } from 'styles/theme';

export type ModeType = 'light' | 'dark';

interface IColorModeContext {
  toggleColorMode: () => void;
  mode: ModeType;
}

interface IColorModeContextProvider {
  children: React.ReactNode;
}

export const ColorModeContext = React.createContext<IColorModeContext>({
  toggleColorMode: () => {},
  mode: 'light',
});

export const ColorModeContextProvider = ({
  children,
}: IColorModeContextProvider) => {
  const [mode, setMode] = useState<ModeType>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
      },
      mode,
    }),
    [mode]
  );

  const theme = createTheme(mode === 'dark' ? darkTheme : lightTheme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => React.useContext(ColorModeContext);
