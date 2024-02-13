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

    // Function to check user's answer
    function checkAnswer(currentLevel) {
        if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
            console.log("success");
            if (userClickedPattern.length === gamePattern.length) {
                setTimeout(function() {
                    nextSequence();
                    userClickedPattern = [];
                }, 1000);
            }
        } else {
            console.log("wrong");
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function() {
                $("body").removeClass("game-over");
            }, 200);
            $("#level-title").text("Game Over, Press Any Key to Restart");
            startOver();
        }
    }

    function startOver() {
        level = 0;
        gamePattern = [];
        started = false;
    }

    // Function to start the game
    $(document).keypress(function () {
        if (!started) {
            $('#level-title').text('Level ' + level);
            nextSequence();
            started = true;
        }
    });

    // Attach click event handler to buttons
    $('.btn').click(function() {
        var userChosenColour = $(this).attr('id');
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length - 1);
    });

    // Initialize game sequence
  

});
