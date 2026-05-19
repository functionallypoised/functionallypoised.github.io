// check J S link and is running
console.log("JS IS RUNNING");
// connect html element to divisioned id tag,
// 
// for js to select as a constrained variable
// asks connection to load source {the media file},
// & text indicate messages to User

const musicPlayer = document.querySelector("#music-player");
const msg = document.querySelector("#msg");

// functions to connect divisioned 
// track numbers to each variable of media content
//when User selects a track number, 
// Js selects its respective media source,
//  informs User which track id is playing from the playlist UI

function loadTrack(trackNumber) {

  if (trackNumber === 1) {
    musicPlayer.src =
      "A-V_media_RMIT-IntMed/1_p-hase_Hes.mp3";

    msg.textContent = "Now playing: Hes";
  }

  else if (trackNumber === 2) {
    musicPlayer.src =
      "A-V_media_RMIT-IntMed/2_p-hase_Dry-Down-feat-Ben-Snaath.mp3";

    msg.textContent = "Now playing: Dry Down";
  }

  else if (trackNumber === 3) {
    musicPlayer.src =
      "A-V_media_RMIT-IntMed/3_p-hase_Leapt.mp3";

    msg.textContent = "Now playing: Leapt";
  }

  else if (trackNumber === 4) {
    musicPlayer.src =
      "A-V_media_RMIT-IntMed/4_p-hase_Water-Feature.mp3";

    msg.textContent = "Now playing: Water Feature";
  }

  musicPlayer.play();
}

// for User to play all tracks at once (for avantGard fun )

const allTracks = [
  "A-V_media_RMIT-IntMed/1_p-hase_Hes.mp3",
  "A-V_media_RMIT-IntMed/2_p-hase_Dry-Down-feat-Ben-Snaath.mp3",
  "A-V_media_RMIT-IntMed/3_p-hase_Leapt.mp3",
  "A-V_media_RMIT-IntMed/4_p-hase_Water-Feature.mp3",
];

const layeredPlayers = [];

function playAllTracks() {
  layeredPlayers.length = 0;

  allTracks.forEach(function (trackPath) {
    const audio = new Audio(trackPath);
    audio.play();
    layeredPlayers.push(audio);
  });

  msg.textContent = "All tracks are playing together";
}

// function to pause medias playing
// informs User via text content 

function pauseTrack() {
  musicPlayer.pause();

  layeredPlayers.forEach(function (audio) {
    audio.pause();
  });

  msg.textContent = "Playback paused";
}


// the below was for for basic learning:
//whilst it was good to know, and simple; 
// I've chosen to have a container of
// divisions with numbered track id's to speak
// to JS

// connect html element to id tag,
// //  to asks connection to load source {the media file},
// //  for js to select as a variable
// // to control from button
// const airportAudio = document.querySelector("#airport-audio");
// const starVideo = document.querySelector("#star-video");
// const playButton = document.querySelector("#play-button");
// const pauseButton = document.querySelector("#pause-button");


// // [command]Button.addEventListener("click", [command]);
// // is the the control/connect of the button/function 
// // in order for the User to control the media content function
// // within browser interface: each arranged command listens for event/click
// // to then connect each respective function.
// playButton.addEventListener("click", playAudio);
// pauseButton.addEventListener("click", pauseAudio);


// each 
// function [command]Audio (); 
// [command].play(); 
// msg.textContent = "text for User"
// below is aforementioned function,
//  alongside textContent to inform User on interface

// function playAudio() {
//   airportAudio.play();
//   msg.textContent = "airport is playing";
// }
