import { createApp } from 'vue/dist/vue.esm-bundler';

import App from './vues/Home.vue'
import "./../css/style.css" 

import router from './router'

const appObj = createApp(App)
appObj.use(router)

window.vm = appObj.mount('#app')

