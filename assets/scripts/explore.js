// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

    window.speechSynthesis.addEventListener('voiceschanged', populateVoiceList);
    
    const button = document.querySelector('button');
    button.addEventListener('click', speakTxt);
}

function populateVoiceList() {
  const voicesSelect = document.getElementById('voice-select');
  const voices = window.speechSynthesis.getVoices();
  
  voicesSelect.innerHTML = voices
      .map(voice => `<option value="${voice.name}">${voice.name}</option>`)
      .join('');
}

function speakTxt() {
  const text = document.getElementById('text-to-speak').value;
  const voiceName = document.getElementById('voice-select').value;
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  const selectedVoice = voices.find(voice => voice.name === voiceName);
  
  utterance.voice = selectedVoice;
  utterance.onstart = function() {
      document.querySelector('img').src = 'assets/images/smiling-open.png';
  };
  utterance.onend = function() {
      document.querySelector('img').src = 'assets/images/smiling.png';
  };
  
  window.speechSynthesis.speak(utterance);
}