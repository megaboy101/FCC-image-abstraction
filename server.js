var express = require('express'),
	 routes = require('./app/routes/index.js'),
	 mongo = require('mongodb').MongoClient;

var app = express();

mongo.connect(process.env.Mongo_URI, function(err, db){
	if (err) throw new Error("Failed to connect to database");
	else {
		console.log("MongoDB successfully connected to mLab");
	}

	app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

	routes(app, db);

	app.listen(process.env.PORT || 3000, function(){
		console.log("Listening...");
	});
});
