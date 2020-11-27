const path = require('path')

module.exports = {
	entry:'./client/index.tsx',
	mode:'development',
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'./public')
	},
	module:{
		rules:[{
			test:/\.ts[x]$/,
			loader:'babel-loader',
			exclude:/node_modules/,
		}]
	},
	resolve:{
		extensions: ['.js','.jsx','.ts','.tsx'],
	}
}
