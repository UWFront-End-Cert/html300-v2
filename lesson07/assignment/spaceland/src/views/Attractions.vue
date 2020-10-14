<template>
  <div class="attractions">
    <AttractionsPage msg="Attractions"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AttractionsPage from '@/components/AttractionsPage.vue'

export default {
  name: 'Attractions',
  components: {
    AttractionsPage
  }
}
</script>
