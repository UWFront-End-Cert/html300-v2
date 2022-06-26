<template>
  <!-- Container -->
  <b-container class="section-grid grid">
    <h2 class="pt-5 display-4 text-muted">{{ header }}</h2>
    <p class="lead mb-4 text-muted">{{ subtitle }}</p>

    <!-- Container / Grid Columns -->
    <b-container>
      <b-row>
        <!-- Loop thru an array of contents and dynamically generate columns with content  -->
        <b-col
          v-for="content in contents"
          v-bind:key="content.id"
          xs="12"
          sm="12"
          md="4"
          lg="3"
          xl="4"
          class="bg-warning p-4 border"
        >{{ content.text }}</b-col>
      </b-row>
    </b-container>
    <!-- Container / Grid Columns End -->

    <!-- Container / Grid Rows -->
    <b-container class="bv-example-row mb-2">
      <h2 class="pt-5 display-4 text-muted">{{ subheader }}</h2>
      <p class="lead mb-4 text-muted">{{ subtitle }}</p>
      <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="6" class="bg-info">
        <!-- Loop thru an array of contents and dynamically generate columns with content  -->
        <b-col
          class="border p-3"
          v-for="content in contents"
          v-bind:key="content.id"
        >{{ content.text }}</b-col>
      </b-row>
    </b-container>
    <!-- Container / Grid Rows End -->
  </b-container>
  <!-- Container End -->
</template>

<!-- All content is from variables in the <script> section of the .vue file. -->
<script>
export default {
  data: () => {
    return {
      header: "Grid Columns",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Eos repudiandae officiis dolores perspiciatis pariatur culpa.",
      subheader: "Grid Rows",
      contents: [
        {
          id: 1,
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit, Eos repudiandae officiis dolores perspiciatis pariatur culpa.",
        },
        {
          id: 2,
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit, Eos repudiandae officiis dolores perspiciatis pariatur culpa.",
        },
        {
          id: 3,
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit, Eos repudiandae officiis dolores perspiciatis pariatur culpa.",
        },
        {
          id: 4,
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit, Eos repudiandae officiis dolores perspiciatis pariatur culpa.",
        },
        {
          id: 5,
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit, Eos repudiandae officiis dolores perspiciatis pariatur culpa.",
        },
        {
          id: 6,
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit, Eos repudiandae officiis dolores perspiciatis pariatur culpa.",
        },
      ],
    };
  },
};
</script>

<!--Styling with scss -->
<style scoped lang="scss">
.grid {
  margin-top: 3.75rem;
}
</style>