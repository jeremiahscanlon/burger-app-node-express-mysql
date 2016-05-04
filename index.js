// express require and express app variable creation
var express = require('express');
var app = express();

// other required depencencies
var methodOver = require('method-override');

// Sets up the Express app to handle data parsing 
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Set up handlebars for express
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// get the orm 
var orm = require('./config/orm.js')

app.get('/', function(req, res){
	orm.getAll('burgers',function(results){
		res.json(results);
	});
});

app.post('/api/create/:name', function(req, res){
	var value = req.params.name;
	orm.create(value,function(results){
		res.json(results);
	});
});

app.post('/api/devour/:id', function(req, res){
	var value = req.params.id;
	orm.devour(value,function(results){
		res.json(results);
	});
});


var PORT = process.env.PORT || 8181;
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})

