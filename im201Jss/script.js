// connect html element to id tag,
//  to asks connection to load source {the media file},
//  for js to select as a variable
// to control from button
const airportAudio = document.querySelector("#airport-audio");
const starVideo = document.querySelector("#star-video");
const playButton = document.querySelector("#play-button");
const pauseButton = document.querySelector("#pause-button");
const popAudio = document.querySelector("#pop-audio");
const popButton = document.querySelector("#pop-button");
const msg = document.querySelector("#msg");

// [command]Button.addEventListener("click", [command]);
// is the the control/connect of the button/function 
// in order for the User to control the media content function
// within browser interface: each arranged command listens for event/click
// to then connect each respective function.
playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);
popButton.addEventListener("click", makeItPop);

// each 
// function [command]Audio (); 
// [command].play(); 
// msg.textContent = "text for User"
// below is aforementioned function,
//  alongside textContent to inform User on interface

function playAudio() {
  airportAudio.play();
  msg.textContent = "airport is playing";
}

function pauseAudio() {
  airportAudio.pause();
  msg.textContent = "airport is paused";
}

function makeItPop() {
  popAudio.play();
  msg.textContent = "popping...";
}
