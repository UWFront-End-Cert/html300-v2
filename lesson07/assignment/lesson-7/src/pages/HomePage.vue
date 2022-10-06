<template>
  <div id="app">
    <div class="jumbotron">
      <h1 class="display-4">History and Family</h1>
      <p class="lead">My Great Uncle Gerald N. Croom was a Military Police officer during the second World War. It was an honor when he gave me his WWII album and I hope to honor him by helping it live on. Remembering Gerald (Jerry to friends) and those that fought so fearlessly for the World.</p>
      <hr class="my-4">
      <p>Stationed in Deauville, France</p>
      <p class="lead">
        <!-- Do I use the router-link component for navigation. -->
        <!-- specify the link by passing the `to` prop. -->
        <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
        <a class="btn btn-info btn-lg" href="https://en.indeauville.fr/la-place-morny" role="button">Place Morny, Deauville, France</a> |
        <a class="btn btn-info btn-lg" href="https://www.dday-overlord.com/en/battle-of-normandy/allied-operations/cobra" role="button">D-Day Operation Cobra</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
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
.jumbotron {
  padding: 1rem;
  margin: 0;
}
.jumbotron p.lead {
  margin-left: auto;
  margin-right: auto;
}
.lead {
  margin-left: 2rem;
  margin-right: 2rem;
}
btn {
  text-decoration: none;
}
.img-fluid {
  width: auto;
  height: 350px;
}
</style>
