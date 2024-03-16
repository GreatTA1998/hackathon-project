<button id="startButton" style="margin-top: 12px;
  height: 48px; 
  font-size: 28px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: purple; color: white; border-radius: 24px; cursor: pointer;">
  Start talking
</button>

<div id="output"></div>

<script>
  import { onMount, createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  onMount(() => {
    const startButton = document.getElementById('startButton');
    const outputDiv = document.getElementById('output');

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      startButton.textContent = 'Listening...';
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      // outputDiv.textContent = transcript;

      dispatch('new-mic-result', transcript)
    };

    recognition.onend = () => {
      startButton.textContent = 'Start Voice Input';
    };

    startButton.addEventListener('click', () => {
      recognition.start();
    });
  })
</script>

<style>
  
</style>