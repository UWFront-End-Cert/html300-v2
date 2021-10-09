<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/how-to">How-To</router-link>
      <router-link to="/know-your-cabbage">Know Your Cabbage</router-link>
      <router-link to="/recipe-search">Recipe Search</router-link>
    </div>
    <router-view/>
    <footer>SITE BY DWITT, 2021</footer>
  </div>
</template>

<style>
#app {
  padding-left: 2em;
  text-align: left;
  color: #4d4d4d;
  height: 100%;
}

#nav {
  padding: 2em 1em 2em 0;
}

#nav a {
  font-size: 1em;
  padding: 0.1em 0.7em 0.21em 0.7em;
  margin-right: 1.5em;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: #4d4d4d;
}

#nav a.router-link-exact-hover {
  color: #4d4d4d;
}

#nav a.router-link-exact-active {
  color: #4d4d4d;
}


</style>
