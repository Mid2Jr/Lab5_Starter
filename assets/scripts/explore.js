// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const text_box = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');
  let synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '';  
    for(let voice of voices) {
        let option = document.createElement('option');
        option.textContent = voice.name + ' (' + voice.lang + ')';
        
        if(voice.default) {
            option.textContent += ' -- DEFAULT';
        }

        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    }
}

if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

  function speakText() {
      if (voiceSelect.value !== 'select' && text_box.value.trim() !== '') {
          const utterance = new SpeechSynthesisUtterance(text_box.value);
          const selectedVoice = voices.find(voice => voice.name === voiceSelect.value);
          utterance.voice = selectedVoice;

          faceImage.src = 'assets/images/smiling-open.png';

          utterance.onend = function () {
              faceImage.src = 'assets/images/smiling.png'; 
          };

          speechSynthesis.speak(utterance);
      }
  }

  populateVoiceList(); 

  speakButton.addEventListener('click', speakText);

  speakButton.addEventListener('click', function() {
    let utterance = new SpeechSynthesisUtterance(textInput.value);
    let selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    utterance.voice = voices.find(voice => voice.name === selectedOption);
    synth.speak(utterance);
});
}
