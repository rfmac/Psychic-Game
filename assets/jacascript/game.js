var wins = document.getElementById('winsHolder');
var losses = document.getElementById('lossesHolder');
var numOfGuesses = document.getElementById('#guessHolder');
var randomChoice = Math.floor(Math.random()) * 26;

document.onkeyup = function()
{
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);

if (randomChoice == 0 && userGuess == "a")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 1 && userGuess == "b")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 2 && userGuess == "c")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 3 && userGuess == "d")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 4 && userGuess == "e")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 5 && userGuess == "f")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 6 && userGuess == "g")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 7 && userGuess == "h")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 8 && userGuess == "i")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 9 && userGuess == "j")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 10 && userGuess == "k")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 11 && userGuess == "l")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 12 && userGuess == "m")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 13 && userGuess == "n")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 14 && userGuess == "o")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 15 && userGuess == "p")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 16 && userGuess == "q")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 17 && userGuess == "r")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 18 && userGuess == "s")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 19 && userGuess == "t")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 20 && userGuess == "u")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 21 && userGuess == "v")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 22 && userGuess == "w")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 23 && userGuess == "x")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 24 && userGuess == "y")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else if (randomChoice == 25 && userGuess == "z")
{
    wins++;
    randomChoice = Math.floor(Math.random()) * 26;
    numOfGuesses = 9;
}

else
    numOfGuesses--;

if (numOfGuesses == 0)
{
    losses++;
    numOfGuesses = 9;
    randomChoice = Math.floor(Math.random()) * 26;
}

var html = "<p>Guess a letter.</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Ties: " + ties + "</p>";

    document.querySelector('#game').innerHTML = html;
}