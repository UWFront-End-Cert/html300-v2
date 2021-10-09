<template>
<div class="row pb-5">
  <h1 class="col-12 pt-5 pb-2">Find Recipes</h1>
  <p class="lead col-sm-12 pb-5">Use the search area below to find more great ways to enjoy cabbage.</p>
  <!-- Adding a search bar -->
  <section class="col-sm-12">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="What are you looking for?" aria-label="Search item" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button v-on:click="show = !show" v-bind:key="msg" type="button">Search</button>
      </div>
    </div>
    <!-- Adding an if-else statement -->
    <p class="ml-2 pt-3" v-if="show"><i>Try searching by ingredient. (Hint: cabbage!)</i></p>
    <p class="ml-2 pt-3" v-else><i>Slaw-some idea!</i></p>
  </section>

</div>
</template>


<script>
export default {
  data () {
      return {
        show: true
      }
  }
}
</script>
