<template>
  <div id="app">
    <div>
      <img alt="Panorama Arromanches by Olivier Rault" src="../assets/AdobeStock_42498313.jpeg" width=100% height=230px />
    </div>
      <div class="image-wrapper">
      /* Come back later and work on adding in the figure, image, and fig caption components */
        <img class="thumbnail" v-for="(image, id) in images" :key="id" :src="image.src" :alt="image.alt" />
      </div>
  </div>
</template>

<script>
// eslint-disable-next-line
 /* eslint-disable */
 export default {
  data () {
      return {
        images: [
          {
            src: require('../assets/G-Croom-WWII-006-th.jpg'),
            alt: 'United States MPs on motorbikes in France, 1945'
          },
          {
            src: require('../assets/G-Croom-WWII-010-th.jpg'),
            alt: 'Unknown woman and MP Gerald Croom standing with Military Police Jeep'
          },
          {
            src: require('../assets/G-Croom-WWII-011-th.jpg'),
            alt: 'Unknown man with child in wheel-cart infront of Hotel Bellevue; Deauville, France, 1945'
          },
          {
            src: require('../assets/G-Croom-MP-bike-WWII.jpg'),
            alt: 'MP soldier Gerald Croom on motorbike'
          },
          {
            src: require('../assets/Clarence-Rogers_Andrew-Miller-Texas-th.jpg'),
            alt: 'Clarence Rogers with Andrew Miller of Texas'
          },
          {
            src: require('../assets/Croom_Staff-Sgt-th.jpg'),
            alt: 'Gerald Croom with Staff Sgt, unknown.'
          },
        ],
      }
    },
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
.image-wrapper {
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

</style>
