$(document).ready(function() {
   
console.log("linked");



$("#add-btn").on("click", function(event) {

    console.log("click!");
    var newUser = {
      'name:' : $("#user-name").val().trim(),
      'photo' : $("#photo").val().trim(),
      'scores' :[
        $("#q1").val().trim(),
        $("#q2").val().trim(),
        $("#q3").val().trim(),
        $("#q4").val().trim(),
        $("#q5").val().trim(),
        $("#q6").val().trim(),
        $("#q7").val().trim(),
        $("#q8").val().trim(),
        $("#q9").val().trim(),
        $("#q10").val().trim()
        ]

    };

    console.log(newUser, "New user object");

    $.post('/api/friends', newUser, function(response) {
        console.log(response);
        $('.modal-body').empty();
        $('.modal-body').html(" <h1> " + response.name+ "<h1><br><img src='"+response.photo + "'>")
    });

    $('#myModal').modal('show');






});




});





