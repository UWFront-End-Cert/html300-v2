<template>
  <!-- Container  -->
  <b-container class="accordion">
    <h2 class="pt-5 display-4 text-muted">{{ header }}</h2>
    <p class="lead mb-4 text-muted">{{ subtitle }}</p>

    <!-- Loop thru an array of items and dynamically generate accordion/cards with content and images  -->
    <b-card no-body class="mb-1" v-for="item in items" v-bind:key="item.id">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <!-- concat item ID to generate unique ID for each accordion/tabs to be toggled separately-->
        <b-button block v-b-toggle="'item-' + item.id" variant="info">{{ item.title}}</b-button>
      </b-card-header>
      <b-collapse :id="'item-' + item.id" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <!-- using dot notation to access data in array of items -->
          <b-card-text>{{ item.desc }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <!-- Card End  -->
  </b-container>
  <!-- Container End -->
</template>

<!-- All content is from variables in the <script> section of the .vue file. -->
<script>
export default {
  data: () => {
    return {
      items: [
        {
          id: 1,
          title: "Aerobic Fitness",
          desc:
            "Aerobic excercise causes you to breath faster and more deeply. The better your aerobic fitness, the more efficiently your heart, lungs and blood vessels transport oxygen throughout your body and the easier it is to complete routine physical tasks. Aerobic activity includes any physical activity that uses large muscle groups and increases heart rate.",
        },
        {
          id: 2,
          title: "Strength Training",
          desc:
            "Strength training is another key component of a fitness training program. It can help you increase bone strength and muscular fitness, as well as helping you to manage or lose weight.",
        },
        {
          id: 3,
          title: "Core",
          desc:
            "The muscles in your abdomen, lower back and pelvis (Your Core Muscles) help protect your back and connect upper and lower body movements. Core strength is a key element of a well-rounded fitness training program.",
        },
        {
          id: 4,
          title: "Balance",
          desc:
            "Balance exercises can help you maintain your balance at any age. Generally a good idea for older adults in particular to include exercises to maintain or improve balance.",
        },
        {
          id: 5,
          title: "Stretching and Flexibility",
          desc:
            "Flexibility is an important aspect of physical fitness, and it's a good idea to include stretching and flexibility activities in a fitness program. Stretching and flexibility can make it easier for you to do many everyday activities as well as increase range of motions.",
        },
      ],
    };
  },
};
</script>

<!--Styling with scss -->
<style scoped lang="scss">
.accordion {
  margin-top: 3.75rem;

  img {
    padding: 0 1rem 1rem 0;
  }
}
</style>