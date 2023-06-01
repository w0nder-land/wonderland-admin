import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
  uri: '/api/graphql',
  credentials: 'same-origin',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
