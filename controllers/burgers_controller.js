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
var orm = require('../config/orm.js')

app.get('/', function(req, res){
	console.log('you\'ve hit the landing page');
	res.htmle(orm.getAllBurgers());
})