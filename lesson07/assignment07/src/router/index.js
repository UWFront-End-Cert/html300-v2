import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FluidView from '../views/FluidView.vue'
import GridView from '../views/GridView.vue'
import AccordianView from '../views/AccordianView.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/fluid',
    name: 'fluid',
    component: FluidView
  },
  {
    path: '/grid',
    name: 'grid',
    component: GridView
  },
  {
    path: '/accordian',
    name: 'accordian',
    component: AccordianView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
