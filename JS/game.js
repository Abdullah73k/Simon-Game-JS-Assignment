let green = document.getElementById("green");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");

let help = document.getElementById("help");
let modal = document.getElementById("modal");
let Close = document.getElementById("close-modal");

let gameMessage = document.getElementById("game-state-text");

// global variables
let sequence = [];
let playerSequence = [];
let playerTurn = false;
let round = 0;
let gameStarted = false;
let i = 0;

// displays the 'help' section
help.onclick = () => {
	modal.style.display = "flex";
};

// hides the 'help' section
Close.onclick = () => {
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
	playerSequence.length = 0;
}

// gets the player input
function playerInput(color) {
	playerSequence.push(color);
	checkPlayersSequence();
}

// check his current attempt to what is stored in the sequence
function checkPlayersSequence() {
	if (sequence[i] !== playerSequence[i]) {
		gameMessage.textContent = `You lost on round ${round}, click any key to play again!`;
		gameStarted = false;
	}
	i++;
}


function startGame() {
	if (gameStarted) {
		while (playerTurn == false) {
			randomColor();
			playSequence();
		}
		red.onclick = () => {
			playerInput("red");
		};
		blue.onclick = () => {
			playerInput("blue");
		};
		yellow.onclick = () => {
			playerInput("yellow");
		};
		green.onclick = () => {
			playerInput("green");
		};
	}
}

// start game
window.onkeydown = () => {
	console.log("clicked");
	gameStarted = true;
	startGame();
// 	setInterval(() => {
// 	console.log(sequence, playerSequence)
// }, 1000);
};

