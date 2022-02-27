<template>
  <div class="container py-4">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/hot">Hot</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/archive">Archive</router-link>
    </nav>
  </div>

  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #0d6efd;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>
