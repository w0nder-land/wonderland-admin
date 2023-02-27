import 'styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import Sidebar from '@layout/Sidebar';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine-sc';
import localFont from '@next/font/local';
import { ColorModeContextProvider } from 'context/ColorModeContext';
import { useApollo } from 'lib/apollo-client';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export const font = localFont({
  src: '../styles/font/SUIT-Variable.woff2',
  variable: '--font-suit',
});

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const { asPath } = useRouter();

  return (
    <ApolloProvider client={apolloClient}>
      <StyledEngineProvider injectFirst>
        <ColorModeContextProvider>
          <CssBaseline />
          {asPath !== '/login' && <Sidebar />}
          <main className={font.className}>
            <Component {...pageProps} />
          </main>
        </ColorModeContextProvider>
      </StyledEngineProvider>
    </ApolloProvider>
  );
}
export default MyApp;
