<template>
    <div class="main-content">
        <h1>Gallery</h1>
        <div class="img-wrapper">
            <img v-for="(image, index) in images" 
            :key="index" 
            :src="require(`@/assets/images/${image.src}`)" 
            :alt="image.alt" 
            class="img-fluid w-75 pb-3">
            <!-- make the images responsive & equal size -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'galleryPage', 
        data() {
            return {
                images: [
                    {src: 'img1.jpg', alt: 'a lake in Washington state'},
                    {src: 'img2.jpg', alt: 'a waterfall in Washington state'},
                    {src: 'img3.jpg', alt: 'a forest in Washington state'}
                ]
            }
        }
    }
</script>
