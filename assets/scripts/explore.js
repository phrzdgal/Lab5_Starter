// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const speeches = window.speechSynthesis; //to get speech synthesizer from browser
  //Grabbing actual HTML elements for JS to use:
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const face = document.querySelector('main img');

  //Self explanatory - array of voices created and updated
  let arrayOfVoices = [];
  function populateVoiceList() {
    arrayOfVoices = speeches.getVoices();
    voiceSelect.innerHTML = '';

    //Below, each voice is created and added to the array as an 
    //option with the specified syntax

    arrayOfVoices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;

      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }
  populateVoiceList();

  if (speeches.onvoiceschanged !== undefined) {
    speeches.onvoiceschanged = populateVoiceList;
  }

  // Speak when the button is clicked
  speakButton.addEventListener('click', () => {
    const speechT = textInput.value;
    const utterance = new SpeechSynthesisUtterance(speechT);
    const selectedVoice = arrayOfVoices[voiceSelect.value];

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    // Change face to smiling while speaking only as per instructions
    utterance.addEventListener('start', () => {
      face.src = 'assets/images/smiling-open.png';
    });

    utterance.addEventListener('end', () => {
      face.src = 'assets/images/smiling.png';
    });

    speeches.speak(utterance);
  });
}
