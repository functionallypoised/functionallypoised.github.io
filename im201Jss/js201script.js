// connect html element to divisioned id tag,
// for js to select as a constant variable
// asks connection to load source {the media file},
// links playback time tracking via buttons
//  indicate messages to User

const musicPlayer = document.querySelector("#music-player");
const msg = document.querySelector("#msg");

const trackButtons = document.querySelectorAll(".track-button");
const masterButtons = document.querySelectorAll(".master-button");

// function to deactivate buttons to indicate media not playing

function deactivateTrackButtons() {
  trackButtons.forEach(function (button) {
    button.classList.remove("active-button");
  });
}
function deactivatePlayerControlButtons() {
  playerControlButtons.forEach(function (button) {
    button.classList.remove("active-button");
  });
}

// functions to connect with input delays,
// have seperate delay button managing via slider

const delay1 = document.querySelector("#delay-1");
const delay2 = document.querySelector("#delay-2");
const delay3 = document.querySelector("#delay-3");
const delay4 = document.querySelector("#delay-4");

const loadDelays = [0, 0, 0, 0];
const releaseDelays = [0, 0, 0, 0];

function setDelayMode(trackNumber, mode) {
  const delayInputs = [delay1, delay2, delay3, delay4];
  const delayValue = Number(delayInputs[trackNumber - 1].value);

  if (mode === "load") {
    loadDelays[trackNumber - 1] = delayValue;
    msg.textContent = " ~:~ singular delay mapped [ON] ~:~ ";
  }

  if (mode === "release") {
    releaseDelays[trackNumber - 1] = delayValue;
    msg.textContent = " ~:~ cloud delay mapped [ON] ~:~ ";
  }
}

// funct loadTrack volume inputs

const loadVolume1 = document.querySelector("#load-volume-1");
const loadVolume2 = document.querySelector("#load-volume-2");
const loadVolume3 = document.querySelector("#load-volume-3");
const loadVolume4 = document.querySelector("#load-volume-4");

// functions to control media content from buttons,
//  to then inform User of the track playing via text content

const trackProgress = document.querySelector("#track-progress");
const speedControl = document.querySelector("#speed-control");
const speedDisplay = document.querySelector("#speed-display");
const playerControlButtons = document.querySelectorAll(
  ".player-control-button",
);

function playCurrentTrack() {
  deactivatePlayerControlButtons();

  musicPlayer.play();

  playerControlButtons[0].classList.add("active-button");
}

function pauseCurrentTrack() {
  deactivatePlayerControlButtons();

  musicPlayer.pause();

  playerControlButtons[1].classList.add("active-button");
}

function loopCurrentTrack() {
  musicPlayer.loop = !musicPlayer.loop;

  if (musicPlayer.loop) {
    playerControlButtons[2].classList.add("active-button");
    msg.textContent = " ~:~ looping singular P-hase layer [ON] ~:~ ";
  } else {
    playerControlButtons[2].classList.remove("active-button");
    msg.textContent = " ~:~ looping singular P-hase layer [OFF] ~:~ ";
  }
}

musicPlayer.addEventListener("timeupdate", function () {
  trackProgress.value = (musicPlayer.currentTime / musicPlayer.duration) * 100;
});

trackProgress.addEventListener("input", function () {
  musicPlayer.currentTime = (trackProgress.value / 100) * musicPlayer.duration;
});

speedControl.addEventListener("input", function () {
  musicPlayer.playbackRate = speedControl.value;
  speedDisplay.textContent = speedControl.value + "x";
});

// functions to connect divisioned
// track numbers to each variable of media content
//when User selects a track[#] button, the function will
//  load the respective media source,
//  informs User which track id is playing via playlist UI

function loadTrack(trackNumber) {
  deactivateTrackButtons();
  currentTrackNumber = trackNumber;
  if (trackNumber === 1) {
    musicPlayer.src = "A-V_media_RMIT-IntMed/1_p-hase_Hes.mp3";
    musicPlayer.volume = loadVolume1.value;

    trackButtons[0].classList.add("active-button");

    musicPlayer.onended = function () {
      trackButtons[0].classList.remove("active-button");
    };

    msg.textContent = " ~: Hes sound [ON] :~ ";
  } else if (trackNumber === 2) {
    musicPlayer.src =
      "A-V_media_RMIT-IntMed/2_p-hase_Dry-Down-feat-Ben-Snaath.mp3";
    musicPlayer.volume = loadVolume2.value;
    trackButtons[1].classList.add("active-button");

    musicPlayer.onended = function () {
      trackButtons[1].classList.remove("active-button");
    };

    msg.textContent = " ~: Dry Down sound [ON] :~ ";
  } else if (trackNumber === 3) {
    musicPlayer.src = "A-V_media_RMIT-IntMed/3_p-hase_Leapt.mp3";
    musicPlayer.volume = loadVolume3.value;

    trackButtons[2].classList.add("active-button");

    musicPlayer.onended = function () {
      trackButtons[2].classList.remove("active-button");
    };
    msg.textContent = " ~: Leapt sound [ON] :~ ";
  } else if (trackNumber === 4) {
    musicPlayer.src = "A-V_media_RMIT-IntMed/4_p-hase_Water-Feature.mp3";
    musicPlayer.volume = loadVolume4.value;

    trackButtons[3].classList.add("active-button");

    musicPlayer.onended = function () {
      trackButtons[3].classList.remove("active-button");
    };

    msg.textContent = " ~: Water Feature sound [ON] :~ ";
  }
  // wait to listen for input of delay to delay track times

  const delayTime = loadDelays[trackNumber - 1] * 1000;

  setTimeout(function () {
    musicPlayer.play();
  }, delayTime);
}

// wait to listen to individual loadTrack inputs, only speaks to its
// respective track,

let currentTrackNumber = 0;

loadVolume1.addEventListener("input", function () {
  if (currentTrackNumber === 1) {
    musicPlayer.volume = loadVolume1.value;
  }
});

loadVolume2.addEventListener("input", function () {
  if (currentTrackNumber === 2) {
    musicPlayer.volume = loadVolume2.value;
  }
});

loadVolume3.addEventListener("input", function () {
  if (currentTrackNumber === 3) {
    musicPlayer.volume = loadVolume3.value;
  }
});

loadVolume4.addEventListener("input", function () {
  if (currentTrackNumber === 4) {
    musicPlayer.volume = loadVolume4.value;
  }
});

// for User to select all [#] tracks at once {for avantGard fun}
//  informs User of the blended tracks playing via UI

const allTracks = [
  "A-V_media_RMIT-IntMed/1_p-hase_Hes.mp3",
  "A-V_media_RMIT-IntMed/2_p-hase_Dry-Down-feat-Ben-Snaath.mp3",
  "A-V_media_RMIT-IntMed/3_p-hase_Leapt.mp3",
  "A-V_media_RMIT-IntMed/4_p-hase_Water-Feature.mp3",
];

// to store the audio objects UI:, UI sliders for each track to
//  isolate
//track volumes & re-sample P-Hase album into itself

const volume1 = document.querySelector("#release-volume-1");
const volume2 = document.querySelector("#release-volume-2");
const volume3 = document.querySelector("#release-volume-3");
const volume4 = document.querySelector("#release-volume-4");

// to store the audio objects of each track, to then control
//  the blended tracks as a group, for {avantGard fun}
const layeredPlayers = [];

function release() {
  masterButtons[0].classList.add("active-button");

  layeredPlayers.length = 0;

  allTracks.forEach(function (trackPath, index) {
    const audio = new Audio(trackPath);

    if (index === 0) audio.volume = volume1.value;
    if (index === 1) audio.volume = volume2.value;
    if (index === 2) audio.volume = volume3.value;
    if (index === 3) audio.volume = volume4.value;

    audio.currentTime = Math.random() * 20;
    const delayTime = releaseDelays[index] * 1000;

    setTimeout(function () {
      audio.play();
    }, delayTime);

    layeredPlayers.push(audio);

    audio.onended = function () {
      const stillPlaying = layeredPlayers.some(function (player) {
        return !player.paused && player.currentTime < player.duration;
      });

      if (!stillPlaying) {
        masterButtons[0].classList.remove("active-button");
      }
    };
  });

  msg.textContent =
    " ~:~ >> ~:~quaDripital layers of P-hasing [ON]; do you hear this cloud?~:~ >> ~:~ ";
}

// functions that wait for User command on each track's
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

// function to deactivate buttons to indicate media not playing

function deactivateAllButtons() {
  trackButtons.forEach(function (button) {
    button.classList.remove("active-button");
  });

  masterButtons.forEach(function (button) {
    button.classList.remove("active-button");
    button.classList.remove("standby-pulse");
  });
}

// function to pause blended tracks
//  in command / session
// informs User via text content

function standby() {
  deactivateAllButtons();

  masterButtons[1].classList.add("standby-pulse");

  layeredPlayers.forEach(function (audio) {
    audio.pause();
  });

  msg.textContent = " ~:~ P-hasing layers [STANDBY] ~:~ ";
}

// function to stop and refresh blended tracks as an artistic
// stop in the last play commands / session
// informs User via text content

function reset() {
  deactivateAllButtons();

  masterButtons[1].classList.remove("standby-pulse");

  layeredPlayers.forEach(function (audio) {
    audio.pause();
    audio.currentTime = 0;
  });

  msg.textContent = " ~:~ P-hasing layers [OFF] ~:~ !! reset !! ~:~ ";
}

// function connecting with style as
// UX interaction;
// particle effect blend text input
// to drip downpage,
// function listens to target of User move mouse

const asciiPattern = [
  "        ⊹             ⊹            ⊹",
  "    ⊹        ⊹    ⊹      ⊹    ⊹         ⊹,",
  " ⊹    ꒦       ⊹ ⊹          ⊹ ⊹            ⊹x,",
  "⊹              x   ⊹       x           x⊹,",
  "             x           x   ⊹               ⊹,",
  " ⊹      ⊹      x          ⊹,",
  "      ꒳        ⊹     ꒦                     ⊹",
  "   ⊹        ⊹      ⊹               ꒦",
  "                        ⊹                  ⊹",
  "     ⊹              ⊹                  ⊹",
  "                s̠҉͍͊ͅ        ⊹",
  "        ⊹                     ꒦     ⊹",
  "          ⊹                      ⊹",
  "                     ꒦   ⊹",
  "           ⊹",
  "            ⊹    ⊹",
  "              ⊹",
  "                ⊹",
  "      ꒳",
  "             ⊹             ꒳",
  "         ⊹",
  "                         ⊹,",
  "             ⊹",
  "                   ꒦",
];

// variables to control the timing of the particle effect
//allow js to speak to time of mouse movement
// to then trigger the particle effect after a delay of print
// function to listen for User mouse movement, to then trigger
//  the particle effect after a delay of print,

let idleTimer;
let idleInterval;

let lastMouseX = 0;
let lastMouseY = 0;

// function to listen for User mouse movement, to then trigger
//  the particle effect after a delay of print,

document.addEventListener("mousemove", function (event) {
  lastMouseX = event.clientX;
  lastMouseY = event.clientY;

  clearTimeout(idleTimer);
  clearInterval(idleInterval);

  idleTimer = setTimeout(function () {
    idleInterval = setInterval(function () {
      createAsciiParticlePattern(lastMouseX, lastMouseY);
    }, 800);
  }, 600);
});

// function printing divisions of ascii font as particles,
//  to then drip downpage

function createAsciiParticlePattern(x, y) {
  asciiPattern.forEach(function (row, rowIndex) {
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      if (row[colIndex] !== " ") {
        const particle = document.createElement("div");

        particle.classList.add("ascii-particle");
        particle.textContent = row[colIndex];

        particle.style.left = x + colIndex * 3 + "px";
        particle.style.top = y + rowIndex * 6 + "px";

        document.body.appendChild(particle);

        setTimeout(function () {
          particle.remove();
        }, 18000);
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
