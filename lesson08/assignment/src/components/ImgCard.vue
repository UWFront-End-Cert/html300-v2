<template>
  <b-col xs="12" md="6" lg="4">
    <b-card-group>
      <!-- Boostrap Card and Binding props -->
      <b-card
        deck
        :title="imgList.title"
        :img-src="imgList.url"
        :img-alt="imgList.alt"
        img-top
        tag="article"
      >
        <b-card-text>{{ imgList.text }}</b-card-text>
      </b-card>
    </b-card-group>
  </b-col>
</template>

<!-- Receiving props / object to be used in the template above -->
<script>
// import mixin
import { imageBorderMixin } from "../mixins/mixin.js";
export default {
  // mixin imageBorderMixin
  mixins: [imageBorderMixin],
  name: "img-card",
  // props and validation
  props: {
    imgList: {
      type: Object,
      requred: true,
    },
    title: {
      type: String,
      required: true,
      default: "Default Title",
    },
    text: {
      type: String,
      required: true,
      default: "Some default text",
    },
    ulr: {
      type: String,
    },
    alt: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
</style> 