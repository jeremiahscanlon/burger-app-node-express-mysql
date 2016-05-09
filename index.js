// express require and express app variable creation
var express = require('express');
var app = express();

// Set up handlebars for express
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Sets up the Express app to handle data parsing 
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// load the static files
var staticContentFolder = __dirname + '/public';
app.use(express.static(staticContentFolder));

// Get the routes for the dev controller
require('./controllers/burgers_controller.js')(app);

// set the port and start the server
var PORT = process.env.PORT || 80;
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})

