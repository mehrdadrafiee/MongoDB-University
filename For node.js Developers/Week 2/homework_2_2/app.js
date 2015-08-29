var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function (err, db) {
	"use strict";
	if(err) throw err;

	var query = { 'Temperature' : 0 };
	
	db.collection('data').findOne(function (err, doc) {
		if(err) throw err;

		if(!doc) {
			console.dir("No document found!");
			return db.close();
		}else{
			console.dir(doc);
		}

		return db.close();
	});
});