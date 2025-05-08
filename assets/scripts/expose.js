// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornType = document.getElementById('horn-select');
  const noise = document.querySelector('audio');

  const soundPic = document.querySelector('main img');
  const volumeSlider = document.getElementById('volume');
  const volumeImage = document.querySelector('#volume-controls img');

  const pressButtn = document.querySelector('button');

  const confett = new JSConfetti();

  // Horn selection changes image and sound depending on which 
  // image we are dealing with - airhorn, carhor, or partyhorn
  hornType.addEventListener('change', () => {
    const horn = hornType.value;

    if (horn === 'air-horn') {
      noise.src = './assets/audio/air-horn.mp3';
      soundPic.src = './assets/images/air-horn.svg';
    } else if (horn === 'car-horn') {
      noise.src = './assets/audio/car-horn.mp3';
      soundPic.src = './assets/images/car-horn.svg';
    } else if (horn === 'party-horn') {
      noise.src = './assets/audio/party-horn.mp3';
      soundPic.src = './assets/images/party-horn.svg';
    }
  });

  // Volume slider changes icon and audio volume in accordance 
  //with insructions (0, 33, 67, etc.)
  volumeSlider.addEventListener('input', () => {
    const volume = parseInt(volumeSlider.value);
    noise.volume = volume / 100;

    if (volume === 0) {
      volumeImage.src = './assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeImage.src = './assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeImage.src = './assets/icons/volume-level-2.svg';
    } else {
      volumeImage.src = './assets/icons/volume-level-3.svg';
    }
  });


  
  // Confetti + Sound!
  pressButtn.addEventListener('click', () => {
    noise.play();
    if (hornType.value === 'party-horn') {
      confett.addConfetti();
    }
  });
}