const path = require('path');
const webpackConfig = require('./webpack.config');

module.exports = Object.assign(webpackConfig, {
  devtool: 'source-map',

  output: {
    pathinfo: true,
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },

  devServer: {
    proxy: {
      '*': 'http://localhost:9000',
    },
    historyApiFallback: true,
  },
});
