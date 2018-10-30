var express = require("express");
var htmlRoutes = require('./routing/htmlRoutes');

var apiRoutes = require('./routing/apiRoute');



var app = express();
var PORT = 3000;

app.use(express.json());
app.use(express.static('public'))






app.use('/', htmlRoutes);

app.use('/api', apiRoutes);




app.listen(PORT, function(){
  console.log("Listening on port + " + PORT);
});