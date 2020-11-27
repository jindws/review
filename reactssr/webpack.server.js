const path = require('path')
const Externals = require('webpack-node-externals')

module.exports = {
	entry:'./server/index.tsx',
	mode:'development',
	target:'node',
	externals:[Externals()],
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'./dist')
	},
	module:{
		rules:[{
			test:/\.ts[x]$/,
			loader:'babel-loader',
			exclude:/node_modules/,
		}]
	},
	resolve:{
		extensions: ['.ts','.tsx'],
	}
}
