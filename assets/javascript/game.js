// declare variables to hold game information
var winCount = 0;
var loseCount = 0;
var guessesLeft = 10;
var guessList = "";

var userGuess = "";
var answer = "";

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// generate a random letter from letters array for initial answer
answer = letters[Math.floor(Math.random() * letters.length)];
console.log("initial answer: " + answer);

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    userGuess = event.key.toUpperCase(); // convert to uppercase

    // perform action only if userGuess is a letter
    if (userGuess === letters[i]) {
        
    // -----UPDATE THIS-----------^    

        // determine if user has won - update counts for guesses and wins or losses
        if (userGuess === answer) {
            winCount++; // increase win count
            answer = letters[Math.floor(Math.random() * letters.length)]; // generate new random answer
            console.log("answer after win: " + answer);
            resetGuess;
            update;
        } else {
            if (guessesLeft === 0) { // if no more guesses allowed
                loseCount++; // increase losses
                resetGuess;
                update;
            } else { // if there are guesses left
                $("#guess-list").append(userGuess); // update list of guesses
                // ------ FIX THIS --------------^
                guessesLeft--;
                update;
            }
            
        }

        // function update score and guesses
        var update = function () {
        $("#win-count").text("Wins: " + winCount);
        $("#lose-count").text("Losses: " + loseCount);
        $("#guess-left").text("Guesses Left: " + guessesLeft);
        $("#guess-list").text("Guesses so far: " + guessList);
        }

        // function to reset guesses left and guesses so far
        var resetGuess = function () {
            guessesLeft = 10;
            guessList = "";
        }
    }
}