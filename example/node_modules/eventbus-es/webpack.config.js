const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		bundle: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, './lib'),
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	},
	// 防止将babel-runtime打包进npm模块里
	externals: /^babel-runtime/,
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, './src'),
				use: ['babel-loader']
			}
		]
	}
};