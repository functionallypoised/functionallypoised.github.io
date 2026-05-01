//first get access to the audito element so we can control it from here

const popAudio = document.querySelector("#pop-audio");
console.log(popAudio);

//similarly access the play button
const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAudio);

function playAudio() {
  popAudio.play();
}
