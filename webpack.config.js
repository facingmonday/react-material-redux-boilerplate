const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dirApp = path.join(__dirname, 'app');
const dirApi = path.join(__dirname, 'api');
const appHtmlTitle = 'Admin';
const IS_DEV = process.env.NODE_ENV === 'dev';

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './app/app',
  ],
  output: {
    pathinfo: true,
    path: path.join(__dirname, '/public/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': dirApp,
      '~': dirApi,
    },
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    // proxy: {
    //   "/auth/local": "http://localhost:9000",
    //   "/api": "http://localhost:9000"
    // },
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      IS_DEV,
    }),
    new webpack.ProvidePlugin({
      _: 'lodash',
      moment: 'moment',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app/index.ejs'),
      title: appHtmlTitle,
    }),
    // new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets: ['es2015', 'react'],
          plugins: [
            'transform-class-properties',
            'transform-object-rest-spread',
            'transform-runtime',
          ],
        },
      },
      // STYLES
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]--[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]--[hash:base64:5]',
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};
