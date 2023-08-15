const net  = require('net')
const readline = require('readline')

const client = new net.Socket()
client.connect(26000, '127.0.0.1', ()=>{
    console.log('conectou')
    client.write('Faaala fiote')
})