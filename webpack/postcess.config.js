const autoprefixer = require('autoprefixer')
module.exports = {
    plugins:[
        // require('autoprefixer')("Firefox 52")
        autoprefixer({
            overrideBrowsersList:["last 2 versions",">1%"]
        })
    ]
}