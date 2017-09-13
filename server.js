// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORTgood = 7000;
var PORTbad = 7500;

// Here we create a generic function to handle requests and responses
function handleRequestGood(request, response) {
  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("Something good about yourself");
}
// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var serverGood = http.createServer(handleRequestGood);
// Here we start our server so that it can begin listening to client requests.
serverGood.listen(PORTgood, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTgood);
});


function handleRequestBad(request, response) {
	response.end("Something bad");
}

var serverBad = http.createServer(handleRequestBad);

serverBad.listen(PORTbad, function() {
	console.log("Server listening on: http://localhost:%s", PORTbad);
});