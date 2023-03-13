var http = require('http')

http.createServer(function(res, req) {
    req.end('Hello, Welcome to my website!!!')
}).listen(8081)

console.log('Servidor funcionado!!!')