import 'styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import DarkMode from '@layout/DarkMode';
import Sidebar from '@layout/Sidebar';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine-sc';
import localFont from '@next/font/local';
import { ColorModeContextProvider } from 'context/ColorModeContext';
import { client, useApollo } from 'lib/apollo-client';
import { AuthProvider } from 'lib/auth';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';

export const font = localFont({
  src: '../styles/font/SUIT-Variable.woff2',
  variable: '--font-suit',
});

function MyApp({ Component, pageProps }: AppProps) {
  // const apolloClient = useApollo(pageProps.initialApolloState);
  const { asPath } = useRouter();

  return (
    <ApolloProvider client={client}>
      {/* <AuthProvider> */}
      <RecoilRoot>
        <StyledEngineProvider injectFirst>
          <ColorModeContextProvider>
            <CssBaseline />
            {asPath === '/login' ? (
              <main className={font.className}>
                <Component {...pageProps} />
              </main>
            ) : (
              <Sidebar>
                <DarkMode />
                <Component {...pageProps} />
              </Sidebar>
            )}
          </ColorModeContextProvider>
        </StyledEngineProvider>
        {/* </AuthProvider> */}
      </RecoilRoot>
    </ApolloProvider>
  );
}
export default MyApp;
