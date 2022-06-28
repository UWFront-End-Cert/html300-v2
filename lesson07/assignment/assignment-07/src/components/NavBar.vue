<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <ul class="navbar-nav">
            <li class="nav-item" v-for="entry in theseLinks" :key="entry">
                <a v-if="currentPath == '#/' + entry" class="nav-link active" :href="'#/' + entry">{{entry}}</a>
                <a v-else class="nav-link" :href="'#/' + entry">{{entry}}</a>
            </li>
        </ul>
    </nav>

    <div class="container">
        <component :is="currentView" />
    </div>
</template>

<script>

import PageAccordion from './PageAccordion.vue'
import PageGrid from './PageGrid.vue'
import PageImages from './PageImages.vue'
import PageLanding from './PageLanding.vue'

const routes = {
    '/accordion': PageAccordion,
    '/grid': PageGrid,
    '/images': PageImages,
    '/landing': PageLanding,
    '/': PageLanding
}

export default {
    name: 'NavBar',
    
    data(){ return {
            currentPath: window.location.hash,
            theseLinks: ['landing', 'images', 'accordion', 'grid']
    }},
    
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || '/'];
    }},

    mounted() {
         window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash;
	})}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .nav-link::first-letter{
        text-transform: capitalize ;
    }
</style>
