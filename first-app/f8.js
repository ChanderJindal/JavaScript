const Os = require('os')

var TM = Os.totalmem()
var FM = Os.freemem()
var UT = Os.uptime()

console.log("Total Memory -> " + TM )
console.log("Total Free Memory -> " + FM )
console.log(`Uptime -> ${UT}`)