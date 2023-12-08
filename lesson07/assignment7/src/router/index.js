// import {  VueRouter } from 'vue-router'
// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// import HomeView from '../views/HomeView.vue'

// import App from './vues/AccApp.vue'
// import App from '../vues/Home.vue'
import Drama from '../vues/Drama.vue'
import Comedy from '../vues/comedy.vue'
import Kids from '../vues/Kids.vue'
import gallery from '../vues/Gallery.vue'

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
// const Com = { template: '<div>Comedy</div>' }
// const Kids1 = { template: '<div>Kids</div>' }


const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
    // { path: '/', name: 'home', component: App,props: true },


    { path: '/events/home', name: 'events', component: gallery,props: true },
    { path: '/events/drama', name: 'drama', component: Drama,props: true },
    { path: '/events/comedy', name: 'Comedy', component: Comedy,props: true },
    { path: '/events/kids', name: 'kids', component: Kids,props: true },
    { path: '/', redirect: { name: 'events' } }

    // { path: '/events/home', name: 'events', component: Foo },
    // { path: '/events/drama', name: 'drama', component: Bar },
    // { path: '/events/comedy', name: 'Comedy', component: Com },
    // { path: '/events/kids', name: 'kids', component: Kids1 },
    // { path: '/', redirect: { name: 'events' } }

]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

console.log(process.env.BASE_URL);

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(process.env.BASE_URL),
  routes, // short for `routes: routes`
})

// router.push(req.url) // request url
router.isReady().then(() => {
  // resolve the request
})

export default router
