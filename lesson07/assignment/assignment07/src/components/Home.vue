<template>
  <div class="home">
    <div class="container">
      <!-- Jumbotron Creates a large, full-width heading with additional styling for emphasis.-->
      <div class="jumbotron text-center border border-gray p-4">
        <!-- Large heading display-4: Sets the heading to a large display size.-->
        <h1 class="display-4">HTML5 300!</h1>
        <!-- Lead paragraph -->
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada tempus quam, vitae laoreet purus consectetur et.</p>
        <!-- Horizontal divider my-4: Adds vertical margin to the horizontal divider.-->
        <hr class="my-4">
        <!-- Normal paragraph -->
        <p>See some pretty Pictures for lesson 8.</p>
        <!-- Primary button -->
        <router-link to="/images" class="btn btn-primary btn-lg" role="button">Images</router-link>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'AppHome',
  components: {

  }
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.border-gray {
  border-color: gray;
}
</style>
