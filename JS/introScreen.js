/*
Name: Abdullah Khamis
Date: February 4, 2025
Purpose: Handles the button click and redirection to the game from the intro screen.
*/

// Get reference to the start button
let startButton = document.getElementById("start-button");

/**
 * Redirects the user to the game page when the start button is clicked.
 */
startButton.onclick = () => {
	window.location.assign("./game.html");
};
