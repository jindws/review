const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const baseConfig = require('./webpack.config.base')
const {merge} = require('webpack-merge')
module.exports = merge(baseConfig,{
    mode: 'development',//'production,none
    output: {
        path: path.resolve(__dirname, "dist"),
        // filename: "[name].js"
        filename: "[name]-[hash:3].js",
        //hash 每次构建随机生成一个hash[无修改不变]
        // chunkhash //每个模块 互不干涉

        //cdn
        // publicPath: ""
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'title',//ejs语法  <title><%=htmlWebpackPlugin.options.title%></title>
            template: './index.html',
            filename: 'index.html',
            inject: 'body',//true head false [js/css.. in html place]
        }),
        new webpack.HotModuleReplacementPlugin(),//webpack自带的HMR插件
    ],
    module: {
        //loader 很消耗性能
        rules: [
            {
                test:/\.js[x]$/,
                // exclude: /node_modules/,
                include:path.resolve(__dirname,'./src'),//只在src生效-推荐
                use: {
                    //@babel/core babel核心代码
                    loader:'babel-loader',//webpack与babel沟通的桥梁
                    // options: {
                    //     presets:[[
                    //         "@babel/preset-env",
                    //         {
                    //             // polyfill缺点 污染全局对象 对开源/UI库/组件库 的不友好
                    //             // useBuiltIns:'entry'//需要import @babel/polyfill,自动按需加载 垫片
                    //             useBuiltIns:'usage',//推荐 不需要import 自动检测,需要@babel/polyfill
                    //             // useBuiltIns:'false'//无效,不推荐
                    //             targets:{
                    //                 firefox:52,
                    //                 chrome:35,
                    //             },
                    //             corejs:2,//新版本需要制定核心库版本
                    //         }
                    //     ],'@babel/preset-react']//语法转换插件
                    // }
                }
            },
            {
                test: /\.less$/,
                include:path.resolve(__dirname,'./src'),
                //从后往前执行
                //less-loader less->css
                //css-loader -> css in js
                //style-loader 从js提取css,生成style标签->html
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                include:path.resolve(__dirname,'./src'),
                //node-sass scss->css
                //sass-loader webpack与node-sass通信的桥梁
                //...
                // css 模块化 use css like obj
                use: [
                    'style-loader',//支持HMR
                    // MiniCssExtractPlugin.loader,//提取出文件 不支持HMR 开发时不推荐
                    {
                        loader: 'css-loader',
                        options: {
                            //css 模块化
                            modules: true,
                        }
                        //postcess.config.js
                    }, 'postcss-loader', 'sass-loader']
            },
            {
                //jpg/jpeg
                test: /\.(png|jpe?g|gif)$/,
                include:path.resolve(__dirname,'./src'),
                use: [{
                    // loader:'file-loader',
                    //url-loader 包含file-loader的功能,+limit
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash:3].[ext]',
                        outputPath: '/images',
                        limit: 4 * 1024,//4k以内的文件转换为base64
                    }
                }]
            }
        ]
    },
    //cheap 较快,没有列信息  默认值

    // devtool: "source-map"//development 默认开启 source-map .map文件 bundle文件与源文件映射
    // devtool: "inline-source-map"//没有.map,关系在行内
    // devtool: "cheap-inline-source-map"//报错只有行信息
    devtool: 'eval-cheap-module-source-map',//开发推荐
    // devtool: 'cheap-module-source-map',//线上推荐~最好不开启
    //webpack-dev-server 基于express
    devServer: {
        contentBase:path.resolve(__dirname,'/build'),//支持相对路径
        port:8080,
        open:false,
        hot:true,//开启HMR
        hotOnly:true,//不自动刷新浏览器
        //代理
        proxy:{
            "/api":{
                target:"http://localhost:9000"
            },
        },
        //mock server
        before(app,server){
            app.get('/api/info',(req,res)=>{
                res.json({
                    info:'message'
                })
            })
        },
        // after 同 before
    },
})