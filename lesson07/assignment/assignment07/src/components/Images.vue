<template>
  <section id="mycarousel" class="carousel slide" data-bs-target="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="3"></button>
  </div>
  <div class="carousel-inner">
    <div v-for="(image, index) in images" :key="index" class="carousel-item" :class="{ active: index === 0 }">
      <img class="d-block w-100" :src="image" :alt="'Image ' + (index + 1)">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#mycarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#mycarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</section>
</template>

<script>


export default {
  name: 'AppImages',
  data() {
    return {
      images: [
        "images/Front.jpg",
        "images/Livingroom.jpg",
        "images/Hall.jpg",
        "images/View.jpg"
      ]
    };
  }
};
</script>

<style>
#mycarousel {
  width: 50%;
  margin: 0 auto;


}
</style>
