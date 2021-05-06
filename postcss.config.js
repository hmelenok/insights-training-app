module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? {
          'postcss-flexbugs-fixes': {}, // Next 10 has fix for issues with latest version of this package in next patch
          'postcss-preset-env': {
            browsers: ['last 4 versions'], //No IE11,
            autoprefixer: {
              flexbox: 'no-2009',
              grid: 'autoplace'
            },
            stage: 3,
            features: {
              'custom-properties': false
            }
          },
          cssnano: {
            preset: 'default'
          }
        }
      : {}
};
