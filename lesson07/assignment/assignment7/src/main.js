import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import ProcessPage from './components/ProcessPage.vue'
import DiscoverPage from './components/DiscoverPage.vue'
import ShopPage from './components/ShopPage.vue'
import CartPage from './components/CartPage.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/',
    name: 'HomePage',
    component: HomePage},

{   path: '/AboutPage',
    name: 'AboutPage',
    component:  AboutPage},

{   path: '/ProcessPage',
    name: 'ProcessPage',
    component: ProcessPage},

{   path: '/DiscoverPage',
    name: 'DiscoverPage',
    component: DiscoverPage},

{   path: '/ShopPage',
    name: 'ShopPage',
    component: ShopPage},

{   path: '/CartPage',
    name: 'CartPage',
    component: CartPage},
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
