<script>
export default {
    name: 'PageImages',
    data() { return {
        imageList: [
            { url:require('@/assets/cabin.jpg'), alt: 'a cabin in the woods'},
            { url:require('@/assets/bouquet.jpg'), alt: 'bouquet of flowers' },
            { url:require('@/assets/bird-branch.jpg'), alt: 'bird sittin on a branch' },
            { url:require('@/assets/hills.jpg'), alt: 'hills on the foreground, clouds in the background' },
            { url:require('@/assets/birdy-tilted-head.jpg'), alt: 'bird tilting its head' },
            { url:require('@/assets/lego-stormtrooper.jpg'), alt: 'lego stormtrooper walkin on sand'}]
    }}
}
</script>

<template>
    <div class="container">
        <img
        v-for="picture in imageList"
        :key=picture
        :src="picture.url"
        :alt="picture.alt"
        class="rounded mx-auto d-block" />
    </div>
</template>