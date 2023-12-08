// import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';

// import App from './App.vue'




// import Vue from 'vue'


// import App from './vues/AccApp.vue'
import App from './vues/Home.vue'
// import Drama from './vues/Drama.vue'
// import Comedy from './vues/comedy.vue'
// import Kids from './vues/Kids.vue'
// import { CAlert } from '@coreui/vue';
// import '@coreui/coreui/dist/css/coreui.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import gallery from './vues/Gallery.vue'
// import DropdownMenu from "v-dropdown-menu"
// import 'v-dropdown-menu/css'

// import 'v-dropdown-menu/dist/vue3/v-dropdown-menu.css'
// import 'v-dropdown-menu/css'
// import 'v-dropdown-menu/dist/vue3/v-dropdown-menu.css'

// import 'v-dropdown-menu/vue2/css'
// import vSelect from "vue-select";
// import "vue-select/dist/vue-select.css";
import "./../css/style.css" 

// import VueRouter from 'vue-router'
import router from './router'
// import router from './router'
// import router from './router'
// import router from './router'

// Vue.use(VueRouter)
// Vue.use(DropdownMenu);
// Vue.component("v-select", vSelect);


// const Home = { template: '<div>This is Home</div>' }
// const Foo = { template: '<div>This is Foo</div>' }
// const Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' }

// const router1 = new VueRouter({
//   base: __dirname,
//   routes: [
//     // { path: '/foo', name: 'foo', component: gallery },
//     { path: '/', name: 'events', component: gallery,props: true },
//     { path: '/events/home', name: 'events', component: gallery,props: true },
//     { path: '/events/drama', name: 'drama', component: Drama,props: true },
//     { path: '/events/comedy', name: 'Comedy', component: Comedy,props: true },
//     { path: '/events/kids', name: 'kids', component: Kids,props: true }
//   ]
// })

// const appObj = new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })

// appObj.use(DropdownMenu)
// appObj.mount('#app')

// createApp(App).use(router).use(DropdownMenu).mount('#app')

// const appObj = Vue.createApp({})
// appObj.use(router)
// appObj.mount('#app')


const appObj = createApp(App)
appObj.use(router)

window.vm = appObj.mount('#app')

