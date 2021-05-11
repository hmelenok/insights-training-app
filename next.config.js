/* eslint-disable @typescript-eslint/no-var-requires */
const withSass = require('@zeit/next-sass');
const environment = require('./environment.config');

module.exports = withSass({
  env: environment,
  trailingSlash: true,
  typescript: {
    ignoreDevErrors: true,
  },
  basePath: environment.BASE_PATH || '',
  assetPrefix: environment.BASE_PATH ? `${environment.BASE_PATH}/` : '',
});
