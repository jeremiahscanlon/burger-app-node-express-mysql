// require the mysql connection information
var connection = require('./connection.js');

// Create the orm (object-relational mapping) functions
var orm ={

	// name the function
	getAll:function(table,callback){
		// write the query
		var q = 'SELECT * FROM '+table;
		// call the query
		connection.query(q,function(err,results){
			// call back function to run after results are received
			callback(results);
		});
	},
	create:function(name,callback){
		var q = 'INSERT INTO burgers (burger_name,devoured) Values (?,false)';
		connection.query(q,[name],function(err,results){
			callback(results);
		});
	},
	devour:function(id,callback){
		var q = 'UPDATE burgers SET devoured = 1 WHERE id = ?';
		connection.query(q,[id],function(err,results){
			callback(results);
		});
	}
};

// export the orm object to be used later.
module.exports = orm;