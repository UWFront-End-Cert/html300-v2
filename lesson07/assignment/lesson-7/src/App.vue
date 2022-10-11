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
      <img class="img-fluid img-thumbnail float-left m-4" alt="Gerald Croom" src="./assets/Croom-Deauville-France-1-Sept-1945-th.jpg" max-width=30% />
      <p> </p>
    </div>
    <ProductList />
    <footer>
      Footer content goes here
    </footer>

  </div>

</template>

<script lang="scss ts">
import { defineComponent } from "vue";
import ProductList from "./views/ProductList.vue";
export default {
  data () {
    return {

    }
  }
};
export default defineComponent({
    name: "App",
    components: { ProductList }
    },
    data () {,
      return {

      }
    });

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
// thumbnail images
.bd-example {
  position: relative;
  padding: 0rem;
  margin: 0 1rem 0;
  border: solid #f8f9fa;
  border-width: .2rem 0 0;
}
</style>
