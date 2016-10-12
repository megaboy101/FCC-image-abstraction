var mongo = require('mongodb').MongoClient;
var express = require('express');
var app = express();



mongo.connect('mongodb://localhost:27017/atom-test', function(err, db){
	if (err) throw new Error('Database connection failure!');
	else {
		console.log("Database connection successful!");
	}

	app.get('/', function(req, res){
		res.send("Atom Build Online and Database Connected!");
	});

	app.listen(process.env.PORT || 3000);
});
