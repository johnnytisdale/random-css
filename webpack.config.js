const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
	entry: '/src/index.tsx',
    externals: {
        react: {          
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    },
  	module: {
    	rules: [
	      	{
		        test: /\.(js|jsx|ts|tsx)$/,
		        exclude: /node_modules/,
		        use: [
					"babel-loader",
					"ts-loader"
				]
	      	},
			/*{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},*/
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
        path: path.resolve(__dirname, "dist"),
        filename: 'index.js',
        library: 'random-css',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
  	resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
          	'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        },
		extensions: ['.tsx', '.ts', '.js']
    },

};