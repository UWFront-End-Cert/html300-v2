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
    // v-for
    <tbody>
      <tr v-for="image in images" :key="image.id">
        <td>
          <img :src="image.assets/G-Croom-WWII-006-th.jpg"
              class="ui mini rounded image" />
        </td>
        <td>
          <img src="./assets/G-Croom-WWII-010-th.jpg"
              class="ui mini rounded image" />
        </td>
        <td>
          <img src="./assets/G-Croom-WWII-011-th.jpg"
              class="ui mini rounded image" />
        </td>
      </tr>
    </tbody>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'GalleryPage',
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
