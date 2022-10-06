<template>
  <div class="hello">
    <Gallery>You have reached the Gallery page.</Gallery>

  </div>
</template>

<script>
import GalleryView from './pages/GalleryView.vue'
import MyHome from './pages/MyHome.vue'
export default {
  name: 'HelloWorld',
  props: {
   msg: String

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
