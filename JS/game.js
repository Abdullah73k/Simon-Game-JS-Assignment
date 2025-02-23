import {nameInput, ageInput, colorInput} from "./userInput";

let green = document.getElementById("green");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");

let help = document.getElementById("help");
let modal = document.getElementById("modal");
let close = document.getElementById("close-modal");

// global variables
let sequence = [];
let isPlaying = false;
let platerSequence = [];

help.onclick = () => {
	modal.style.display = "flex";
};

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
    const redAudio = new Audio('red.ogg');
    const blueAudio = new Audio('blue.way');
    const yellowAudio = new Audio('yellow.way');
    const greenAudio = new Audio('green.way');


}

// gets the player input
function playerInput() {

}

// contains all of the other functions for the final game algorithm
function gameAlgorithm() {
	

	while (!isPlaying) {
        
    }
}

window.onclick = () => {
	console.log("clicked");
};
