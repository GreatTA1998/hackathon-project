<div>
  Practice swearing in English
</div>

<div style="font-size: 24px;">
  Level 1: Motherfucker in Subway
</div>

<audio bind:this={AudioElem} src="/PP.mp3"></audio>

<VoiceKeywordDetect
  on:new-mic-result={(e) => chatTranscript = [...chatTranscript, e.detail]}
/>

<div style="margin-top: 24px; position: relative; width: 1000px; height: 800px;">
  <div style="
    position: absolute; 
    left: 24px;
    top: 24px; 
    background-color: hsla(500, 100%, 64%, 0.6); 
    padding: 24px; 
    border-radius: 24px;
    color: white;
    font-family: sans-serif;
    font-weight: 600;
    "
  >
    <b>Useful phrases:</b>
    <div>
      {#each phrases as phrase}
        <li>"{phrase}"</li>
      {/each}
    </div>
  </div>
  

  <img src="{currentImageSrc}" width="1000" height="800">

  <div style="position: absolute; font-family: sans-serif; top: 24px; right: 24px; background: white; border-radius: 24px; height: 200px; width: 300px; padding: 12px;">
    <b>Chat transcript</b>
    
    {#each chatTranscript as sentence}
      <div style="">
        {sentence}
      </div>
    {/each}
  </div>
</div>


<script>
  import VoiceKeywordDetect from '$lib/VoiceKeywordDetect.svelte'

  let currentImageSrc = '/initial.png'
  let AudioElem

  $: updateSituation(chatTranscript) 

  function updateSituation () {
    // currentImage = imageFiles[chatTranscript.length]
    const n = chatTranscript.length
    if (n === 1 || n === 2) { 
      currentImageSrc = '/confrontation.png'
      if (n === 1) {
        AudioElem.play()
        chatTranscript = [...chatTranscript, douchebagDialogue[0]]
      }
    }
    else if (n === 3) {
      // if (chatTranscript[2].includes('Fuck')) {
      //   currentImageSrc = '/missionFailed.png'
      // } else {
      currentImageSrc = '/missionSuccess.png'
      // }
    }
  }

  const douchebagDialogue = [
    "I need the space, and I'm not moving my suit case just because someone else wants to sit down" 
  ] 

  const imageFiles = [
    'initial sitting.png',
    'confrontation'
  ]

  let chatTranscript = []

  const phrases = [
    "I don't give a flying fuck",
    "You're a prick",
    "Oh fuck off",
    "Does your mother know you're a piece of shit?",
  ]
</script>



