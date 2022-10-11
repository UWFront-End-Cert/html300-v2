/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vueImages from 'vue-images'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NormandyPage from './pages/NormandyPage'
import RemembrancePage from './pages/RemembrancePage'
import HistoryPage from './pages/HistoryPage.vue'
// import GalleryPage from './pages/GalleryPage.vue'
import HomePage from './pages/HomePage.vue'



// Add the Router Plugin
Vue.use(VueRouter)


// Define the routes
const routes = [
  { path: '/normandy', name: 'NormandyPage', component: NormandyPage },
  { path: '/remembrance', name: 'RemembrancePage', component: RemembrancePage },
  { path: '/history', name: 'HistoryPage', component: HistoryPage },
//  { path: '/gallery', name: 'GalleryPage', component: GalleryPage },
  { path: '/', name: 'HomePage', component: HomePage }
]

// Create the router instance and pass the 'routes' option
const router = new VueRouter({
   routes,
   mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   el: '#app',
//   data() {
//     return {
//       images: [
//         {
//           imageURL: 'http://i.imgur.com/2ZFcyk9.png',
//           caption: 'Photo by 1'
//         },
//         {
//           imageUrl: 'http://i.imgur.com/Otaxjzf.jpg',
//           caption: 'Photo by 2'
//         },
//         {
//           imageUrl: 'http://i.imgur.com/zaJgzqQ.jpg',
//           caption: 'Photo by 3'
//         },
//         {
//         imageUrl: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/3.jpg',
//         caption: 'Photo by 4'
//         }
//       ]
//     }
//     // components; {
//     //   vueImages: vueImages
//     // }
//   }
// }).$mount('#app')
