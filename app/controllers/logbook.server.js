var googleIms = require('google-ims');
var client = googleIms(process.env.CSE_ID, process.env.API_Key);

function logbook(db){
	// Database
	var history = db.collection('history');

	// Search a term and return results as a json object
	this.search = function(req, res){
		var query = req.params.query,
			 offset = req.query.offset;

		if (offset > 10){
			offset = 10;
		}

		client.search(query, {page: offset})
				.then(function(images){
					var current = new Date();
					history.insert({
						"search": query,
						"date": current
					});

					res.json(images);
				});
	};

	// Show search history as a json object
	this.showHistory = function(req, res){
		history.find({}, {"_id": 0}).toArray(function(err, docs){
			if (err) throw new Error("Couldn't query history");
			res.send(docs);
		});
	};
}

module.exports = logbook;
