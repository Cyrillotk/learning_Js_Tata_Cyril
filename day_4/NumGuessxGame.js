let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = document.querySelector('#guesses');
let remaining = document.querySelector('#remaining');
let lowOrHigh = document.querySelector('#lowOrHigh');
let result = document.querySelector('#result');
let guessNum = document.querySelector('#guessNum');
let submitGuess = document.querySelector('#submitGuess');

let prevGuesses = [];
let numGuesses = 1;
let maxGuesses = 10;
let gameEnded = false;

function checkGuess() {
    if (gameEnded) return; // Prevent further guesses after the game ends

    let userGuess = Number(guessNum.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert('Please enter a valid number between 1 and 100.');
        guessNum.value = ''; // Clear the invalid input
        return;
    }

    if (numGuesses === 1) {
        guesses.textContent += ' '; // Initialize the list with a space
    }

    guesses.textContent += userGuess + ' ';
    prevGuesses.push(userGuess);  // Store the guess

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

    guessNum.value = ''; // Clear the input field
    numGuesses++;
    guessNum.focus(); // Return focus to the input field
}

function displayMessage(message) {
    result.textContent = message;
}

function endGame() {
    gameEnded = true;
    guessNum.disabled = true;
    submitGuess.disabled = true;

    // Add a reset button
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

    guessNum.disabled = false;
    submitGuess.disabled = false;
    guessNum.value = '';
    guessNum.focus();

    guesses.textContent = 'Previous Guesses: ';
    remaining.textContent = Remaining_Guesses ( maxGuesses );
    lowOrHigh.textContent = '';
    result.textContent = '';

    const resetButton = document.querySelector('#resetButton');
    if (resetButton) {
        resetButton.parentNode.removeChild(resetButton); // Remove the reset button
    }
}

submitGuess.addEventListener('click', checkGuess);
guessNum.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        checkGuess();
        event.preventDefault();
    }
});

guessNum.focus();