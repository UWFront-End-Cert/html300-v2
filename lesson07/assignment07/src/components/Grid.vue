<template>
<main class="main"> 
  <div class="container text-center"> 
    <div class="row">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <div class="col-md-8">
          <h2>{{ item.title }}</h2>
          <h3>{{ item.name }}</h3>
          <img
            :src="item.imgLink"
            :alt="item.name"
            class="img-thumbnail"
          />
          <p> {{ item.info }}</p>
        </div>
        <div class="col-6 col-md-4">
          <h2>{{ item.title }}</h2>
          <h3>{{ item.name }}</h3>
          <img
            :src="item.imgLink"
            :alt="item.name"
            class="img-thumbnail"
          />
          <p> {{ item.info }}</p>
        </div>
    </div>
    <!-- For all columns below they start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
      <div class="row">
        <div class="col-6 col-md-4">
          <h2>{{ item.title }}</h2>
          <h3>{{ item.name }}</h3>
          <img
            :src="item.imgLink"
            :alt="item.name"
            class="img-thumbnail"
          />
          <p> {{ item.info }}</p>
        </div>
        <div class="col-6 col-md-4">
          <h2>{{ item.title }}</h2>
          <h3>{{ item.name }}</h3>
          <img
            :src="item.imgLink"
            :alt="item.name"
            class="img-thumbnail"
          />
          <p> {{ item.info }}</p>
        </div>
        <div class="col-6 col-md-4">
          <h2>{{ item.title }}</h2>
          <h3>{{ item.name }}</h3>
          <img
            :src="item.imgLink"
            :alt="item.name"
            class="img-thumbnail"
          />
          <p> {{ item.info }}</p>
        </div>
    </div>
  </div>
</main>
</template>

<script>
export default {
  name: 'GridBoot',
  data() {
    return {
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

<style scoped>

</style>
