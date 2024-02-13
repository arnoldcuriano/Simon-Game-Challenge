$(document).ready(function() {
    // Define variables
    var buttonColours = ["red", "blue", "green", "yellow"];
    var gamePattern = [];
    var userClickedPattern = [];
    var started = false;
    var level = 0;

    // Function to play sound
    function playSound(name) {
        var audio = new Audio('sounds/' + name + '.mp3');
        audio.play();
    }

    // Function to generate next sequence
    function nextSequence() {
        level++;
        $('#level-title').text('Level ' + level);
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


    function checkAnswer(currentLevel) {
        if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
            console.log("success");
        } else {
            console.log("wrong");
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function () {
            $("body").removeClass("game-over");
            },200);
            $("#level-title").text("GameOver,  Press anykey to Restart");
        }
    }

    // Function to start the game
    $("document").keypress(function () {
        if (!started) {
            $('#level-started').text('Level ' + level);
            nextSequence();
            started = true;
        }
    })


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
        checkAnswer(userClickedPattern.length - 1);
    });


        // Initialize game sequence
        nextSequence();

});
