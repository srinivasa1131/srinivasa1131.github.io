var express  = require('express');
var app      = express(); 								// create our app w/ express					// mongoose for mongodb
var port  	 = process.env.PORT || 8080; 				// set the port

app.use(express.static(__dirname + '/public')); 				// set the static files location /public/img will be /img for users// parse application/vnd.api+json as json
app.use(methodOverride());
require('js/main.js')(app);
app.listen(port);
console.log("App listening on port " + port);