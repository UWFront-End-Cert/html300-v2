<template>
  <main class="main">

    <!-- an FAQ accordion, in which each element answers an FAQ -->
    <div v-for="(item, index) in faqs" v-bind:key="item.id" class="accordion" id="accordionExample">

        <div class="card-header" >
          <h2 class="mb-0">
            <button class="btn btn-block text-left collapsed"   type="button" data-toggle="collapse" :data-target="'#collapse' + index" aria-expanded="false" aria-controls="collapse">
              <h4>{{ item.question }}</h4>
            </button>
          </h2>
        </div>
    
        <div :id="'collapse' + index" class="collapse" :class="{ show: index === 0 }" aria-labelledby="heading" :data-parent="'#collapse' + index">
          <div class="card-body">
            {{ item.answer }}
          </div>
        </div>
    </div>
    
  </main>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        // data for the accordion
        faqs: [
          {
            question: "Who's this site for?", 
            answer: "Anybody can use it, but it's aimed specifically at people working from home on computers who want to bake bread as they work (you get to take brief breaks every half-hour or so). There are about a million bread recipes out there, so instead of adding a few more we start with some stalwarts, adapted from Tartine's sourdough, Ken Forkish's Saturday White Bread, and Samin Noserat's foccaccia, etc. Then, with a bit of trial and error, you can adjust them to your tastes and home kitchen."
          },
          {
            question: "What's the best way to use this site?",  answer: "Create an account. Try one of the recipes. Take notes in the baker's log. What went wrong? What worked well? Adjust and bake again. As you keep playing with the recipe, feel free to use the site's dough calculator (for tweaking hydration, etc). Keep iterating until you have a personal bread. Then start again with a different variation."
          },
          {
            question: "But do I need an account?", 
            answer: "No, you can still use the baker's timer, calculator, and recipes without one."
          } 
        ]
      }
    }
  }
</script>