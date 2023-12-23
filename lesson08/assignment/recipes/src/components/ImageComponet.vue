<template>
    <figure>
        <img class="thumbnail" 
            :src="src"
            :alt="alt" 
            :title="title"
            @click="toggleBorder" :class="{border: toggle}" 
        />
        <figcaption>
            {{ title }}
        </figcaption>
    </figure>
</template>

<script>
import toggleBorder from '../mixins/image.js'
export default {
    data() {
        return {     
        }
    },
    mixins: [
        toggleBorder
    ],
    props: {
        src: {type: String},
        alt: {type: String},
        title: {type: String},
    }
}
</script>

<style scss>
    .thumbnail {
        float: left;
        width: 478px;
        height: 330px;
        object-fit: cover;
        padding: 10px;
        
        margin: 10px;
        margin-top: 20px;
        margin-bottom: 5px;
        text-decoration-color: black;
        border-style: solid;
        border-color: darkgray;
        
    }
    
    figure {
        display: inline-flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    figcaption {
        display: inline-flex;
        flex-wrap: wrap;
        padding: .25rem;
        text-indent: 1rem;
        text-align: center;
    }

    .imgBorder {
        border-color: darkgray;
        border-width: 3px;
   }
</style>