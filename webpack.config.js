const HtmlWebpackPlugin = require('html-webpack-plugin');
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
