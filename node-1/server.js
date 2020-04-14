'use strict';

const http = require('http');

const waitFunc = function(){
    console.log("Wait 100 ms.");
};

http.createServer(function (req, res) {
    setTimeout(waitFunc, 100);
    console.log("Got request.");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world.\n');
}).listen(3002);
