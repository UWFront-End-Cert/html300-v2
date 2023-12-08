<template>
  <!-- <link rel="stylesheet" href="css/style.css" /> -->
  <div id="appcomedy">
    <a href="#" data-toggle="tooltip" title="Hooray!">Events around Seattle</a>
    <!--Tooltip-->
    <div class="row1">
      <div class="item-1" v-for="x in event1" :key="x.name">
        <img class="img-fluid img-thumbnail" v-bind:src="x.url" alt="event one">
        <p class="event-name">{{ x.name }}<br>{{ x.city }}</p>
        <div class="accordion-header" @click="toggleAccordion(x)">
          Details
          <span v-if="x.open">-</span>
          <span v-else>+</span>
        </div>
        <div v-if="x.open" class="accordion-content">
          {{ content }}
        </div>
      </div>
    </div>
    <div class="row1">
      <div class="item-1" v-for="x in event2" :key="x.name">
        <img class="img-fluid img-thumbnail" v-bind:src="x.url" alt="event one">
        <p class="event-name">{{ x.name }}<br>{{ x.city }}</p>

        <div class="accordion-header" @click="toggleAccordion(x)">
          Details
          <span v-if="x.open">-</span>              <!-- Changing UI component with v-if v-else -->
          <span v-else>+</span>
        </div>
        <div v-if="x.open" class="accordion-content">
          {{ content }}
        </div>
      </div>
    </div>
    <div class="row1">
      <div class="item-1" v-for="x in event3" :key="x.name">
        <img class="img-fluid img-thumbnail" v-bind:src="x.url" alt="event one">
        <p class="event-name">{{ x.name }}<br>{{ x.city }}</p>

        <div class="accordion-header" @click="toggleAccordion(x)">
          Details
          <span v-if="x.open">-</span>
          <span v-else>+</span>
        </div>
        <div v-if="x.open" class="accordion-content">
          {{ content }}
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <style scoped src="@./css/style.css">
</style> -->

<script>
  export default {
    name: 'app',
    props: {
      category: {
        type: String,
        default: 'comedy'
      }
    },
    setup(props) {
      console.log(props)
      console.log(props.category)
    },
    data() {
      return {
        event1: this.category === 'drama' ? [{
          name: 'Halloween',
          url: require('/images/5.jpg'),
          city: 'Seattle',
          open: false
        }, {
          name: 'Party Night',
          url: require('/images/4.jpg'),
          city: 'Taccoma',
          open: false
        }] : [{
          name: 'High School Threatre',
          url: require('/images/2.jpg'),
          city: 'Seattle',
          open: false
        }, {
          name: 'College Theater',
          url: require('/images/5.jpg'),
          city: 'Taccoma',
          open: false
        }],
        event2: this.category === 'drama' ? [{
          name: 'Alice in Wonderland',
          url: require('/images/16.jpg'),
          city: 'Redmond',
          open: false
        }, {
          name: 'Pokemon',
          url: require('/images/2.jpg'),
          city: 'Everete',
          open: false
        }] : [{
          name: 'Alice in Wonderland',
          url: require('/images/14.png'),
          city: 'Redmond',
          open: false
        }, {
          name: 'Pokemon',
          url: require('/images/3.jpg'),
          city: 'Everete',
          open: false
        }],
        event3: this.category === 'drama' ? [{
          name: 'Bass Monsters',
          url: require('/images/11.jpg'),
          city: 'Bellevue',
          open: false
        }, {
          name: 'Salsa at Alki beach',
          url: require('/images/5.jpg'),
          city: 'Tukwila',
          open: false
        }] : [{
          name: 'Bass Monsters',
          url: require('/images/16.jpg'),
          city: 'Bellevue',
          open: false
        }, {
          name: 'Salsa at Alki beach',
          url: require('/images/17.jpg'),
          city: 'Tukwila',
          open: false
        }],
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        accordionItems: [{
            title: 'Section 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
            open: false
          },
          {
            title: 'Section 2',
            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
            open: false
          },
          {
            title: 'Section 3',
            content: 'inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ',
            open: false
          },
          {
            title: 'Section 4',
            content: 'perspiciatis veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ',
            open: false
          },
          {
            title: 'Section 5',
            content: 'voluptatem veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ',
            open: false
          },
          {
            title: 'Section 6',
            content: 'incididunt veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ',
            open: false
          },
          {
            title: 'Section 7',
            content: 'dolore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ',
            open: false
          },
        ],
      }
    },
    methods: {
      changeTitle: function (event) {
        this.msg = event.target.value;
      },
      toggleAccordion: function (x) {
        console.log('^^^^^^^');
        console.log(x.open);
        x.open = !x.open;
      }
    }
  }
</script>

<style>
  .accordion-header {
    cursor: pointer;
    background-color: #f0f0f0;
    padding: 10px;
    border: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .accordion-content {
    padding: 10px;
    border: 1px solid #ddd;
  }
</style>