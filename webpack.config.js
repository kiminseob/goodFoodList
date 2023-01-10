const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",

  entry: "/src/index.js",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx", ".css"],
    alias: {
      components: path.resolve(__dirname, "src/components"),
    },
  },

  output: {
    path: path.resolve("dist"),
    publicPath: "/",
    filename: "bundle.js",
  },

  devServer: {
    host: "localhost",
    port: port,
    open: true,
    historyApiFallback: true,
  },
};
