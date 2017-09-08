var http = require('http');
var express = require('./node_modules/express');
var app = express();

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    }).listen(process.env.PORT || 8080);

app.get('/upload', function (req, res) {
    res.send(
    '<form action="/upload" method="post" enctype="multipart/form-data">' +
    '<input type="file" name="snapshot" />' +
    '<input type="submit" value="Upload" />' +
    '</form>'
    );
});
