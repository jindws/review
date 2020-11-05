const fs = require('fs')
const {promisify} = require('util')

fs.readFile('../../.gitignore',(err,data)=>{//异步方法必须要存在callback
    // console.log(err,data.toString())
})

process.nextTick(async ()=>{
    // await fs.readFile('../../.gitignore')//Argument types do not match parameters
    const readFile = promisify(fs.readFile)
    const data = await readFile('../../.gitignore')
    console.log(data.toString())
})

