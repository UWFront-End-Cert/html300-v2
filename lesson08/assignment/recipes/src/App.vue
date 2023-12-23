<template>
  <div id="app">
    <ul>
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Recipes">Recipces</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Conversions">Conversions</router-link>
      </li>
    </ul>
    <router-view> </router-view>
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