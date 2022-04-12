const http = require('http')

const server = http.createServer()

server.on('connection' , (socket) => {
    console.log("Connected!")
})

server.listen(3000)

console.log("Local Host connected?")