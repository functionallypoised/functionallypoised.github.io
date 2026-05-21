// check J S link and is running
console.log("JS IS RUNNING");
// connect html element to divisioned id tag,
//
// for js to select as a constant variable
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
    musicPlayer.src = "A-V_media_RMIT-IntMed/1_p-hase_Hes.mp3";

    msg.textContent = " ~: Hes sound [ON] :~ ";
  } else if (trackNumber === 2) {
    musicPlayer.src =
      "A-V_media_RMIT-IntMed/2_p-hase_Dry-Down-feat-Ben-Snaath.mp3";

    msg.textContent = " ~: Dry Down sound [ON] :~ ";
  } else if (trackNumber === 3) {
    musicPlayer.src = "A-V_media_RMIT-IntMed/3_p-hase_Leapt.mp3";

    msg.textContent = " ~: Leapt sound [ON] :~ ";
  } else if (trackNumber === 4) {
    musicPlayer.src = "A-V_media_RMIT-IntMed/4_p-hase_Water-Feature.mp3";

    msg.textContent = " ~: Water Feature sound [ON] :~ ";
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

// to store the audio objects UI:, sliders for each track to
//  isolate
//track volumes & simulate a synth sampling P-Hase album UI

const volume1 = document.querySelector("#volume-1");
const volume2 = document.querySelector("#volume-2");
const volume3 = document.querySelector("#volume-3");
const volume4 = document.querySelector("#volume-4");

const layeredPlayers = [];

function release() {
  layeredPlayers.length = 0;

  allTracks.forEach(function (trackPath, index) {
    const audio = new Audio(trackPath);

    if (index === 0) audio.volume = volume1.value;
    if (index === 1) audio.volume = volume2.value;
    if (index === 2) audio.volume = volume3.value;
    if (index === 3) audio.volume = volume4.value;

    audio.currentTime = Math.random() * 20;

    audio.play();

    layeredPlayers.push(audio);
  });

  msg.textContent =
    " ~:~ >> ~:~quadripital layers of P-hasing [ON]; do you hear this cloud?~:~ >> ~:~ ";
}

// functions that wait for User control on each track's
//  volume from the slider UI

volume1.addEventListener("input", function () {
  if (layeredPlayers[0]) layeredPlayers[0].volume = volume1.value;
});

volume2.addEventListener("input", function () {
  if (layeredPlayers[1]) layeredPlayers[1].volume = volume2.value;
});

volume3.addEventListener("input", function () {
  if (layeredPlayers[2]) layeredPlayers[2].volume = volume3.value;
});

volume4.addEventListener("input", function () {
  if (layeredPlayers[3]) layeredPlayers[3].volume = volume4.value;
});

// function to pause blended tracks as an artistic
// pause in the last play commands / session
// informs User via text content

function standby() {
  musicPlayer.pause();

  layeredPlayers.forEach(function (audio) {
    audio.pause();
  });

  msg.textContent = " ~:~ P-hasing layers [STANDBY] ~:~ ";
}

// function to stop and refresh blended tracks as an artistic
// stop in the last play commands / session
// informs User via text content

function reset() {
  musicPlayer.pause();
  musicPlayer.currentTime = 0;

  layeredPlayers.forEach(function (audio) {
    audio.pause();
    audio.currentTime = 0;
  });

  msg.textContent = " ~:~ P-hasing layers [OFF] ~:~ !! reset !! ~:~ ";
}

// function connecting with style as
// UX interaction;
// particle effect melt text input to drip down
//   page, function listens to target of User move mouse

const asciiPattern = [
  "  ⊹ ⊹ ⊹   ⊹ ⊹    ⊹ ⊹ ⊹",
  " ⊹      ⊹⊹    x  ⊹⊹     ⊹x",
  "⊹x       ⊹ x      x  ⊹     x⊹",
  "⊹      ⊹ x⊹    ⊹     ⊹     ⊹",
  " ⊹  ⊹  ⊹   ⊹ x ⊹ x ⊹  x ⊹",
  "    ꒦꒳꒦      ꒦꒳꒦    ꒦꒳꒦",
  "    ⊹          ⊹    ⊹ ⊹",
  "    ⊹            ⊹    ⊹",
  "      ⊹        ⊹        ⊹",
  "     ⊹          ⊹       ⊹",
  "    ⊹          ⊹         ⊹",
  "꒦꒳꒦꒦꒳꒦꒦꒳꒦꒦꒳꒦꒦꒳꒦꒦꒳꒦꒦꒳꒦꒦꒳꒦",
  "    ⊹          ⊹         ⊹",
  "     ⊹        ⊹       ⊹",
  "      ⊹      ⊹       ⊹",
  "        ⊹  ⊹         ⊹",
  "          ⊹           ⊹",
  "            ⊹       ⊹",
  "              ⊹   ⊹",
  "                 ⊹",
  "                  c͕͗ͤ̕̕l̙͖̑̾ͣo̯̱̊͊͢ư̡͕̭̇ḑ̴̞͛̒ p̞̈͑̚͞ḣ̖̻͛̓ā̤̓̍͘s̠҉͍͊ͅẹ̿͋̒̕s̠҉͍͊ͅ",
];

document.addEventListener("mousemove", function (event) {
  createAsciiParticlePattern(event.clientX, event.clientY);
});

function createAsciiParticlePattern(x, y) {
  asciiPattern.forEach(function (row, rowIndex) {
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      if (row[colIndex] !== " ") {
        const particle = document.createElement("div");

        particle.classList.add("ascii-particle");

        particle.style.left = x + colIndex * 5 + "px";
        particle.style.top = y + rowIndex * 5 + "px";

        document.body.appendChild(particle);

        setTimeout(function () {
          particle.remove();
        }, 2000);
      }
    }
  });
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
