const devConfig = require('./webpack.config.dev')
const proConfig = require('./webpack.config.pro')

module.exports = ()=>{
    if(process.env.NODE_ENV==='pro'){
        return proConfig
    }
    return devConfig
}