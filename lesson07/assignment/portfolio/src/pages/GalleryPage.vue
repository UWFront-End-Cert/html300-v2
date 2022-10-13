<template>
<div id="app">
  <div>
    <img alt="Panorama Arromanches by Olivier Rault" src="../assets/AdobeStock_42498313.jpeg" width=100% height=230px />
    <rect width=100% height=100% ></rect>
      <text class="bg-dark text-white text-right mb-3" x=50% y=50% dy=.10em>Panorama Arromanches by Olivier Rault</text>

  </div>
        <!-- <div class="container3"> -->
            <h2>United States Army | Deauville, France | 1945</h2>
            <p class="lead"></p>
            <div class="row">
              <div class="col-md-4">
                <div class="thumbnail image-wrapper">
                  <img v-for="(image, id) in images" :key="id" :src="image.src" :alt="image.all" />
                </div>
              </div>
              </div>
            </div>
          <!-- </div> -->
          <div class="containerA">
            <div class="bd-example bd-example-images float-left">
              <img class="img-thumbnail mx-auto d-block" width=1000 height=1000 src="../assets/G-Croom-WWII-front-026.jpg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="WWII photo"  alt="WWII Group Photo, unknown location.">
              <title>WWII photograph</title>
                <rect width=100% height=100% fill=#868e96></rect>
                <text class="bg-light text-dark text-center" x=50% y=50% dy=.3em>WWII U.S. Army Group Photo - Front: G.Croom: 4th row-1st person-left side</text>
            </div>
            <div class="bd-example bd-example-images float-left">
              <img class="img-thumbnail mx-auto d-block" width=600 height=600 src="../assets/G-Croom-WWII-back-026.jpg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="WWII photo"  alt="WWII Group Photo, unknown location." />
              <title>WWII photograph</title>
                <rect width=100% height=100% fill=#868e96></rect>
                <text class="bg-light text-dark text-center" x=50% y=50% dy=.3em>WWII U.S. Army Group Photo - Back</text>
            </div>
          </div>

</template>

<script>
export default {
  name: 'GalleryPage',
  props: {
    msg: String
  }, 
  data () {
    return {
      images: [
        {
          src: require('../assets/to/G-Croom-WWII-006-th.jpg'),
          alt: 'United States MPs on motorbikes in France, 1945'
        },
        {
          src: require('../assets/to/G-Croom-WWII-010-th.jpg'),
          alt: 'Unknown woman and MP Gerald Croom standing with Military Police Jeep'
        },
        {
          src: require('../assets/to/G-Croom-WWII-011-th.jpg'),
          alt: 'Unknown man with child in wheel-cart infront of Hotel Bellevue; Deauville, France, 1945'
        },
        {
          src: require('../assets/to/G-Croom-MP-bike-WWII.jpg'),
          alt: 'MP soldier Gerald Croom on motorbike'
        },
        {
          src: require('../assets/to/Clarence-Rogers_Andrew-Miller-Texas-th.jpg'),
          alt: 'Clarence Rogers with Andrew Miller of Texas'
        },
        {
          src: require('../assets/to/Croom_Staff-Sgt-th.jpg'),
          alt: 'Gerald Croom with Staff Sgt, unknown.'
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h3 {
  margin: 40px 0 0;
}
h2 {
  margin-left: .5rem;
}
.container3 {
  margin-left: 2rem;
  margin-right: 2rem;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
// Gallery Image Page thumbnail
.thumbnail {
  float: left;
  width: 478px;
  height: 330px;
  object-fit: cover;
  padding: 5px;
 
}
img.thumbnail:hover {
  box-shadow: 0 0 2px 1px;
}
</style>
