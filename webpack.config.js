/* global __dirname, require, module*/

const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');
const { version } = require('./package.json');

let plugins = [
  require('autoprefixer'),
  new WebpackNotifierPlugin({
    contentImage: path.join(__dirname, 'assets/louis.png'),
  }),
  new UglifyJsPlugin({ minimize: true }),
];

const config = {
  entry: {
    react: __dirname + '/src/main.js',
    styles: './src/oui/oui.scss',
  },
  devtool: 'source-map',
  output: {
    path: __dirname + `/dist/docs/oui/${version}/js/`,
    filename: '[name].js',
    chunkFilename: '[name]-[hash].js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js'],
  },
  plugins: plugins,
};

module.exports = config;
