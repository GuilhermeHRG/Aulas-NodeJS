const os = require('os')
const {freemem, totalmem} = os
console.log(freemem(), totalmem())
console.log('Livre' + freemem() + 'Total' + totalmem())