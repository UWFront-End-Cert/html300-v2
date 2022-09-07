<template>
  <div id="app">
    <!--For the image page, use a `v-for` loop to iterate through an array of image-->
    <img v-for="item in images" v-bind:key="item" :src="require('../assets/' + item + '.jpg')" width="500">
  </div>
</template>

<script>
export default {
  data ()  {
    return {
      images: ['process-1', 'process-2', 'process-3']
    }
  }
}
</script>
