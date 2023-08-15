const os = require('os')
const {freemem, totalmem} = os



const totalm = parseInt(totalmem()    / 1024 / 1024)
const livrem = parseInt(freemem() / 1024 / 1024)
const uso = parseInt(livrem / totalm * 100)
const stats = {
    free: `${livrem} MB`,
    total: `${totalm} MB`,
    usage: `${uso}%`
}
console.log(stats)