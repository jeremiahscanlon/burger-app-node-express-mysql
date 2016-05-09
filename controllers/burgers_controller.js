// get the orm 
var orm = require('../config/orm.js');

// Create the Routing using a function exported using module.exports
module.exports = function(app){

	// when hitting the root
	app.get('/', function(req, res){

		// call "getAll" from the orm to pull the burgers that haven't been eaten
		orm.getAll('burgers WHERE devoured = 0',function(results){
			// create an object to hold the results of the sql query
			var data ={uneaten:results};
			// call "getAll" from the orm to pull burgers that have been eaten
			// NOTE: this must be inside the first query to ensure proper syncronousity
			orm.getAll('burgers WHERE devoured = 1',function(results){
				// add new results to the existing data object
				data.devoured = results;
				// render the object using the index.handlebars view
				res.render('index',data);
			});
		});
	});

	// when a post request is sent to "/api/create"
	app.post('/api/create/:name', function(req, res){
		// grab the text after "/api/create"
		var value = req.params.name;
		// call "create" from the orm to add a new burger
		orm.create(value,function(results){
			// send any response received back to the page.
			res.json(results);
		});
	});

	// when a post request is sent to "/api/devour"
	app.post('/api/devour/:id', function(req, res){
		// grab the text after "/api/create"
		var value = req.params.id;
		// call "devour" from the orm to mark a burger as eaten
		orm.devour(value,function(results){
			// send any response received back to the page.
			res.json(results);
		});
	});	

}