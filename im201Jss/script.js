//first get access to the audito element so we can control it from here

const aiportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

//similarly access the play button
const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAudio);

function playAudio() {
  airportAudio.play();
  msg.textContent = "airport is playing";
}

//similarly access the play button
const playButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAudio);

function pauseAudio() {
  airportAudio.play();
  msg.textContent = "airport is paused";
}

//similarly access the pop button
const popSound = document.querySelector("#pop-audio");
const popButton = document.querySelector("#pop-button");
console.log(popButton);

popButton.addEventListener("click", popAudio);

function popAudio() {
  popSound.play();
  msg.textContent = "popping...";
}
