<template>
  <router-view></router-view>
</template>

<script>
import 'semantic-ui-css/semantic.css'
// import StaffDirectory from './components/StaffDirectory.vue'

export default {
  name: 'App',
  // components: {
    // StaffDirectory
  // }
};
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
  body {
    padding: 2em;
  }
</style>
