const path = require('path');
const webpackConfig = require('./webpack.config');

module.exports = Object.assign(webpackConfig, {
  entry: './app/app',
  output: {
    pathinfo: true,
    publicPath: '/',
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
});
