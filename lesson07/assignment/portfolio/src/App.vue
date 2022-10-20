<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/gallery">Gallery</router-link> |
      <router-link to="/history">History</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'App',
    Components: {
      
    },
  data() {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.img-fluid {
  width: auto;
}
svg {
  overflow: hidden;
  vertical-align: middle;
}
/* thumbnail images */
.bd-example {
  position: relative;
  padding: 0rem;
  margin: 0 1rem 0;
  border: solid #f8f9fa;
  border-width: .2rem 0 0;
}

</style>
