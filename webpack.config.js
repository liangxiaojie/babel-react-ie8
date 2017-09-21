const path = require('path');
const webpack = require('webpack');

const DEBUG = process.env.NODE_ENV === 'development';

const plugins = [];

if (!DEBUG) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      properties: false,
      warnings: false,
    },
    output: {
      quote_keys: true,
    },
    mangle: {
      screw_ie8: false,
    },
    sourceMap: false,
  }));
}

module.exports = {
  entry: [
    'babel-polyfill', 'es6-promise', 'fetch-ie8', './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
    postLoaders: [
      {
        test: /\.js$/,
        loaders: ['es3ify-loader'],
      },
    ],
  },
  plugins,
  debug: DEBUG,
  devtool: DEBUG
    ? 'source-map'
    : false,
};
