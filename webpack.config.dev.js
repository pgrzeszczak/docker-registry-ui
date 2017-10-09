const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common.config, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    loaders: common.createLoaders('[name].[ext]', '[name].[ext]')
  },
});
