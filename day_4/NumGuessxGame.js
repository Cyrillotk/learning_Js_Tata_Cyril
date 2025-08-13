let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = document.querySelector('#guesses');
let remaining = document.querySelector('#remaining');
let lowOrHigh = document.querySelector('#lowOrHigh');
let result = document.querySelector('#result');
let guessField = document.querySelector('#guessField');
let submitGuess = document.querySelector('#submitGuess');

let prevGuesses = [];
let numGuesses = 1;
let maxGuesses = 10;
let gameEnded = false;

function checkGuess() {
    if (gameEnded) return;

    let userGuess = Number(guessField.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert('Please enter a valid number between 1 and 100.');
        guessField.value = ''; 
        return;
    }

    if (numGuesses === 1) {
        guesses.textContent += ' '; 
    }

    guesses.textContent += userGuess + ' ';
    prevGuesses.push(userGuess);  

    if (userGuess === randomNumber) {
        displayMessage("Congratulations! You guessed it in ${ numGuesses } tries!");
        endGame();
    } else if (numGuesses === maxGuesses) {
        displayMessage("You ran out of guesses.The number was ${ randomNumber }.");
        endGame();
    } else {
        if (userGuess < randomNumber) {
            lowOrHigh.textContent = 'Too low!';
        } else {
            lowOrHigh.textContent = 'Too high!';
        }
        remaining.textContent = Remaining_Guesses(maxGuesses - numGuesses);
    }

    guessField.value = ''; 
    numGuesses++;
    guessField.focus(); 
}

function displayMessage(message) {
    result.textContent = message;
}

function endGame() {
    gameEnded = true;
    guessField.disabled = true;
    submitGuess.disabled = true;

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    resetButton.id = 'resetButton';
    document.querySelector('.result-area').appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuesses = [];
    numGuesses = 1;
    gameEnded = false;

    guessField.disabled = false;
    submitGuess.disabled = false;
    guessField.value = '';
    guessField.focus();

    guesses.textContent = 'Previous Guesses: ';
    remaining.textContent = Remaining_Guesses($maxGuesses);
    lowOrHigh.textContent = '';
    result.textContent = '';

    const resetButton = document.querySelector('#resetButton');
    if (resetButton) {
        resetButton.parentNode.removeChild(resetButton); 
    }
}

submitGuess.addEventListener('click', checkGuess);
guessField.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        checkGuess();
        event.preventDefault();
    }
});

guessField.focus();