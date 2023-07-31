const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = env => {

	const isProduction = env.environment === 'production';

	const plugins = [
		new webpack.DefinePlugin({
			ENV: JSON.stringify(env.environment),
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'src/styles/random.css' },
			]
		})
	];

	if (!isProduction) {
		plugins.push(
			new HtmlWebpackPlugin({
				template: 'src/html/index.html',
				title: 'Random CSS'
			})
		);
	}

	return {
		entry: `./src/${isProduction ? 'js/index.js' : 'components/Form.tsx'}`,
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
			filename: 'index.js',
			path: path.resolve(__dirname, 'dist'),
			library: 'random-css',
			libraryTarget: 'umd',
			umdNamedDefine: true
		},
		plugins: plugins,
		resolve: {
			extensions: ['.js', '.json', '.ts', '.tsx'],
		},
		...(!isProduction && {
			devtool: 'source-map',
			mode: 'development',
			optimization: {
				minimize: false
			},
		})
	}
};