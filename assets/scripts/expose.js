// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const imageElement = document.querySelector('#expose img');
  const audioElement = document.querySelector('#expose audio');
  const playButton = document.querySelector('#expose button');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  const hornAssets = {
    "air-horn": {
      image: "assets/images/air-horn.svg",
      audio: "assets/audio/air-horn.mp3"
    },
    "car-horn": {
      image: "assets/images/car-horn.svg",
      audio: "assets/audio/car-horn.mp3"
    },
    "party-horn": {
      image: "assets/images/party-horn.svg",
      audio: "assets/audio/party-horn.mp3"
    }
  };

  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;

    if (hornAssets[selectedHorn]) {
      imageElement.src = hornAssets[selectedHorn].image;
      audioElement.src = hornAssets[selectedHorn].audio;
    } 
  });

  playButton.addEventListener('click', () => {
    if (audioElement.src) {
      audioElement.play();
    } 
  });

  volumeSlider.addEventListener('input', () => {
    const volumeValue = parseInt(volumeSlider.value, 10);

    audioElement.volume = volumeValue / 100;

    if (volumeValue === 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volumeValue < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volumeValue < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });
}