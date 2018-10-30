var express = require("express");
var htmlRoutes = require('./routing/htmlRoutes');

var apiRoutes = require('./routing/apiRoute');



var app = express();

app.use(express.json());
app.use(express.static('public'))






app.use('/', htmlRoutes);

app.use('/api', apiRoutes);




app.listen(3000, function(){
  console.log("Listening on port 3000");
});