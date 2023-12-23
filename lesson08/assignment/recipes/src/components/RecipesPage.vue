<template>
    <div id="app">
      <div class="image-wrapper" v-for="image in images" :key="image.id">
            <ImageComponet :src="getImgUrl(image.src)" :alt="image.alt" :title="image.title"/>
        </div>
    </div>
  </template>

<script>
import ImageComponet from './ImageComponet.vue'
export default {
    components: {
     ImageComponet
    },
    data () {
        return {
            images: [
            {
                src: 'enchiladas.jpg',
                alt: 'plated enchiladas conver in cheese, sauce and veggie',
                title: "Green Chilli Chicken Enchiladas"
            },
            {
                src: 'bolognese.jpg',
                alt: 'bolognese sauce topped on thick noodles',
                title: "Slow Cooker Bologneses"
            },
            {
                src: 'chicken_parmesan.jpg',
                alt: 'Chicken parmesan on a plate with sauce',
                title: "Pan Fried Chicken Parmesan"
            },
            {
                src:'nashville_hot_chicken_sandwich.jpg',
                alt: 'Nashville hot chicken sandwich',
                title: "Nashville Hot Chicken Sando"
            },
            {
                src: 'crepes.jpg',
                alt: 'crepes stuffed wtih salmon',
                title: "Salmon Stuffed Crepes"
            },
            {
                src: 'ribs.jpg',
                alt: 'half rack of ribs on a plate',
                title: "Classic Ribs"
            }
            ],
        }
    },
    methods: {
        getImgUrl: function (path) { 
            return require('@/assets/' + path);
        }
    }
}
</script>
  
<style lang="scss">

.image-wrapper {
    margin-left: 2rem;
    margin-right: 2rem;
}

.thumbnail {
    float: center;
    width: 478px;
    height: 330px;
    object-fit: cover;
    padding: 5px;
}
  
</style>