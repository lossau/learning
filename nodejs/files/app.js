var fs = require('fs');

// sincrono
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// assincrono
// var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    console.log(data);
});

console.log('pronto!');
