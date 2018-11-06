var express = require("express");
var bodyParser = require("body-parser");
var htmlRoutes = require('./routing/htmlRoutes');

var apiRoutes = require('./routing/apiRoute');

var path = require("path");



var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("public"));





app.use('/', htmlRoutes);

app.use('/api', apiRoutes);




app.listen(PORT, function(){
  console.log("Listening on port + " + PORT);
});