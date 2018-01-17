var crypto = require('crypto');

// var salt = crypto.randomBytes(16).toString('hex');
var salt = '1f604e58c423aeac3b1f665f8d850747';
var password = '123';
var hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha1').toString('hex');

console.log('----- salt:', salt);
console.log('----- hash:', hash);
