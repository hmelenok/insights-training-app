const ENVIRONMENT = process.env.ENVIRONMENT || 'dev';
const SHELF_DOMAIN = process.env.SHELF_DOMAIN || 'gsstaging.net';
const API_HOST = process.env.API_HOST || `api.${SHELF_DOMAIN}`;

const STATIC_URL = `https://static.${SHELF_DOMAIN}`;
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY || 'da2-f4mgxcrf7ffppbhmqom6mmstgq';

const {DATADOG_CLIENT_TOKEN, BASE_PATH} = process.env;

module.exports = {
  SHELF_DOMAIN, // gsstaging.net | shelf.io
  ENVIRONMENT, // dev | staging | prod
  API_HOST, // api.gsstaging.net | api.shelf.io - based on your SHELF_DOMAIM
  STATIC_URL, // for static resources
  DATADOG_CLIENT_TOKEN, // token to setup logs,
  GRAPHQL_API_KEY,
  BASE_PATH, // Deployment variable for GH-pages
};
