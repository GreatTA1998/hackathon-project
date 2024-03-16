<div style="font-family: sans-serif; font-size: 64px">
  Practice swearing in English
</div>

<div style="font-size: 24px; font-family: sans-serif; font-weight: 400; margin-top: 12px; color: rgb(80, 80, 80); margin-left: 4px; margin-bottom: 12px;">
  Level 1: Guy takes up 2 seats with his bag in a crowded train, what do you say?
</div>

<audio bind:this={AudioElem} src="/PP.mp3"></audio>

{#if chatTranscript.length < 3}
  <VoiceKeywordDetect
    on:new-mic-result={(e) => chatTranscript = [...chatTranscript, e.detail]}
  />
{/if}

<div style="margin-top: 24px; position: relative; width: 1000px; height: 800px;">
  {#if chatTranscript.length < 3}
    <div style="
      position: absolute; 
      left: 24px;
      top: 24px; 
      background-color: hsla(500, 100%, 64%, 0.8); 
      padding: 24px; 
      border-radius: 24px;
      color: black;
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
  {/if}
  

  <img src="{currentImageSrc}" width="1000" height="800">

  <div style="position: absolute; font-family: sans-serif; top: 24px; right: 24px; background: white; border-radius: 24px; height: fit-content; width: 300px; padding: 24px;">
    <b>Chat transcript</b>
    
    {#each chatTranscript as sentence}
      <div style="">
        -{sentence}
      </div>
    {/each}

    {#if chatTranscript.length === 3}
      <h1>
        かっこいい! coolness score: 8/10
      </h1>
    {/if}
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
      currentImageSrc = '/missionSuccess.png'    
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



