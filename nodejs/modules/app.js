var greet = require('./greet')
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'modificado';
greet3.greet();

var greet3 = require('./greet3');
greet3.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();
grtr.greeting = 'modificado';
grtr.greet();
var grtr = new Greet4();
grtr.greet();


var util = require('util');
var name = 'Thomas Jefferson';
var greeting = util.format('Hello, %s!', name);
util.log(greeting);
