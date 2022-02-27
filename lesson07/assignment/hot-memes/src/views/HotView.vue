<template>
  <div class="container py-4">
    <h1>Hottest Memes of the Week</h1>

    <h3>Highlights</h3>

    <!-- Carousel that Cycles through 3 Hot Memes -->
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item"
          data-bs-interval="3000"
          v-for="image in images"
          :key="image"
        >
          <img img v-bind:src="image.src" />
        </div>
      </div>
    </div>

    <h3>Other Hot Memes</h3>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col" v-for="image in images" :key="image">
        <div class="card shadow-sm">
          <img v-bind:src="image.src" class="d-block w-50 img-fluid mx-auto" />

          <div class="card-body">
            <p class="card-text">
              This is a place holder meme taken from (Source)
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a v-bind:href="image"
                  ><button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var image_1 = require("../assets/images/ceo.jpg");
var image_2 = require("../assets/images/2010/knee.jpeg");
var image_3 = require("../assets/images/2010/morpheus.jpeg");
export default {
  name: "HotView",
  data() {
    return {
      images: [
        { src: image_1, description: "CEO Meme" },
        { src: image_2, description: "Arrow to the Knee" },
        { src: image_3, description: "Morpheus" },
      ],
    };
  },
};
</script>
