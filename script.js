$(document).ready(function() {
    // Define variables
    var buttonColours = ["red", "blue", "green", "yellow"];
    var gamePattern = [];
    var userClickedPattern = [];

    // Function to play sound
    function playSound(name) {
        var audio = new Audio('sounds/' + name + '.mp3');
        audio.play();
    }

    // Function to generate next sequence
    function nextSequence() {
        var randomNumber = Math.floor(Math.random() * buttonColours.length);
        var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);

        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);  
    }

    // Function to animate button press
    function animatePress(currentColour) {
        $("#" + currentColour).addClass("pressed");
        setTimeout(function() {
            $("#" + currentColour).removeClass("pressed");
        }, 100);
    }

    // Initialize game sequence
    nextSequence();

    // Attach click event handler to buttons
    $('.btn').click(function() {
        // Get the id of the clicked element
        var userChosenColour = $(this).attr('id');
        // Add the id to the userClickedPattern array
        userClickedPattern.push(userChosenColour);
        // Play sound corresponding to the clicked button
        playSound(userChosenColour);
        // Animate button press
        animatePress(userChosenColour);
        // Log userClickedPattern for debugging
        console.log(userClickedPattern);
    });
});
