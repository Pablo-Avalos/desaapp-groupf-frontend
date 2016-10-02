var gzippo = require('gzippo');
  var express = require('express');
  var app = express();
 
  app.use(express.logger('dev'));
  app.use(gzippo.staticGzip("" + __dirname + "/dist"));
  app.listen(process.env.PORT || 5000);
  
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
