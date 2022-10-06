<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>You have landed on the right page</h1>

  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/gallery">Gallery</router-link>
  </nav>
    <router-view></router-view>

    <footer>
      Footer content goes here
    </footer>

  </div>
</template>

<script>
export default {
  data () {
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
</style>
