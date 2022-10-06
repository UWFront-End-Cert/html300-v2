import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import GalleryView from './pages/GalleryView.vue'
import MyHome from './pages/MyHome.vue'


// Add the Router Plugin
Vue.use(VueRouter)


// Define the routes
const routes = [
  { path: '/gallery', name: 'GalleryView', component: GalleryView },
  { path: '/', name: 'MyHome', component: MyHome }
]

// Create the router instance and pass the 'routes' option
const router = new VueRouter({
   routes
  // mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//const app = new Vue(App)

//app.$mount('#app')

Vue.config.productionTip = false
