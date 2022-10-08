<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" >
    <h1>You have landed on the right page</h1>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/gallery">Gallery</router-link> |
      <router-link to="/history">History</router-link> |
      <router-link to="/remembrance">Remembrance</router-link> |
      <router-link to="/normandy">Normandy France</router-link>
    </nav>
    <router-view></router-view>
    <div>
      <img alt="Normandy Beach" src="./assets/AdobeStock_353186138.jpeg" width=100% height=230px />
    </div>
    <div class="container-x d-inline">
      <img alt="Gerald Croom" src="./assets/Croom-Deauville-France-1-Sept-1945-th.jpg" max-width=30% />
      <p> </p>
    </div>

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
