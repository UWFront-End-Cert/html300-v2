<template>
  <div class="Contact">
    <ContactPage msg="Contact"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactPage from '@/components/ContactPage.vue'

export default {
  name: 'Contact',
  components: {
    ContactPage
  }
}
</script>
