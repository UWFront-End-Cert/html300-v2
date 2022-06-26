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
          <img
            :src="item.imgUrl"
            :alt="item.imgAlt"
            class="img-fluid float-left"
            style="max-width: 22rem;"
          />
          <h3>{{ item.subhead }}</h3>
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
      header: "Accordion",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Eos repudiandae officiis dolores perspiciatis pariatur culpa.",
      items: [
        {
          id: 1,
          title: "Soccer",
          subhead: "Soccer",
          desc:
            "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.",
          imgUrl:
            "https://images.unsplash.com/photo-1528162841823-9e55a8cc2f58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          imgAlt: "Two female soccer players running with the ball",
        },
        {
          id: 2,
          title: "Basketball",
          subhead: "Basketball",
          desc:
            "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.",
          imgUrl:
            "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1367&q=80",
          imgAlt: "Basketball and the hoop",
        },
        {
          id: 3,
          title: "Ice Hockey",
          subhead: "Ice Hockey",
          desc:
            "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.",
          imgUrl:
            "https://images.unsplash.com/photo-1546897134-291f06ff9cd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          imgAlt: "Two hockey players waiting for the game to start",
        },
        {
          id: 4,
          title: "Football",
          subhead: "Football",
          desc:
            "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.",
          imgUrl:
            "https://images.unsplash.com/photo-1485313260896-6e6edf486858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          imgAlt: "A quarterback player is getting ready to throw the football",
        },
        {
          id: 5,
          title: "Boxing",
          subhead: "Boxing",
          desc:
            "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.",
          imgUrl:
            "https://images.unsplash.com/flagged/photo-1575825166477-57b0d9cc9437?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          imgAlt: "Two boxers are going hard on each other",
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