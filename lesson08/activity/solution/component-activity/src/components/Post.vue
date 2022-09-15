<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>Category: {{ category }}</h3>
    <p>{{ excerpt }}</p>
    <p>Likes: {{ likes }}</p>
    <button @click="likes++">Like</button>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    author: String,
    title: String,
    category: String,
    excerpt: String,
    likes: Number,
    category: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
