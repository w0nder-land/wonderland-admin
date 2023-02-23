import 'styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import Sidebar from '@layout/Sidebar';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine-sc';
import localFont from '@next/font/local';
import { ColorModeContextProvider } from 'context/ColorModeContext';
import client from 'lib/apollo-client';
import type { AppProps } from 'next/app';

export const font = localFont({
  src: '../styles/font/SUIT-Variable.woff2',
  variable: '--font-suit',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <StyledEngineProvider injectFirst>
        <ColorModeContextProvider>
          <CssBaseline />
          <Sidebar />
          <main className={font.className}>
            <Component {...pageProps} />
          </main>
        </ColorModeContextProvider>
      </StyledEngineProvider>
    </ApolloProvider>
  );
}
export default MyApp;
