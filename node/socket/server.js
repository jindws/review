const net = require('net')
const server = net.createServer()

const clientList = [];

server.on('connection',client=>{
    client.write('connect success!')
    clientList.push(client)

    client.on('data',data=>{
        console.log(data.toString())
        clientList.forEach(itm=>{
            itm.write(data)
        })
    })
})

server.listen(9000)

//telnet localhost 9000