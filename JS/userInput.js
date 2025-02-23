let fName = document.getElementById("fName");
let age = document.getElementById("age");
let favColor = document.getElementById("favoriteColor");
let button = document.getElementById("inputSubmission");
let form = document.getElementById("form");

let nameInput;
let ageInput;
let colorInput;

form.addEventListener("submit", (event) => {
	event.preventDefault();
	nameInput = fName.value;
    console.log(nameInput)

	ageInput = age.value;
    console.log(ageInput)

	colorInput = favColor.value;
    console.log(colorInput)

	window.location.assign("../mainMenu.html")
});

export default {nameInput, ageInput, colorInput}
