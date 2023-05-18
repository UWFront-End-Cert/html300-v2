<template>
  <div id="app">
    <NavBar/>
  </div>
</template>

<script>
 import NavBar from './components/NavBar.vue'

  export default {
    name: 'app',
    components: {
      NavBar
    }
  }
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  .router-link-active {
    font-weight: bold;
    color: #2c3e50;

    
  }

}
</style>
