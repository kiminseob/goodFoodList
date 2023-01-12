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
      kakaoMapAPIUrl: process.env.REACT_APP_KAKAO_API_KEY,
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.scss'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
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
