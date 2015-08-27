// Source: howtonode.org/hello-node
var http = require('http');
var server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello World");
});
server.listen(8000);

console.log("Server is running on port 8000");