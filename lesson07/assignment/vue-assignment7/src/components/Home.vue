<template>
  <b-jumbotron
    class="rounded-0 text-light text-center d-flex justify-content-center align-items-center"
  >
    <!-- background image  -->
    <div class="img-overlay"></div>
    <b-container class="p-0">
      <button @click="easterEgg = !easterEgg">A Little Fun</button>
      <h1 v-if="easterEgg" class="display-3">{{ title }}</h1>
      <h1 v-else>Just having a little fun :D</h1>
      <p class="lead">{{ subtitle }}</p>
        <b-container class="justify-content-md-center">
          {{ message }}
        </b-container>
    </b-container>
  </b-jumbotron>
</template>


<script>
export default {
  data: () => {
    return {
      easterEgg: true,
      title: "BOOTSTRAP/VUE Assignment!",
      subtitle:
        "Welcome to the lesson 7 version of this website! Same pages! Different Coding!",
    };
  }
}
</script>

<style scoped lang="scss">
.lead {
  max-width: 50%;
  margin: 0 auto 1rem;
}
</style>