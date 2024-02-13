$(document).ready(function() {
    var buttonColours = ["red", "blue", "green", "yellow"];
    var gamePattern = [];
    var userClickedPattern = [];

    function playSound(name) {
        var audio = new Audio ('sounds/' + name + '.mp3');
        audio.play();
    }

    function nextSequence() {
        var btnLength = buttonColours.length;
        var randomNumber = Math.floor(Math.random() * btnLength);
        var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);

        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);  
    } 


    nextSequence();

    function animatePress(currentColour) {
        $("#" + currentColour).addClass("pressed");

       setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
       },100);
    }



    // Attach click event handler to buttons
    $('.btn').click(function() {
        // Get the id of the clicked element
        var userChosenColour = $(this).attr('id');
        // Add the id to the userClickedPattern array
        userClickedPattern.push(userChosenColour);
        // Play sound corresponding to the clicked button
        playSound(userChosenColour);
        // Log userClickedPattern for debugging
        console.log(userClickedPattern);
    });
});
