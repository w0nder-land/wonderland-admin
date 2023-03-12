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

// let apolloClient: ApolloClient<any>;

// function createApolloClient() {
// return new ApolloClient({
// ssrMode: typeof window === 'undefined',
// link: new HttpLink({
//   uri: '/graphql',
// }),
// uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
// uri: 'http://wonderland-env-admin.ap-northeast-2.elasticbeanstalk.com/graphql',
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });
// }

// export function initializeApollo(initialState: any = null): ApolloClient<any> {
//   const _apolloClient = apolloClient ?? createApolloClient();

//   if (initialState) {
//     _apolloClient.cache.restore(initialState);
//   }

//   if (typeof window === 'undefined') return _apolloClient;

//   if (!apolloClient) apolloClient = _apolloClient;

//   return _apolloClient;
// }

// export function useApollo(initialState: any): ApolloClient<any> {
//   const store = useMemo(() => initializeApollo(initialState), [initialState]);
//   return store;
// }

const httpLink = new HttpLink({
  uri: '/api/graphql',
  credentials: 'same-origin',
  // headers: {
  //   authorization:
  //     'Bearer eyJhbGciOiJIUzUxMiJ9.eyJhdXRob3JpdHkiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0sInN1YiI6IuumrOyekCIsImF1ZCI6Im1vYmlsZSIsImlhdCI6MTY3ODA4NzU0MiwiZXhwIjoxNjc5NTY3NTQyfQ.aDFbGnZwtC7bLFd_0PeaAW2x-AZ9Fiw3aQ1CTFZ8FOOGeUOEZtMP1puhgJ-bjYfsS_RTEt9BMx_daVdYh0qrLQ',
  //   // 'Bearer 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',
  // },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
