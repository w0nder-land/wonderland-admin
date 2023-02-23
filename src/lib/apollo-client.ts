import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // uri: 'http://wonderland-env-admin.ap-northeast-2.elasticbeanstalk.com',
  cache: new InMemoryCache(),
  link: new HttpLink({
    credentials: 'include',
    uri: 'http://wonderland-env-admin.ap-northeast-2.elasticbeanstalk.com',
    fetchOptions: {
      mode: 'no-cors',
    },
  }),
  headers: {
    'Content-Type': 'application/graphql',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  },
});

export default client;
