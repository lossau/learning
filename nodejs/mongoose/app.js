var express = require('express');

var app = express();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('localhost/learnmongo');

// var Cat = mongoose.model('Cat', { name: String });

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });



// deprecated
// mongoose.connect('mongodb://localhost:27017/mongooseapp');
// mongoose.createConnection('mongodb://localhost:27017/mongooseapp');
// mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: 'Av. Paulista, 1000'
});

john.save(function(err) {
    if (err)  throw err;
    console.log('person saved');
});

var jane = Person({
    firstname: 'Jane',
    lastname: 'Doe',
    address: 'Av. Paulista, 1001'
});

jane.save(function(err) {
    if (err)  throw err;
    console.log('person saved');
});

// var db;
// if (process.env.VCAP_SERVICES) {
//    var env = JSON.parse(process.env.VCAP_SERVICES);
//    db = mongoose.createConnection(env['mongodb-2.2'][0].credentials.url);
// } else {
//    db = mongoose.createConnection('localhost', 'mongooseapp');
// }

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;


app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('req url: ' + req.url);

    // get all users
    Person.find({} , function(err, users) {
        console.log('users:', users);
        if (err) throw err;
    });

    next();
});

htmlController(app);
apiController(app);

app.listen(port);