var express = require('express'),
	app = express();

app.get('/', function (req, res) {
	res.send("Hello you!");
});

app.get('*', function (req, res) {
	res.send("Page not found!", 404);
});

app.listen(8080);
console.log("Start on 8080");