// var Emitter = require('./emitter');
var Emitter = require('events');
var eventsCfg = require('./config').events;

var emtr = new Emitter();

emtr.on(eventsCfg.GREET, function(){
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function(){
    console.log('A greeting occurred!');
});

console.log('hello');
emtr.emit('greet');
