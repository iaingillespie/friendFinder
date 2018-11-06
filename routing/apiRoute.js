var express = require("express");
var router = express.Router();

var friends = require("../data/friends");

router.get('/friends', function(req, res){

    res.send(friends)

});

router.post('/friends', function(req, res) {
    var newFriend = req.body;
    console.log(newFriend, " ------ new friend --------")
    var lowestTotalDifference = null;
    var bestMatch = null;
    for( var i = 0; i < friends.length; i++ ) {
        var currentFriend = friends[i];
        var currentFriendScores = currentFriend.scores;
        var totalDifference = 0;
        for( var j = 0; j < currentFriendScores.length; j++){
                console.log(newFriend['scores[]']);
                var difference = currentFriendScores[j] - newFriend['scores[]'][j];
                totalDifference += Math.abs(difference);
        }
        if (totalDifference < lowestTotalDifference || lowestTotalDifference === null){
            lowestTotalDifference = totalDifference
            bestMatch = currentFriend
        }
    }
 
    res.send(bestMatch);
});


module.exports = router;