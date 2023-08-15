const net = require('net')
const readline = require('readline')
const client = new net.Socket()
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
client.connect(26000, '127.0.0.1', ()=>{
    console.log('conectei')

    rl.addListener('line', line=>{
        client.write('cliente: '+line)
    })
    client.write('aula de socket + node.js')
})