// require mysql
var mysql = require('mysql');

// setup the mysql connection information
var connection = mysql.createConnection({
    port: 3306,
    host: '',
    user: '',
    password: '',
    database: ''
});

// connect to the database and log the error or connect as ID
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// export the connection variable for accessing mysql database info
module.exports = connection;