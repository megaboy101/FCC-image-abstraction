var Logbook = require(process.cwd() + '/app/controllers/logbook.server.js');

module.exports = function(app, db){
	var logbook = new Logbook(db);

	app.route('/')
		.get(function(req, res){
			// res.sendFile(process.cwd() + '/public/html/index.html');
			res.send("Do the api thing!");
		});

	app.route('/api/search/:query')
		.get(logbook.search);

	app.route('/api/history')
		.get(logbook.showHistory);
};
