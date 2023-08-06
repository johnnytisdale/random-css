const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = env => {

  const entry = env.environment === "form"
    ? "./src/components/Form/Form.tsx"
    : env.environment === "test"
    ? { test: "./src/js/test.jsx" }
    : "./src/js/index.js";

  return {
    entry,
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ]
        }
      ]
    },
    output: {
      filename: `${env.environment === "test" ? '[name]' : "index"}.js`,
      path: path.resolve(__dirname, 'dist'),
      library: 'random-css',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    plugins: [
      new webpack.DefinePlugin({
        ENV: JSON.stringify(env.environment),
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/styles/random.css' },
        ]
      }),
      ...(
        env.environment === "form"
          ? [
            new HtmlWebpackPlugin({
              filename: "form.html",
              template: 'src/html/index.html',
              title: 'Random CSS'
            })
          ]
          : env.environment === "test"
          ? [
            new HtmlWebpackPlugin({
              filename: 'test.html',
              inject: false,
              template: 'src/html/test.html',
              title: 'Random CSS'
            })
          ]
          : []
      )
    ],
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    ...(
      env.environment !== "production"
        ? {
          devtool: 'source-map',
          mode: 'development',
          optimization: {
            minimize: false
          }
        }
        : {}
    )
  }
};
