/* eslint-disable no-underscore-dangle */
// import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//   // uri: 'http://wonderland-env-admin.ap-northeast-2.elasticbeanstalk.com',
//   cache: new InMemoryCache(),
//   link: new HttpLink({
//     credentials: 'include',
//     uri: 'http://wonderland-env-admin.ap-northeast-2.elasticbeanstalk.com/graphql',
//     fetchOptions: {
//       mode: 'no-cors',
//     },
//   }),
//   headers: {
//     'Content-Type': 'application/graphql',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Credentials': 'true',
//   },
// });

// export default client;

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { useMemo } from 'react';

let apolloClient: ApolloClient<any>;

function createApolloClient() {
  return new ApolloClient({
    // ssrMode: typeof window === 'undefined',
    // link: new HttpLink({
    //   uri: '/graphql',
    // }),
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: any = null): ApolloClient<any> {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === 'undefined') return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any): ApolloClient<any> {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
