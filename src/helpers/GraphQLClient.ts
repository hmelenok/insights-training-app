import {GraphQLClient} from 'graphql-request';
import {GRAPGHQL_INSIGHTS_API_URL, TOKEN_KEY} from './constants';

const client = new GraphQLClient(GRAPGHQL_INSIGHTS_API_URL, {
  headers: {
    'x-api-key': process.env.GRAPHQL_API_KEY,
    // Need to have this "hack" otherwise next will fail to render app on SSR local development
    authorization: process.browser && localStorage.getItem(TOKEN_KEY)!,
  },
});

export default client;
