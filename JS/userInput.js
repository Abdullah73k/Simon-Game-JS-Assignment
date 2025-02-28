/*
Name: Abdullah Khamis
Date: February 13, 2025
Purpose: This file handles the user input logic for when they first visit the site.
*/

// Get references to form elements
let firstName = document.getElementById("fName");
let userAge = document.getElementById("age");
let favoriteColor = document.getElementById("favoriteColor");
let form = document.getElementById("form");

/**
 * Handles form submission, stores user input in local storage, and redirects to the main menu.
 *
 * @param {Event} event - The submit event from the form.
 */
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  
  const nameInput = firstName.value;
  const ageInput = userAge.value;
  const colorInput = favoriteColor.value;
  
  console.log(nameInput, ageInput, colorInput);
  
  // Store user input in local storage
  localStorage.setItem("nameInput", nameInput);
  localStorage.setItem("ageInput", ageInput);
  localStorage.setItem("colorInput", colorInput);
  
  // Redirect to the main menu
  window.location.assign("../mainMenu.html");
});