<template>
  <div class="about">
    <AboutPage msg="About Spaceland"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutPage from '@/components/AboutPage.vue'

export default {
  name: 'About',
  components: {
    AboutPage
  }
}
</script>
