 /* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import vueImages from 'vue-images'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import HistoryPage from './pages/HistoryPage.vue'
import GalleryPage from './pages/GalleryPage.vue'
import HomePage from './pages/HomePage.vue'


// Add the Router Plugin
Vue.use(VueRouter)

// Define the routes
const routes = [
  { path: '/history', name: 'HistoryPage', component: HistoryPage },
  { path: '/gallery', name: 'GalleryPage', component: GalleryPage },
  { path: '/', name: 'HomePage', component: HomePage }
]

// Create the router instance and pass the 'routes' option
const router = new VueRouter({
   routes: routes,
   // mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//Vue.config.productionTip = false;
