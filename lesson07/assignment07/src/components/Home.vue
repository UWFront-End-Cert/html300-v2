<template>
<main class="container"> 
    <div>
      <h2>{{ item.title }}</h2>
      <h3>{{ item.name }}</h3>
      <img
        :src="item.imgLink"
        :alt="item.name"
        class="img-thumbnail"
      />
      <p> {{ item.info }}</p>
    </div>
    <div class="input-form">
      <p>
        <input v-model="message">
      </p>
      <p> "{{ message }}" </p>
    </div>

  <p v-if="true"></p>
  <p v-if="false"></p>
  
</main>
</template>

<script>
export default {
  name: 'HomeContent',
  data() {
    return {
          message:'Leave your review here...  ',
          item:                     
          {
              title:"Trending Tonight",
              name:"Eyes Wide Shut (1999)",
              imgLink:"http://deep-focus.com/images/1280_EWS.jpg",
              info: "Eyes Wide Shut is a 1999 erotic mystery psychological drama film directed, produced, and co-written by Stanley Kubrick. It is based on the 1926 novella Traumnovelle by Arthur Schnitzler, transferring the story's setting from early twentieth-century Vienna to 1990s New York City. The plot centers on a doctor who is shocked when his wife reveals that she had contemplated having an affair a year earlier. He then embarks on a night-long adventure, during which he infiltrates a masked orgy of an unnamed secret society."

          }     
            
        }
    }
}
</script>

<style>


</style>
