const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => ({
  entry: {
    index: "./src/index.js",
    portfolio: "./src/portfolio.js",
  },
  output: {
    globalObject: "this",
    publicPath: "./",
    path: path.resolve(__dirname, "public"),
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
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          // {
          //   loader: "resolve-url-loader",
          //   options: {
          //     root: path.resolve(__dirname)
          //   }
          // },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  devtool: argv.mode === "development" ? "eval-source-map" : undefined,
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true,
    }),
    new webpack.ProvidePlugin({
      _: "underscore",
    }),
    new HtmlWebpackPlugin({
      hash: true,
      chunks: ["index"],
      template: path.resolve(__dirname, "src", "index.ejs"),
      filename: path.resolve(__dirname, "public", "index.html"),
    }),
    new HtmlWebpackPlugin({
      hash: true,
      chunks: ["portfolio"],
      template: path.resolve(__dirname, "src", "portfolio_page.ejs"),
      filename: path.resolve(__dirname, "public", "portfolio.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),
  ],
  //  devServer: {
  //    contentBase: path.join(__dirname, "public"),
  //    compress: true,
  //    port: 9000,
  //  },
});
