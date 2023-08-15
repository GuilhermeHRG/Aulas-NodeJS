const os = require('os')
const {freemem, totalmem} = os

const totalm = parseInt(totalmem() / 1024 / 1024)
const livrem = parseInt(freemem() / 1024 / 1024)
console.log('Livre '+ livrem + '\nTotal '+ totalm)