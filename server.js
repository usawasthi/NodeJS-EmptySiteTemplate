var http = require('http');
var express = require('express');
var formidable = require('formidable');
var app = express();

app.get('/upload', function (req, res) {
    res.send(
    '<form action="/upload" method="post" enctype="multipart/form-data">' +
    '<input type="file" name="snapshot" />' +
    '<input type="submit" value="Upload" />' +
    '</form>'
    );
});

app.post('/upload', function (req, res) {
    var path = req.files.snapshot.path;
    var bs= azure.createBlobService();
    bs.createBlockBlobFromFile('mycontainer', 'test.png', path, function (error) { });
    res.send("OK");
});

