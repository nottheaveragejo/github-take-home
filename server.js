var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

//add in all required routes
require('./routes/products.js')(app);

// make server to test routes
var server = app.listen(8082, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

})
