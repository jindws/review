const path = require('path')
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    // entry:'./src/index/js',
    // entry:['./src/index.js','./src/main.js'],
    entry: {
        // index: ['./src/index.js', './src/main.js'],
        // main: './src'
        main: './src/index.jsx'
    },

    plugins: [
        new CleanWebpackPlugin(),
    ],
    resolve:{
        //查找第三方依赖的范围固定-->加速
        modules:[path.resolve(__dirname,'./node_modules')],
        // webpack-dev-server 使用alias后变得极慢
        // alias:{
        //     //减少查找过程
        //     react:path.resolve(__dirname,"./node_modules/react/umd/react.production.min.js"),
        //     //起别名
        //     // "@":path.resolve(__dirname,'./src/components')
        // },
        //越长性能越差
        // extensions: ['.js','.jsx','.tsx','.less'],
    },
}