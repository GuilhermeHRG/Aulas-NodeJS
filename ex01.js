const os = require('os')
const {freemem, totalmem} = os
console.log(freemem(), totalmem())