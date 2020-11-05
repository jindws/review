const fs = require('fs')
// const rs = fs.createReadStream('../.gitignore')
// const ws = fs.createWriteStream('./.gitignore')
// rs.pipe(ws)

const http = require('http')

http.createServer((req,res)=>{
    const rs = fs.createReadStream('../.gitignore')
    rs.pipe(res)
}).listen(3000,()=>{
    console.log('listen 3000')
})