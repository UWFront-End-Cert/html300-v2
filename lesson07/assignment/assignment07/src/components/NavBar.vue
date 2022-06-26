<template>
  <!-- Nav -->
  <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
    <b-navbar-brand href="#">
      <b-img :src="require('../assets/logo.png')" class="logo"></b-img>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link to="/" class="nav-link">
          Home
          <span class="sr-only">(current)</span>
        </router-link>
        <router-link to="/images" class="nav-link">Images</router-link>
        <router-link to="/accordion" class="nav-link">Accordion</router-link>
        <router-link to="/grid" class="nav-link">Grid</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <!-- Nav End -->
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped lang="scss">
.logo {
  width: 15%;
}
</style>