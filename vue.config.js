const path = require('path');

module.exports = {
  productionSourceMap: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/styles/config.scss'),
        path.resolve(__dirname, './src/styles/mixins.scss'),
      ],
    },
  },
}
