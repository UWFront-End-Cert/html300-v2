<template>
<div id='app'>
  <!-- All content comes from an object and is implement using a v-for. -->
  <div id='app'>
    <div v-for="(item, id) in items" :key="id" class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info">{{ item.artist }}</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
            <b-card-text>{{ item.text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [{
          artist: "Nancy Callan",
          text: "Background info about artist"
        },

        {
          artist: "Lino Tagliapietra",
          text: "Background info about artist"
        },

        {
          artist: "James Mongrain",
          text: "Background info about artist"
        }
      ]
    }
  }
}
</script>
