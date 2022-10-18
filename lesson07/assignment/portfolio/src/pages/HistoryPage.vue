<template>
  <div id="app">
    <h1>World War II History found in the pages of an Album</h1>
    <img class="header" alt="Pointe du Hoc, Cricqueville-en-Bessin, Normandie, Calvados, France By Pascal Moulin " src="../assets/AdobeStock_175334157.jpeg" width=100% height=230px />
    <!-- Accordian Start -->
    <div :class="open ? 'historyPage open' : 'historyPage'" @click="$emit('toggleOpen', toggleOpen)">
      <div class="accordionTitle">{{ historyPage.accordionTitle }}</div>
      <div class="accordionContent">{{ historyPage.accordionContent }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'historyPage',
  props: ['historyPage', 'index', 'open', 'toggleOpen']
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  display: grid
}
h1 {
  margin-left: 2rem;
  margin-bottom: 1rem;
  text-align: left;
}
h3 {
  margin: 40px 0 0;
}
img.header {
  margin-bottom: 3rem;
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
