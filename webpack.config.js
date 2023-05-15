const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');
const port = process.env.PORT || 3000;

dotenv.config();

module.exports = {
  mode: 'development',

  entry: '/src/index.js',

  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.scss'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      constants: path.resolve(__dirname, 'src/constants'),
      utils: path.resolve(__dirname, 'src/utils'),
      db: path.resolve(__dirname, 'src/db'),
      apis: path.resolve(__dirname, 'src/apis'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      icons: path.resolve(__dirname, 'src/icons'),
      store: path.resolve(__dirname, 'src/store'),
      libs: path.resolve(__dirname, 'src/libs'),
      types: path.resolve(__dirname, 'src/types'),
    },
    fallback: {
      assert: require.resolve('assert'),
      buffer: require.resolve('buffer'),
      console: require.resolve('console-browserify'),
      constants: require.resolve('constants-browserify'),
      crypto: require.resolve('crypto-browserify'),
      domain: require.resolve('domain-browser'),
      events: require.resolve('events'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      path: require.resolve('path-browserify'),
      punycode: require.resolve('punycode'),
      process: require.resolve('process/browser'),
      querystring: require.resolve('querystring-es3'),
      stream: require.resolve('stream-browserify'),
      string_decoder: require.resolve('string_decoder'),
      sys: require.resolve('util'),
      timers: require.resolve('timers-browserify'),
      tty: require.resolve('tty-browserify'),
      url: require.resolve('url'),
      util: require.resolve('util'),
      vm: require.resolve('vm-browserify'),
      zlib: require.resolve('browserify-zlib'),
      child_process: false,
      fs: false,
      net: false,
      tls: false,
    },
  },

  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  devServer: {
    host: 'localhost',
    port: port,
    open: true,
    historyApiFallback: true,
  },
};
