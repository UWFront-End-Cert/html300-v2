<template>
  <div class="home">
    <main class="main">
    <HomeContent/>

      <button type="button" class="btn btn-lg btn-primary" data-bs-toggle="popover" data-bs-title="Trivia" data-bs-content="Given Kubrick's fear of flying, the entire film was shot in England.Sound-stage works were completed at London's Pinewood Studios which included a detailed recreation of Greenwich Village. Kubrick's perfectionism went as far as sending workmen to Manhattan to measure street widths and note newspaper vending machine locations.">Click for Trivia</button>
    </main>
  </div>
  
</template>

<script>

import HomeContent from '/Users/videoeditor/Desktop/School/UW/html300-v2/lesson07/assignment07/src/components/Home.vue'

export default {
    name: 'app',
    components: {
      HomeContent
    }
  }

</script>

