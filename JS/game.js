/*
Name: Abdullah Khamis
Date: feb, 4, 2025
Purpose: This file contains the game logic
*/

// Retrieve the favorite color from localStorage
const savedColor = localStorage.getItem("colorInput");

// Apply users favorite color
if (savedColor) {
	document.body.style.backgroundColor = savedColor.toLowerCase();
}

// Select elements
let green = document.getElementById("green");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");
let help = document.getElementById("help");
let modal = document.getElementById("modal");
let Close = document.getElementById("close-modal");
let gameMessage = document.getElementById("game-state-text");

// Global variables
let sequence = [];
let playerSequence = [];
let round = 0;
let gameStarted = false;

// Sounds
let sounds = {
	red: new Audio("../Audio/red.ogg"),
	blue: new Audio("../Audio/blue.wav"),
	green: new Audio("../Audio/green.wav"),
	yellow: new Audio("../Audio/yellow.wav"),
};

// Help section logic
help.addEventListener("click", () => (modal.style.display = "flex"));
Close.addEventListener("click", () => (modal.style.display = "none"));

// Generates a new random color and adds it to the sequence
function addRandomColor() {
	const colors = ["green", "red", "yellow", "blue"];
	let randColor = colors[Math.floor(Math.random() * colors.length)];
	sequence.push(randColor);
}

// Plays the entire sequence (with delays)
function playSequence() {
	let delay = 0;
	playerSequence = []; // Reset player input

	sequence.forEach((color, index) => {
		setTimeout(() => {
			let button = document.getElementById(color);
			sounds[color].play();
			button.classList.add("active");

			setTimeout(() => button.classList.remove("active"), 500);
		}, delay);

		delay += 1000;
	});

	// After playing the sequence, allow the player to input
	setTimeout(() => {
		gameMessage.textContent = "Your turn!";
	}, delay);
}

// Handles player input
function playerInput(color) {
	if (!gameStarted) return;
	let button = document.getElementById(color);
	button.classList.add("active");
	sounds[color].play();
	setTimeout(() => button.classList.remove("active"), 200);

	playerSequence.push(color);
	checkPlayersSequence();
}

// Check if the player's sequence is correct
function checkPlayersSequence() {
	let gameOverAudio = new Audio("../Audio/gameOver1.mp3");
	let currentIndex = playerSequence.length - 1;

	if (playerSequence[currentIndex] !== sequence[currentIndex]) {
		gameMessage.textContent = `Game Over! You reached round ${round}. Press any key to play again.`;
		gameOverAudio.play();
		gameStarted = false;
		return;
	}

	// If the player finished the sequence correctly, start next round
	if (playerSequence.length === sequence.length) {
		round++;
		setTimeout(() => (gameMessage.textContent = `Round ${round}`), 1000);

		setTimeout(() => {
			nextRound();
		}, 2000);
	}
}

// Starts the next round
function nextRound() {
	if (!gameStarted) return;

	addRandomColor();
	playSequence();
}

// Starts the game when a key is pressed
window.onkeydown = () => {
	if (!gameStarted) {
		gameStarted = true;
		sequence = [];
		playerSequence = [];
		round = 1;
		gameMessage.textContent = `Round ${round}`;
		setTimeout(() => {
			nextRound();
		}, 1000);
	}
};

// Listen for player clicks
red.addEventListener("click", () => playerInput("red"));
blue.addEventListener("click", () => playerInput("blue"));
yellow.addEventListener("click", () => playerInput("yellow"));
green.addEventListener("click", () => playerInput("green"));
