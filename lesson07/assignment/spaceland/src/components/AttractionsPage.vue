<template>
<div class="attractions">
  <h2 class="text-danger text-center m-4 p-5">{{ msg }}</h2>

  <body>
    <main class="main">
      <div class="d-flex flex-wrap justify-content-center p-3 m-5 border border-warning">
        <h2 class="d-flex display-4 p-3 text-center align-items-center">The Orbital</h2>
        <p class="display-5 text-center">Are you ready to be spun at the velocity of the Earth? This ride is great for people who love thrills and speed. Each spaceship has a max capacity of two passengers. You must be at least 5' 6" to ride. Please
          make sure to avoid eating at least two hours prior to riding.</p>

        <div v-for="image in images" v-bind:key="image.id">
          {{image}}
        </div>

        <img class="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1578596856839-90f58e8d7d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="An image of the orbital ride">
      </div>

      <div class="d-flex flex-wrap justify-content-center p-3 m-5 border border-warning">
        <h2 class="d-flex display-4 p-3 text-center align-items-center">Neptune's Water Falls</h2>
        <p class="display-5 text-center">You will need a towel for this ride. Neptune is an ice planet and it is experiencing a heat wave, resulting in many waterfalls. This ride will take you through the waterfalls to not be refreshed, but to also
          view the spectacular water on Neptune. This ride is great for people who prefer calmer rides. Each pod has a max capacity of thirteen passengers. There is no minimun height requirement. Children must be accompanied by parents/guardians.</p>
        <img class="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1562797795-9184009062f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="An image of the orbital ride">
      </div>

      <div class="d-flex flex-wrap justify-content-center p-3 m-5 border border-warning">
        <h2 class="d-flex display-4 p-3 text-center align-items-center">Saturn's Rings</h2>
        <p class="display-5 text-center">Come and see what the views are like on Saturn's Rings. This ride will gradually spin you around the planet on its rings, so that you can view it's glorious landscape. Space cadets can have their own ship or
          share it with up to five people. There is no minimun height requirement. Children must be accompanied by parents/guardians.</p>
        <img class="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1484587658517-51c2ea232f9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="An image of the orbital ride">
      </div>

      <footer class="main__footer">
        <p>SPACELAND &copy; 2020</p>
      </footer>

    </main>
  </body>
</div>
</template>

<script>
export default {
  name: 'Attractions',
  props: {
    msg: String
  },
  data () {
    return {
      images: [
      'https://images.unsplash.com/photo-1578596856839-90f58e8d7d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1562797795-9184009062f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1484587658517-51c2ea232f9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'],
      }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
