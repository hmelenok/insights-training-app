/* eslint-disable @typescript-eslint/no-var-requires */
const withSass = require('@zeit/next-sass');
const environment = require('./environment.config');

module.exports = withSass({
  env: environment,
  trailingSlash: true,
  typescript: {
    ignoreDevErrors: true,
  },
  basePath: process.env.BASE_PATH || '',
  assetPrefix: process.env.BASE_PATH ? `${process.env.BASE_PATH}/` : '',
});
