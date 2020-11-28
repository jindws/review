const express = require('express')

const app = express()

app.get('/api/user/list',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.json({
        list:[{
            name:'csr'
        },{
            name:'同构'
        },{
            name:'ssr'
        }]
    })
})


app.listen(3002,()=>{
    console.log('listen',3002)
})


