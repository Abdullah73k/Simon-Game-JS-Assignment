import { nameInput, ageInput, colorInput } from "./userInput";

let green = document.getElementById("green");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");

let help = document.getElementById("help");
let modal = document.getElementById("modal");
let close = document.getElementById("close-modal");

let gameMessage = document.getElementById("game-state-text");

// global variables
let sequence = [];
let isPlaying = false;
let platerSequence = [];
let playerWent = false;
let round = 1;

// displays the 'help' section
help.onclick = () => {
	modal.style.display = "flex";
};

// hides the 'help' section
close.onclick = () => {
	modal.style.display = "none";
};

// generates a random color to click
function randomColor() {
	const colors = ["green", "red", "yellow", "blue"];
	let randomInt = Math.floor(Math.random() * colors.length);
	let randColor = colors[randomInt];
	sequence.push(randColor);
}

// plays the random sequence created
function playSequence() {
	const redAudio = new Audio("red.ogg");
	const blueAudio = new Audio("blue.way");
	const yellowAudio = new Audio("yellow.way");
	const greenAudio = new Audio("green.way");

	if (playerWent) { // only plays if player went
		for (let btn of sequence) {
			switch (btn) { // checks which color to click
				case "red":
					redAudio.play();
					break;
				case "blue":
					blueAudio.play();
					break;
				case "green":
					greenAudio.play();
					break;
				case "yellow":
					yellowAudio.play();
					break;
			}
		}
	}
}

// gets the player input
function playerInput() {
    red.onclick = () => {
        playerSequence.push('red');
    }
    blue.onclick = () => {
        playerSequence.push('blue');
    }
    yellow.onclick = () => {
        playerSequence.push('yellow');
    }
    green.onclick = () => {
        playerSequence.push('green');
    }
}

function checkPlayersSequence() {
    if (playerWent) {
        if (JSON.stringify(sequence) !== JSON.stringify(playSequence)) {
            gameMessage.textContent = `You lost on round ${round}, click anywhere to play again!`;
        }
    }
}

// contains all of the other functions for the final game algorithm
function gameAlgorithm() {
	while (!isPlaying) {}
}

// start game
window.onclick = () => {
	console.log("clicked");
};
