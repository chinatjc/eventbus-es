const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		bundle: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, './src'),
					// eventbus-es中js版本为es6，在打包时需要经过babel编译
					path.resolve(__dirname, './node_modules/eventbus-es')
				],
				use: ['babel-loader']
			}
		]
	},
	optimization: {
		minimize: false
	},
	watch: true
};