import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/how-to',
    name: 'How-To',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HowTo.vue')
  },
  {
    path: '/know-your-cabbage',
    name: 'Know Your Cabbage',
    component: () => import('../views/KnowYourCabbage.vue')
  },
  {
    path: '/recipe-search',
    name: 'Recipe Search',
    component: () => import('../views/RecipeSearch.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
