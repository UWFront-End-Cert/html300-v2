
<template>
  <div id="app">
    <main class="main">
      <!-- image carousel with three images and controls -->
      <!-- <div class="carousel-item" v-for="(banner,idx) in banners" :class="{ active: idx==0 }">
      <img :src="banner" alt="" class="img-fluid">

      <div class="">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">

    <div class="carousel-item active" v-for="banner in banners">
      <img :src="`./assets/${banner}`" alt=""  class="img-fluid"   >

</div> -->
      <h3>Community Bread Gallery</h3>
      <div id="carouselControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner" role="listbox">
            
            <div v-for="(pic, index) in pics" v-bind:key="pic.id" class="carousel-item" :class="{ active: index === 0}">
              <div class="d-flex justify-content-center">
                  <img :src="`./css/img/${pic.image}`" class="d-block w-75" :alt="pic.text">

              </div>
            </div>
          </div>
          
          <!-- carousel controls -->
          <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

    </main>
  </div>
</template>

<script>
    export default {
    name: 'app',
    data () {
      return {
        pics: [
          {
            image: "bread-2.jpeg",
            text: "a loaf of bread from above"
          },
          {
            image: "bread-3.jpeg",
            text: "the interior of a loaf of bread"
          },
          {
            image: "bread-4.jpeg",
            text: "a seeded loaf of bread"
          }
        ]
      }
    }
  }
</script>

