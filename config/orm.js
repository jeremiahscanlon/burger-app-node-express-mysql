var connection = require('./connection.js');

var orm ={
	getAll:function(table,callback){
		var q = 'SELECT * FROM '+table;
		connection.query(q,function(err,results){
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

module.exports = orm;