const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const common = require('./webpack.config.common.js');

const loaders = common.createLoaders('[name].[hash].[ext]', '[name].[hash].[ext]');

loaders.push({
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [{
      loader: "css-loader",
      options: {
        minimize: true
      }
    }, {
      loader: "sass-loader"
    }]
  })
});

module.exports = merge(common.config, {
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin("styles.[chunkhash].css")
  ],
  module: {
    loaders: loaders
  },
  output: {
    filename: '[name].[chunkhash].bundle.js'
  }
});
