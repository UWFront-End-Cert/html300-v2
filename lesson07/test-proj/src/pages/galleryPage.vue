<template>
    <div>
        <h1>Gallery Page</h1>
        <p>Gallery test test</p>
        <div class="img-wrapper">
            <img v-for="(image, index) in images" :key="index" :src="require(`@/assets/images/${image.src}`)" :alt="image.alt">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'galleryPage', 
        data() {
            return {
                images: [
                    {src: 'img1.jpg', alt: 'a ball'},
                    {src: 'img2.jpg', alt: 'a dog'},
                    {src: 'img3.jpg', alt: 'a dog'}
                ]
            }
        }
    }
</script>

<style scoped lang="scss"></style>