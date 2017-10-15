const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');



module.exports = {
  createLoaders: function(assetsName, fontsName) {
    return [{
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
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: 'assets/',
          name: assetsName
        }
      }]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: 'fonts/',
          name: fontsName
        }
      }]
    }];
  },
  config: {
    entry: {
      main: './src/index.tsx',
      vendor: [
        'react',
        'react-dom',
        'material-ui',
        'typeface-roboto'
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
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
  }
};
