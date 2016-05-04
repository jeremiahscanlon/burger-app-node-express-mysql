var connection = require('./connection.js');

var orm ={
	getAllBurgers:function(){
		var q = 'SELECT * FROM burgers';
		connection.query(q,function(err,res){
			console.log('select:');
			console.log(res);
			return res;
		});
	},
	createBurger:function(name){
		var q = 'INSERT INTO burgers (burger_name,devoured) Values (?,false)';
		connection.query(q,[name],function(err,res){
			console.log('insert:');
			console.log(res);
			return res;
		});
	},
	devourBurger:function(id){
		var q = 'UPDATE burgers SET devoured = 1 WHERE id = ?';
		connection.query(q,[id],function(err,res){
			console.log('update:');
			console.log(res);
			return (res);
		});
	}
};

module.exports = orm;