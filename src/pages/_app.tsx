import 'styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import DarkMode from '@layout/DarkMode';
import Sidebar from '@layout/Sidebar';
import { CssBaseline } from '@mui/material';
import { ColorModeContextProvider } from 'context/ColorModeContext';
import { client } from 'lib/apollo-client';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { CookiesProvider } from 'react-cookie';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { asPath } = router;

  return (
    <ApolloProvider client={client}>
      <CookiesProvider>
        <RecoilRoot>
          <ColorModeContextProvider>
            <CssBaseline />
            {asPath === '/login' ? (
              <main>
                <Component {...pageProps} />
              </main>
            ) : (
              <Sidebar>
                <DarkMode />
                <Component {...pageProps} />
              </Sidebar>
            )}
          </ColorModeContextProvider>
        </RecoilRoot>
      </CookiesProvider>
    </ApolloProvider>
  );
}

export default MyApp;
