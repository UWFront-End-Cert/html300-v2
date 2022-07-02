<template>
    <div class="container">
        <p>I cannot, for the life of me, figure out how to render on load, the transparent border.
            Because of not being able to solve this issue, clicking on the image will activate 
            the border and give a "bounce" perception. Clicking on it again will not repeat the
            "bounce" perception - because the border already exists in the web page.
        </p>
        <ImagePaths v-for="entry in imageList"
            :key="entry"
            :title="entry.title"
            :path="entry.url"
            :alt="entry.alt"
        />
    </div>
</template>

<script>
import ImagePaths from './ImagePaths.vue'

export default {
    name: 'PageImages',
    headerName: 'Grid',
    components: { ImagePaths },
    data() { return {
        imageList: [
            { 
                title:"Away from Civilization",
                url:require('@/assets/cabin.jpg'),
                alt: 'a cabin in the woods'
            },
            {
                title:"Apolizing to the Wife",
                url:require('@/assets/bouquet.jpg'),
                alt: 'bouquet of flowers'
            },
            {
                title:"Bold and Brave",
                url:require('@/assets/bird-branch.jpg'),
                alt: 'bird sittin on a branch'
            },
            {
                title:"Happy Place",
                url:require('@/assets/hills.jpg'),
                alt: 'hills on the foreground, clouds in the background'
            },
            {
                title:"Kink in the Neck",
                url:require('@/assets/birdy-tilted-head.jpg'),
                alt: 'bird tilting its head'
            },
            {
                title:"Comb the Desert!",
                url:require('@/assets/lego-stormtrooper.jpg'),
                alt: 'lego stormtrooper walkin on sand'
            }
        ]
    }}
}
</script>