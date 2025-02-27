/*
Name: Abdullah Khamis
Date: feb, 13, 2025
Purpose: This file handles the user input logic for when they first visit the site
*/


// userInput.js
let fName = document.getElementById("fName");
let age = document.getElementById("age");
let favColor = document.getElementById("favoriteColor");
let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = fName.value;
  const ageInput = age.value;
  const colorInput = favColor.value;
  console.log(nameInput, ageInput, colorInput);
  
  localStorage.setItem("nameInput", nameInput);
  localStorage.setItem("ageInput", ageInput);
  localStorage.setItem("colorInput", colorInput);
  
  // Redirect to main menu
  window.location.assign("../mainMenu.html");
});
