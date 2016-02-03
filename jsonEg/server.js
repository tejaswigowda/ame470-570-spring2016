var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;

var objArray = [
  {
    id: 0,
    course: "AME470/570",
    startDate: "Jan 11, 2016",
    endDate:"May 4, 2016"
  },
  {
    id: 1,
    course: "AME370",
    startDate: "Jan 11, 2016",
    endDate:"May 4, 2016"
  },
  {
    id: 2,
    course: "AME270",
    startDate: "Jan 11, 2016",
    endDate:"May 4, 2016"
  }
];

var exObj = {
  course: "AME470/570",
  startDate: "Jan 11, 2016",
  endDate:"May 4, 2016"
};

app.get("/", function (req, res) {
      res.redirect("/index.html");
});

app.get("/getJSObj", function (req, res) {
     res.send(JSON.stringify(exObj))// send response body
});


app.get("/getJSObjFromArray", function (req, res) {
  var index = parseInt(req.query.id)
     res.send(JSON.stringify(objArray[index]))// send response body
});

app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);
