<!-- Image component -->
<template>
    <div :style="{ border: borderStyle }"     @click="toggleBorder"
      
       >
      <img :src="src" :alt="alt" :title="title" class="img-fluid">
      <p class="event-name">{{ title }}<br>{{ city }}</p>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { ImageBorderMixin } from "./../../lib/ImageBorderMixin"; 

  
  export default defineComponent({
    mixins: [ImageBorderMixin],

    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
    }
  });
  </script>