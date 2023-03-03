import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import homePage from './pages/homePage'
import aboutPage from './pages/aboutPage'
import galleryPage from './pages/galleryPage'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";


Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: homePage },
  { path: '/about', component: aboutPage },
  { path: '/gallery', component: galleryPage }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')