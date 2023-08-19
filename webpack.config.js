const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = (env) => {
  const entry =
    env.environment === "development"
      ? { dev: "./src/js/dev.jsx" }
      : "./src/index.ts";

  return {
    entry,
    externals:
      env.environment === "production"
        ? {
            react: "react",
            reactDOM: "react-dom",
          }
        : {},
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
    output: {
      filename: `${env.environment === "development" ? "[name]" : "index"}.js`,
      path: path.resolve(__dirname, "dist"),
      library: "random-css",
      libraryTarget: "umd",
      umdNamedDefine: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        ENV: JSON.stringify(env.environment),
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "src/index.d.ts" },
          { from: "src/styles/random.css" },
        ],
      }),
      ...(env.environment === "development"
        ? [
            new HtmlWebpackPlugin({
              filename: "dev.html",
              template: "src/html/dev.html",
              title: "Random CSS",
            }),
          ]
        : []),
    ],
    resolve: {
      extensions: [".js", ".json", ".ts", ".tsx"],
    },
    ...(env.environment !== "production"
      ? {
          devtool: "source-map",
          mode: "development",
          optimization: {
            minimize: false,
          },
        }
      : {}),
  };
};
