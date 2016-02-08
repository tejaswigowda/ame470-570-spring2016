var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;

app.get("/", function (req, res) {
      res.redirect("/index.html");
});

app.get("/getRSSFeed", function (req, res) {
    var link = decodeURIComponent(req.query.link);
    readURL(link, function(data){
     res.send(data); // send response body
    });
});

function readURL(url, cb) {
  var data = "";
  var protocol = url.split("://")[0];
  var request = require(protocol).get(url, function(res) {

    res.on('data', function(chunk) {
      data += chunk;
    });

    res.on('end', function() {
      console.log(JSON.parse(data))
      cb(data);
    })
  });

  request.on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}

app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);
