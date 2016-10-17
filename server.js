var express = require('express'),
	 routes = require('./app/routes/index.js'),
	 mongo = require('mongodb').MongoClient;

var app = express();

mongo.connect('mongodb://localhost:27017/atom-test', function(err, db){
	if (err) throw new Error("Failed to connect to database");
	else {
		console.log("MongoDB successfully connected to port 27017");
	}

	app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

	routes(app, db);

	app.listen(3000, function(){
		console.log("Listening on port 3000...");
	});
});
