/*
Name: Abdullah Khamis
Date: feb, 4, 2025
Purpose: handles the button click and redirection to game from the intro screen
*/

let startButton = document.getElementById("start-button");

startButton.onclick = () => {
	window.location.assign("../views/game.html");
};
