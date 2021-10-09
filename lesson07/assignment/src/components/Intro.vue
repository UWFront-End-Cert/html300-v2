<!-- HTML goes here -->
<template>
    <div class="intro">
      <h1 class="row">{{ msg }}</h1>
      <p class="col-10 pb-5">Sometimes sweet, sometimes tart. Always nutritious and delicious.</p>
      <img src="../assets/CabbagePile.jpg" width=100% alt="A pile of cabbage">
    </div>
</template>

<!-- Javascript goes here -->
<script>
export default {
  name: 'Intro',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
