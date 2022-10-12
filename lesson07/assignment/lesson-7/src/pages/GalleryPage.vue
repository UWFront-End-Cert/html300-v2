<template>
  <div id="app">
    <h1>You have landed on the Gallery of images page.</h1>
    <p>
      <!-- use the router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <router-link to="/">Home</router-link> |
      <router-link to="/gallery">Gallery</router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
    <vue-images :imgs="images">
    </vue-images>
  </div>
</template>

<script>
import vueImages from 'vue-images/dist/vue-images'

export default {
  data () {
    return {
      images: [
        {
          imageUrl: 'http://i.imgur.com/2ZFcyk9.png',
          caption: 'Photo by 1'
        },
        {
          imageUrl: 'http://i.imgur.com/Otaxjzf.jpg',
          caption: 'Photo by 2'
        },
        {
          imageUrl: 'http://i.imgur.com/zaJgzqQ.jpg',
          caption: 'Photo by 3'
        },
        {
          imageUrl: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/3.jpg',
          caption: 'Photo by 4'
        }
      ]
  },
  components: {
    vueImages
  }
}
//export default {
//  name: 'GalleryPage',
//  props: {
//    msg: String
//  }
//}
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
