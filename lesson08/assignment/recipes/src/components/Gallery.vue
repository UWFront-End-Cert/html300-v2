<template>
    <div>
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0" v-for="(image,id) in images" :key="id">
            <p>Test</p>
            <Image :image="image"/>
        </div>
      </div>

    </div>
</template>

<script>
import ImageComponet from "./Image.vue"

export default {
name: 'ImageGallery',
components: {
    Image,
},
props: {
    images: {
        type: Object,
        required: true,
    }
},

}
</script>