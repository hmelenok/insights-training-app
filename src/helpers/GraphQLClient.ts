import {GraphQLClient} from 'graphql-request';
import {GRAPGHQL_INSIGHTS_API_URL} from './constants';

// ... or create a GraphQL client instance to send requests
const client = new GraphQLClient(GRAPGHQL_INSIGHTS_API_URL, {
  headers: {'x-api-key': process.env.GRAPHQL_API_KEY},
});

export default client;
