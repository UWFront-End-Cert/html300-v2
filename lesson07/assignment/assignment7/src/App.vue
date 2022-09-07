<template>
  <div id="app">
    <!-- Configure a router/routes for the navigation between pages (components) -->
    <!-- All repeated content must be from variables defined in the .vue page, using "v-for" to iterate through and build the content. -->
  <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/AboutPage">About</router-link>
      <router-link to="/ProcessPage">Process</router-link>
      <router-link to="/DiscoverPage">Discover</router-link>
      <router-link to="/ShopPage">Shop</router-link>
      <router-link to="/CartPage">Cart</router-link>

      <router-view></router-view>
  </nav>
</div>
</template>

<script>
export default {
name: 'app',
}
</script>


<style lang="scss">
#app {
  font-weight: lighter;
  color: #000000;
  text-align: center;
  font-style: 'Montserrat', sans-serif;
  text-decoration: none;
}
</style>
