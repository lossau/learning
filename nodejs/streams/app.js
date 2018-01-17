// chunk: piece of data being sent through a stream

var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
    console.log(chunk);
    console.log('--------------- Chunk Length: ' + chunk.length + ' Bytes');
    writeable.write(chunk);
});
