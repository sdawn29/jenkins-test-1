var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello Mars!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8082); //the server object listens on port 8080
