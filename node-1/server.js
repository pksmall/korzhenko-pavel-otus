'use strict';

const http = require('http');

let server = http.createServer(function (req, res) {
    setTimeout(function() {
        console.log("got request!");
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
    }, 1000);
}).listen(3002);

console.log('Server running at http://127.0.0.1:3002/');
