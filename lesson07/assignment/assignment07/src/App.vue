<template>
  <div id="app">
    <AppMenu /> <!-- Include the AppMenu component here -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import AppMenu from './components/AppMenu.vue'; // Import the Menu component


export default {
  name: 'App',
  components: {
    AppMenu, // Register the Menu component

  }
};
</script>

<style>
/* nav {
  background: #f2f2f2;
  padding: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  padding: 5px 10px;
  cursor: pointer;
}

li:hover {
  background: #ddd;
}

.content {
  margin-top: 20px;
  padding: 20px;
  background: #fff;
} */
</style>
