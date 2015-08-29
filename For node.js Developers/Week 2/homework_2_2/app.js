var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function (err, db) {
	if(err) throw err;

	var query = { 'Temperature' : {'$gt' : 36} };
	
	db.collection('data').find(query, function (err, data) {
		if(err) throw err;

		console.log("Here is the data " + JSON.parse(data));
	});
});