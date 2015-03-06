var express = require("express");
var server  = express();

var port = 3000;

server.use("/", express.static(__dirname+"/public/"));

server.listen(port, function(){
    console.log("Running on port:" + port) ;
})