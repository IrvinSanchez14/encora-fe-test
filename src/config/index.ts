import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
});

const httpLinkUpload = createUploadLink({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
  headers: {
    'Apollo-Require-Preflight': 'true',
  },
});

export const graphqlClient = new ApolloClient({
  link: from([httpLinkUpload]),
  cache: new InMemoryCache({
    addTypename: false,
  }),
  defaultOptions: {
    query: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'all',
    },
    watchQuery: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'all',
    },
  },
});
