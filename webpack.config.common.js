const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.tsx',
    vendor: [
      'react',
      'react-dom',
      'material-ui'
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      include: path.resolve(__dirname, "src"),
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Docker Registry UI',
      template: path.resolve(__dirname, "src/index.html"),
      inject: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
