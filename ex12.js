const os = require('os')
const log = require('./ex09.js')

setInterval(() =>{
    const {freemem, totalmem} = os

    const totalm = parseInt(totalmem() / 1024 / 1024)
    const livrem = parseInt(freemem() / 1024 / 1024)
    const uso = parseInt(livrem / totalm * 100)


    const stats = {
        free: `${livrem} MB`,
        total: `${totalm} MB`,
        usage: `${uso} %`
    }
    console.clear()
    console.table(stats)

    log(`${JSON.stringify(stats)}\n`)
}, 2000)