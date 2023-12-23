import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from '@/components/HomePage';
import RecipesPage from '@/components/RecipesPage';
import ConversionsPage from '@/components/ConversionsPage';

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Recipes',
      name: 'RecipesPage',
      component: RecipesPage
    },
    {
      path: '/Conversions',
      name: 'ConversionsPage',
      component: ConversionsPage
    }
  ];

  var router = new VueRouter({
    routes: routes,

  })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');