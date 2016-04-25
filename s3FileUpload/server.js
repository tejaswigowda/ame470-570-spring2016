var fs = require('fs');
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./credentials.json');
var s3 = new AWS.S3();

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

app.post('/uploadFile', function(req, res){
        var intname = req.body.fileInput;
        var filename = req.files.input.name;
        var fileType =  req.files.input.type;
        var tmpPath = req.files.input.path;
        var s3Path = '/' + intname;
        
        fs.readFile(tmpPath, function (err, data) {
            var params = {
                Bucket:'alldone',
                ACL:'public-read',
                Key:intname,
                Body: data,
                ServerSideEncryption : 'AES256'
            };
            s3.putObject(params, function(err, data) {
                console.log(err);
                res.end("success");
            });
        });
  });

app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);
