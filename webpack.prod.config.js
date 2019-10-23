// react_start/webpack.config.js
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// For Typescript
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		'js/app': ['./src/App.tsx'],
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader:'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(ts|tsx)$/,
				use: [
					'babel-loader',
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
						},
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.[s]*css$/,	
				use: [
					'css-hot-loader',
					'css-loader',
					'style-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
		// For typescript
		new ForkTsCheckerWebpackPlugin({ silent: true }),
	],
	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts', '.css', '.scss', '.json'],
	},
};