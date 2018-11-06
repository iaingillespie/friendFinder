var express = require('express');
var router = express.Router();
var path = require('path');




router.get('/', function(req, res){
    console.log("route hit!")
    res.sendFile(path.join(__dirname, "../home.html" ));
});

router.get('/survey', function(req, res){
    
    res.sendFile(path.join(__dirname, "../survey.html"));
    
});


module.exports = router;