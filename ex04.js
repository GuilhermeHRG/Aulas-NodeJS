const os = require('os')
const {freemem , totalmem} = os
const totalm = `${(totalmem() / 1024 / 1024)} MB`
const livrem = `${(freemem() / 1024 / 1024)} MB`

console.log('Livre '+ livrem + '\nTotal '+totalm)
