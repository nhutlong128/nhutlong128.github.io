import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql.contentful.com/content/v1/spaces/m4w3zg4xlj2p',
    headers: {
        Authorization: `Bearer ${'_OjdIAgP4_ESd0JQWeqfwltJVPsCpwj_Rjdm0YN7xbc'}`,
      },
    fetch,
  }),
  cache: new InMemoryCache()
});