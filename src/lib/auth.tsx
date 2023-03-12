/* eslint-disable no-promise-executor-return */
import {
  ApolloClient,
  ApolloProvider,
  gql,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { IILoginForm } from 'pages/login';
import React, { useContext, useState } from 'react';

interface IAuthContext {
  setAuthToken: React.Dispatch<React.SetStateAction<string | null>>;
  isSignedIn: () => boolean;
  signIn: ({ email, password }: IILoginForm) => Promise<void>;
  signOut: () => void;
  createApolloClient: () => void;
}

const AuthContext = React.createContext<IAuthContext>({
  setAuthToken: () => {},
  isSignedIn: () => false,
  signIn: () => new Promise((resolve) => resolve()),
  signOut: () => {},
  createApolloClient: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [authToken, setAuthToken] = useState<string | null>(null);

  const isSignedIn = () => {
    if (authToken) {
      return true;
    }
    return false;
  };

  const getAuthHeaders = () => {
    if (!authToken) return undefined;

    return {
      authorization: `Bearer ${authToken}`,
    };
  };

  const createApolloClient = () => {
    const link = new HttpLink({
      uri: '/api/graphql',
      headers: getAuthHeaders(),
    });

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    });
  };

  const signIn = async ({ email, password }: IILoginForm) => {
    const client = createApolloClient();
    const LoginMutation = gql`
      mutation signin($username: String!, $password: String!) {
        login(username: $username, password: $password) {
          token
        }
      }
    `;

    const result = await client.mutate({
      mutation: LoginMutation,
      variables: { email, password },
    });

    console.log(result);

    if (result?.data?.login?.token) {
      setAuthToken(result.data.login.token);
    }
  };

  const signOut = () => {
    setAuthToken(null);
  };

  return {
    setAuthToken,
    isSignedIn,
    signIn,
    signOut,
    createApolloClient,
  };
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useProvideAuth();

  return (
    <AuthContext.Provider value={auth}>
      <ApolloProvider client={auth.createApolloClient()}>
        {children}
      </ApolloProvider>
    </AuthContext.Provider>
  );
};
