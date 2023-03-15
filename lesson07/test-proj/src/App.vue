<template>
  <div id="app">
    <pageHeader />
    <navBar />
    <router-view></router-view>
    <pageFooter />
  </div>
</template>

<script>
  import pageHeader from './components/pageHeader.vue';
  import navBar from './components/navBar.vue';
  import pageFooter from './components/pageFooter.vue';

  export default {
  name: 'App',
  components: {
    pageHeader,
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
  color: #1e2123;
}

header {
  background-color: rgb(204, 234, 250);
}

h1 {
  padding: 1rem;
}

.main-content {
  background-color: rgb(57, 146, 99);
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

footer {
  background-color: rgb(104, 94, 85);
  color: white;
  font-weight: 550;
}
</style>
