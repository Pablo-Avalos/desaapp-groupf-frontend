var gzippo = require('gzippo');
//  var express = require('express');
//  var app = express();
 
//  app.use(express.logger('dev'));
//  app.use(gzippo.staticGzip("" + __dirname + "/dist"));
//  app.listen(process.env.PORT || 5000);
  
//var bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({
//    extended: true
//}));
//app.use(bodyParser.json());


var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
 
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
