const ENVIRONMENT = process.env.ENVIRONMENT || 'dev';
const SHELF_DOMAIN = process.env.SHELF_DOMAIN || 'gsstaging.net';
const API_HOST = process.env.API_HOST || `api.${SHELF_DOMAIN}`;

const STATIC_URL = `https://static.${SHELF_DOMAIN}`;

const {DATADOG_CLIENT_TOKEN} = process.env;

module.exports = {
  SHELF_DOMAIN, // gsstaging.net | shelf.io
  ENVIRONMENT, // dev | staging | prod
  API_HOST, // api.gsstaging.net | api.shelf.io - based on your SHELF_DOMAIM
  STATIC_URL, // for static resources
  DATADOG_CLIENT_TOKEN, // token to setup logs
};
