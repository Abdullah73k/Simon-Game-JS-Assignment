let green = document.getElementById("green");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");

let help = document.getElementById("help");
let modal = document.getElementById("modal");
let close = document.getElementById("close-modal");

let gameMessage = document.getElementById("game-state-text");

// global variables
let sequence = ["blue", "green", "yellow", "red"];
let isPlaying = false;
let playerSequence = [];
let playerWent = true;
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
	const sounds = {
		red: new Audio("../Audio/red.ogg"),
		blue: new Audio("../Audio/blue.wav"),
		green: new Audio("../Audio/green.wav"),
		yellow: new Audio("../Audio/yellow.wav"),
	};

	if (playerWent) {
		let delay = 0;
		for (let btn of sequence) {
			let button = document.getElementById(btn);
			setTimeout(() => {
				sounds[btn].play();
				button.classList.add("active");
			}, delay);
			delay += 1000;
			button.classList.remove("active");
		}
		playerWent = false;
	}
}

// gets the player input
function playerInput() {
	red.onclick = () => {
		playerSequence.push("red");
	};
	blue.onclick = () => {
		playerSequence.push("blue");
	};
	yellow.onclick = () => {
		playerSequence.push("yellow");
	};
	green.onclick = () => {
		playerSequence.push("green");
	};
}

function checkPlayersSequence() {
	if (playerWent) {
		if (JSON.stringify(sequence) !== JSON.stringify(playerSequence)) {
			gameMessage.textContent = `You lost on round ${round}, click anywhere to play again!`;
		}
	}
}

// contains all of the other functions for the final game algorithm
function gameAlgorithm() {
	while (!isPlaying) {}
}

// start game
window.onkeydown = () => {
	console.log("clicked");
	playSequence();
};
