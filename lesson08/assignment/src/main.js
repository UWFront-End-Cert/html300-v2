import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Home from '@/components/Home'
import Images from '@/components/Images'
import Accordion from '@/components/Accordion'
import Grid from '@/components/Grid'

import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import './main.scss'

Vue.use(BootstrapVue)
Vue.component("Navbar", require('./components/Navbar.vue').default); // Navgar

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App, Home, Images, Accordion, Grid),
}).$mount('#app') 