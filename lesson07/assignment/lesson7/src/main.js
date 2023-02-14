import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.scss';
import IndexView from '/Users/stefantmilne/Desktop/uw/html300/html300-v2/lesson07/assignment/lesson7/src/components/IndexView.vue';
import RecipesView from '/Users/stefantmilne/Desktop/uw/html300/html300-v2/lesson07/assignment/lesson7/src/components/RecipesView.vue';
import CommunityView from '/Users/stefantmilne/Desktop/uw/html300/html300-v2/lesson07/assignment/lesson7/src/components/CommunityView.vue';
import FaqView from '/Users/stefantmilne/Desktop/uw/html300/html300-v2/lesson07/assignment/lesson7/src/components/FaqView.vue';


Vue.use(VueRouter);

const routes = [
  { 
    path: '/', 
    name: 'Index',
    component: IndexView
  },
  {
    path: '/RecipesView',
    name: 'Recipes',
    component: RecipesView
  },
  {
    path: '/CommunityView',
    name: 'Community',
    component: CommunityView
  },
  {
    path: '/FaqView',
    name: 'FAQ',
    component: FaqView
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
