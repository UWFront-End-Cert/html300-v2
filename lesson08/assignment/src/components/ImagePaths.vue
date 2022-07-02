<script>
    import toggleBorder from '../mixins/toggleBorder'
    export default {
        name: 'ImagePaths',
        props: {
            title: String,
            path: String,
            alt: String
        },
        // Make sure to add currentColor to v-bind
        // for this to work
        mixins: [toggleBorder]
    }
</script>

<template>
    <h3>{{title}}</h3>
    <img
        @click="switchBorderOn"
        :src="path"
        :alt="alt"
        class="rounded mx-auto d-block add-border"
    /> 
</template>

<style scoped>
    h3 {
        margin-top: 1em;
        text-align: center;
    }

    img {
        margin-bottom: 1em;
        border: solid transparent 1em;
    }

    .add-border {
        border: solid v-bind(currentColor) 1em;
    }


</style>