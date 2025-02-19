let green = document.getElementById("green");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");

let help = document.getElementById("help");
let modal = document.getElementById("modal");
let close = document.getElementById("close-modal");

help.onclick = () => {
    modal.style.display = "flex";
}

close.onclick = () => {
    modal.style.display = "none";
}


function gameAlgorithm() {
    let colors = ["green", "red", "yellow", "blue"];
    let randomInt = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomInt];

    
    let isPlaying = false;

    while(!isPlaying) {

    }


}

window.onclick = () => {
    console.log("clicked");
}