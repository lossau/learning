// serialize: translating an object into a format that can be stored or transfered
// json, csv, xml

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');
