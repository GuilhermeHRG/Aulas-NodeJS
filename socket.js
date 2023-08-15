const net = require('net')
 const handleConnection = socket =>{
    console.log("alguem se conectou")
    socket.on('data', data =>{
        console.log(data.toString())
    })
    socket.on('end', ()=>{
        console.log('destrancou')
    })

 }

 const server = net.createServer(handleConnection)
 server.listen(26000, '127.0.0.1')