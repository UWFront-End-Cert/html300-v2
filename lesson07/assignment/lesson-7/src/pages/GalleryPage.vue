<!-- Assignment 7 - Gallery - Images Page -->
<template>
  <div id="app">
    <h1>You have landed on the gallery page.</h1>
    <h1>WWII Photo Gallery</h1>
      <img alt="United States MP's on motorbikes in France 1945" src="./assets/G-Croom-WWII-006-th.jpg" width=100% />
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
