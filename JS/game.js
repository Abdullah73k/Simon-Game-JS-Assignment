/*
Name: Abdullah Khamis
Date: February 4, 2025
Purpose: This file contains the game logic for the Simon game.
*/

// Retrieve the favorite color from localStorage
const savedColor = localStorage.getItem("colorInput");

// Apply user's favorite color to the background
document.body.style.backgroundColor = savedColor.toLowerCase();

// Select DOM elements
let green = document.getElementById("green");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");
let help = document.getElementById("help");
let modal = document.getElementById("modal");
let closeButton = document.getElementById("close-modal");
let gameMessage = document.getElementById("game-state-text");

// Global game state variables
let sequence = [];
let playerSequence = [];
let round = 0;
let gameStarted = false;
let isPlayingSequence = false;

// Sound objects for each color button
let sounds = {
	red: new Audio("../Audio/red.ogg"),
	blue: new Audio("../Audio/blue.wav"),
	green: new Audio("../Audio/green.wav"),
	yellow: new Audio("../Audio/yellow.wav"),
};

// Event listeners for the help modal
help.addEventListener("click", () => {
	modal.style.display = "flex";
});
closeButton.addEventListener("click", () => {
	modal.style.display = "none";
});

/**
 * Generates a new random color and adds it to the game sequence.
 */
function addRandomColor() {
	const colors = ["green", "red", "yellow", "blue"];
	let randColor = colors[Math.floor(Math.random() * colors.length)];
	sequence.push(randColor);
}

/**
 * Plays the entire sequence of colors with visual and audio cues.
 * Resets the player's input and enables input after the sequence is played.
 */
function playSequence() {
	let delay = 0;
	playerSequence = []; // Reset player input array
	isPlayingSequence = true; // Disable player input during sequence playback

	sequence.forEach((color) => {
		setTimeout(() => {
			let button = document.getElementById(color);
			sounds[color].play();
			button.classList.add("active");

			setTimeout(() => {
				button.classList.remove("active");
			}, 500);
		}, delay);

		delay += 1000;
	});

	// After playing the sequence, allow player input
	setTimeout(() => {
		gameMessage.textContent = "Your turn!";
		isPlayingSequence = false;
	}, delay);
}

/**
 * Handles player's button input.
 * Triggers visual and audio feedback and checks if the sequence is correct.
 *
 * @param {string} color - The color of the button pressed.
 */
function playerInput(color) {
	// Ignore input if game hasn't started or sequence is playing
	if (!gameStarted || isPlayingSequence) return;

	let button = document.getElementById(color);
	button.classList.add("active");
	sounds[color].play();
	setTimeout(() => {
		button.classList.remove("active");
	}, 200);

	playerSequence.push(color);
	checkPlayersSequence();
}

/**
 * Checks if the player's sequence matches the game sequence.
 * If the input is incorrect, ends the game.
 * If correct and complete, initiates the next round.
 */
function checkPlayersSequence() {
	let gameOverAudio = new Audio("../Audio/gameOver1.mp3");
	let currentIndex = playerSequence.length - 1;

	// If player's input doesn't match the sequence
	if (playerSequence[currentIndex] !== sequence[currentIndex]) {
		gameMessage.textContent = `Game Over! You reached round ${round}. Press any key to play again.`;
		gameOverAudio.play();
		gameStarted = false;
		return;
	}

	// If the player has completed the sequence correctly, start next round
	if (playerSequence.length === sequence.length) {
		round++;
		setTimeout(() => {
			gameMessage.textContent = `Round ${round}`;
		}, 1000);

		setTimeout(() => {
			nextRound();
		}, 2000);
	}
}

/**
 * Initiates the next round of the game by adding a new color to the sequence and playing it.
 */
function nextRound() {
	if (!gameStarted) return;
	addRandomColor();
	playSequence();
}

/**
 * Starts the game when any key is pressed.
 * Resets game variables and begins the first round.
 */
window.addEventListener("keydown", () => {
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
});


// Event listeners for player's color button clicks
red.addEventListener("click", () => playerInput("red"));
blue.addEventListener("click", () => playerInput("blue"));
yellow.addEventListener("click", () => playerInput("yellow"));
green.addEventListener("click", () => playerInput("green"));
