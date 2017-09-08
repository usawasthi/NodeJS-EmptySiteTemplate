var http = require('http');
var express = require('./node_modules/express');
var app = express();

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world USA!');
    }).listen(process.env.PORT || 8080);


