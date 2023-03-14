<template>
  <div id="app">
    <navBar />
    <router-view></router-view>
    <pageFooter />
  </div>
</template>

<script>
  import navBar from './components/navBar.vue';
  import pageFooter from './components/pageFooter.vue';

  export default {
  name: 'App',
  components: {
    navBar,
    pageFooter,
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
