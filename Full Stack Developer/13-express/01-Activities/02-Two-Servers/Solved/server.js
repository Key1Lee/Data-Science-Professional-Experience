// We require/import the HTTP module
const http = require("http");

// =====================================================================

// Then define the ports we want to listen to
const PORTONE = 7000;
const PORTTWO = 7500;

// =====================================================================

// We need two different functions to handle requests, one for each server.
function handleRequestOne(request, response) {
  response.end("You're a JavaScript mastermind!");
}

function handleRequestTwo(request, response) {
  response.end("JavaScript must not be your forte.");
}

// =====================================================================

// Create our servers
const serverOne = http.createServer(function(request,response){
  console.log(request.url);
  response.end("You're a JavaScript mastermind!");
});
const serverTwo = http.createServer(handleRequestTwo);


// =====================================================================

// Starting our servers
serverOne.listen(PORTONE, function() {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORTONE);
});

serverTwo.listen(PORTTWO, function() {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORTTWO);
});
