import {GraphQLClient} from 'graphql-request';
import {GRAPGHQL_INSIGHTS_API_URL, TOKEN_KEY} from './constants';

const client = new GraphQLClient(GRAPGHQL_INSIGHTS_API_URL, {
  headers: {
    'x-api-key': process.env.GRAPHQL_API_KEY,
    authorization: (typeof localStorage === 'object' && localStorage.getItem(TOKEN_KEY)!) || '',
  },
});

export default client;
