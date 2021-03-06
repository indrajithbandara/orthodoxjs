const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'www');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, './src/app/app.js'),
  ],
  devtool: 'eval',
  output: {
    path: buildPath,
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        exclude: [nodeModulesPath],
      },
    ],
  },
};
