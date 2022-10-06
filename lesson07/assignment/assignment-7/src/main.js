import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Gallery from './GalleryView.vue'
import Home from './MyHome.vue'

// Add the Router Plugin
Vue.use(VueRouter)

// Define the routes
const routes = [
  { path: '/gallery', name: 'GalleryView', component: Gallery },
  { path: '/', name: 'MyHome', component: Home }
]

// Create the router instance
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

const app = new Vue(App)

app.$mount('#app')

Vue.config.productionTip = false
