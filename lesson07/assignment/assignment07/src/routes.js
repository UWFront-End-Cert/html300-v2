import home from './components/Home.vue'
import images from './components/Images.vue'
import accordion from './components/Accordion.vue'
import grid from './components/Grid.vue'


export default [
    { path:'/', component:home },
    { path:'/images', component:images },
    { path:'/accordion', component:accordion },
    { path:'/grid', component:grid }

]