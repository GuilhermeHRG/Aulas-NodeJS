const net = require('net')
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const handleConnection = socket =>{
    console.log("algume se conectou.")
    socket.on('data', data =>{
        const str = data.toString()
        if(str === 'end'){
            socket.end()
        }
        console.log(str)
    })
    rl.addListener('line', line =>{
        socket.write('server: '+line)
    })
    socket.on('end', ()=>{
        console.log('desconectou')
    })
}

const server = net.createServer(handleConnection)
server.listen(26000, '127.0.0.1')