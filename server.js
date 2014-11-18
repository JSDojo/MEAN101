// Defining our express and server instance
var express = require('express'),
    server  = express();

var port    = process.env.PORT || 3000;

// Defining the default route to dislpay views whenever the user lands on "host:port/"
server.use('/', express.static(__dirname+"/public/"));

server.listen(port, function(){
    console.log("Server up and running on : " + port);
});