const input = document.querySelector('#inputGuess');
const button = document.querySelector('.button');
const pGuess = document.querySelector('.prevGuess');
const remMoves = document.querySelector('.remMoves');
const loh = document.querySelector('.lowOrHigh');
const newButton = document.querySelector('#newButton');

const randomNumber = parseInt((Math.random() * 100) + 1);

let numMoves = 1;
let playGame = true;
let prevGuess = [];

button.addEventListener('click', function (e) {
    e.preventDefault();
    const inputField = input.value;
    validate(inputField);
});

function validate(inputField) {
    if (isNaN(inputField) || inputField > 100 || inputField < 1) {
        alert('Please enter a valid number !');
        input.value = '';
    }
    else {
        if (remMoves.innerHTML > 0) {
            prevGuess.push(inputField);
            input.value = '';
            numMoves++;
            pGuess.innerHTML += `${inputField}, `;
            remMoves.innerHTML = `${6 - numMoves} `;
            check(inputField);
        }
        else {
            input.value = '';
            loh.innerHTML = `GameOver! Random Number is ${randomNumber} `;
            endGame();
        }

    }
}

function check(inputField) {
    if (randomNumber == inputField) {
        loh.innerHTML = "Hurray ! You Guessed it correctly";
        endGame();
    }
    else if (inputField > randomNumber) {
        loh.innerHTML = "Number is TOOO high";
    }
    else {
        loh.innerHTML = "Number is TOOO low";
    }
}

function endGame() {
    playGame = false;
    button.setAttribute('disabled', '');
    newButton.style.display = 'inline';
    newButton.addEventListener('click', function (e) {
        e.preventDefault();
        newGame();
    })

}

function newGame() {
    playGame = true;
    pGuess.innerHTML = '';
    numMoves = 1;
    remMoves.innerHTML = `${6 - numMoves} `;
    button.removeAttribute('disabled');
    newButton.style.display = 'none';
    loh.innerHTML = "";


}