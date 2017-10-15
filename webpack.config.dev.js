const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const webpack = require('webpack');

const loaders = common.createLoaders('[name].[ext]', '[name].[ext]');

loaders.push({
  test: /\.scss$/,
  use: [{
    loader: "style-loader"
  }, {
    loader: "css-loader"
  }, {
    loader: "sass-loader"
  }]
});

module.exports = merge(common.config, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: loaders
  },
});
