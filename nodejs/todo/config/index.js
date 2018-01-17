var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        // return 'mongodb://' + configValues.uname + ':' + configValues.pwd + configValues.host + '/' + configValues.dbName
        return configValues.host + '/' + configValues.dbName
    }
};