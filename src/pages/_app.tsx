import 'styles/globals.css';

import GNB from '@layout/GNB';
import { CssBaseline } from '@mui/material';
import localFont from '@next/font/local';
import { ColorModeContextProvider } from 'context/ColorModeContext';
import type { AppProps } from 'next/app';

export const font = localFont({
  src: '../styles/font/SUIT-Variable.woff2',
  variable: '--font-suit',
});

export type ModeType = 'light' | 'dark';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GNB />
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </ColorModeContextProvider>
  );
}
export default MyApp;
