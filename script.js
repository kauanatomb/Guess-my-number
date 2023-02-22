'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(`.message`).textContent = message;
};

const colorBackground = function (color) {
    document.querySelector(`body`).style.backgroundColor = color;
};

const widthStyle = function (size) {
    document.querySelector(`.number`).style.width = size;
};

const scoreValue = function (scoretotal) {
    document.querySelector(`.score`).textContent = scoretotal;
}

document.querySelector(`.check`).addEventListener(`click`, add)

function add() {
    const guess = Number(document.querySelector(`.guess`).value);

    //When there is no input
    if (!guess) {
        displayMessage(`❌ No Number!`);

        //When the player wins
    } else if (guess === secretNumber) {
        displayMessage(`Correct Number! 🎉`);
        document.querySelector(`.number`).textContent = secretNumber;

        colorBackground(`#60b347`);
        widthStyle(`30rem`);

        if (score > highscore) {
            highscore = score;
            document.querySelector(`.highscore`).textContent = highscore;
        }
        //when the guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? `Too high 📈` : `Too low 📉`);
            score--;
            scoreValue(score);
        } else {
            displayMessage(`You lost! 🙅🏽`)
            scoreValue(0);

            colorBackground(`#ff0000`);
            widthStyle(`30rem`);
        }
    }
};

//using the button again

document.querySelector(`.again`).addEventListener(`click`, start);

function start() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage(`Start guessing...`);
    scoreValue(score);
    colorBackground('#222');
    widthStyle(`15rem`);
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.guess`).value = ``;
}