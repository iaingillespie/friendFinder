var express = require("express");
var router = express.Router();

var friends = require("../data/friends");

router.get('/friends', function(req, res){

    res.send('friends')

});

router.post('/friends', function(req, res) {
    var newFriend = req.body;
    friends.push(newFriend);
    res.send(friends);
});


module.exports = router;