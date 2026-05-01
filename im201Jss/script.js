//first get access to the audito element so we can control it from here

const aiportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

// let us access video too
const starVideo = document.querySelector("#star-video");
console.log(starVideo);

//similarly access the play button
const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAudio);

function playAudio() {
  airportAudio.play();
  msg.textContent = "airport is playing";
}

//similarly access the pause button
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAudio);

function pauseAudio() {
  airportAudio.play();
  msg.textContent = "airport is paused";
}

//similarly access the pop button
const popAudio = document.querySelector("#pop-audio");
console.log(popAudio);
const popButton = document.querySelector("#pop-button");
console.log(popButton);

popButton.addEventListener("click", makeItPop);

function popAudio() {
  popSound.play();
  msg.textContent = "popping...";
}
