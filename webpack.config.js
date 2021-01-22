const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => ({
  entry: {
    index: "./src/index.js",
    portfolio: "./src/portfolio.js",
  },
  output: {
    globalObject: "this",
    path: path.resolve(__dirname, "public-2"),
    filename: "js/[name]-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ejs$/i,
        loader: "ejs-loader",
        options: {
          esModule: false,
        },
      },
    ],
  },
  devtool: argv.mode === "development" ? "eval-source-map" : undefined,
  plugins: [
    new webpack.ProvidePlugin({
      _: "underscore",
    }),
    new HtmlWebpackPlugin({
      hash: true,
      chunks: ["index"],
      templateParameters: {
        title: "aaa",
        incl: (path) => require(`./src/components/${path}/${path}.ejs`),
      },
      template: path.resolve(__dirname, "src", "index.ejs"),
      filename: path.resolve(__dirname, "public-2", "index.html"),
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true,
    }),
    
  ],
  devServer: {
    contentBase: path.join(__dirname, "public-2"),
    compress: true,
    port: 9000,
  },
});
