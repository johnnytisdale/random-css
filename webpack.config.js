const HtmlWebpackPlugin = require('html-webpack-plugin'),
	path = require('path'),
	webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = env => {

	const plugins = [
		new webpack.DefinePlugin({
			ENV: JSON.stringify(env.environment),
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: "src/styles/random.css" },
			]
		})
	];

	if (env.environment != 'production') {
		plugins.push(
			new HtmlWebpackPlugin({
				template: 'src/html/index.html',
				title: 'Random CSS'
			})
		);
	}

	return {
		entry: './src/components/Form.tsx',
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
			filename: 'main.js',
			path: path.resolve(__dirname, 'dist'),
		},
		plugins: plugins,
		resolve: {
			extensions: [".js", ".json", ".ts", ".tsx"],
		}
	}
};