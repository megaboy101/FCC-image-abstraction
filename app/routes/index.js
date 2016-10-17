var Logbook = require(process.cwd() + '/app/controllers/logbook.server.js');

module.exports = function(app, db){
	var logbook = new Logbook(db);

	app.route('/')
		.get(function(req, res){
			res.sendFile(process.cwd() + '/public/html/index.html');
		});

	app.route('/api/clicks')
		.get(logbook)
		.post(logbook)
		.delete(logbook);
};
