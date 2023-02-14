
<template>
  <div class="app">
    <main class="main">
      <div class="grid">
      <!-- A timer with two buttons and tooltips explaining them -->
        <div class="grid__timer">
          <article class="timer">
          <h3 class="timer__header">Baker's Timer</h3>
          <p class="timer__numbers">{{ minutes }}:{{ String(seconds).padStart(2, "0") }}</p>
          <div class="timer__button-container">
            <button type="button" class="timer__s-button"  data-toggle="tooltip" data-placement="top" title="Click here to start the 30min timer" @click="startTimer" v-if="!timerStarted">Start Timer</button>
            <button type="button" class="timer__s-button"  data-toggle="tooltip" data-placement="top" title="Click here to stop the 30min timer" @click="stopTimer" v-else>Stop Timer</button>
            <button type="button" class="timer__a-button"  data-toggle="tooltip" data-placement="bottom" title="Click here to adjust timer intervals">Adjust Time</button>
          </div>
          </article>
        </div>

        <!-- recipe card -->
        <div class="grid__card">
          <article class="card">
            <a class="card__link" href="recipe.html">
              <h3 class="card__title">Today's Recipe</h3>
              <h4 class="card__subtitle">Seeded Rye Sourdough Boule</h4>
              <img class="card__img" src="@/assets/bread-2.jpeg" alt="bread goes here">
          </a>
          </article>
        </div>

        <!-- baker's calculator -->
        <div class="grid__calc">
          <article class="calc" >
            <h3 class="calc__title">Baker's Calculator</h3>

            <!-- an input field for the calculator; contains two inputs (grams, and percent, with the symbols for each as a span element after) -->
            <div class="calc__outer-wrap" v-for="quantity in quantities" v-bind:key="quantity.id" >
              <div class="wrap-two" v-show="quantity.show">
              <h6 class="calc__subtitle"> {{ quantity.name }}</h6>
              <div class="calc__wrap">
                <div class="calc__inner-wrap">
                  <input class="calc__input" type="text" :name="quantity.id"  :value="quantity.grams" :id="quantity.id">
                  <span class="calc__grams">g</span>
                </div>

                <div class="calc__inner-wrap calc__percent">
                  <input class="calc__input" type="text" :name="quantity.pId" :value="quantity.percent" :id="quantity.pId">
                  <span class="calc__grams">%</span>
                </div>
              </div>
            </div>
            </div>
            
            <div class="calc__button-container">
              <button type="button" name="button" class="calc__button">Add Ingredient</button>
            </div>
          </article>
        </div>
      </div>

    </main>


</div>
</template>

<script>
    export default {
    name: 'app',
    data () {
      return {
        // set values for the timer (will expand on later)
        minutes: 30,
        seconds: 0,
        counter: 0,
        intervalId: null,
        timerStarted: false,
        
        // the calculator's default data, including a "show" quality for the "add ingredient" element I'll add later
        quantities: [
          {
            name: "Flour",
            id: "flour",
            pId: "p-flour",
            grams: 500,
            percent: 100,
            show: true
          },
          {
            name: "Water",
            id: "water",
            pId: "p-water",
            grams: 375,
            percent: 75,
            show: true
          },
          {
            name: "Salt",
            id: "salt",
            pId: "p-salt",
            grams: 10,
            percent: 2.5,
            show: true
          },
          {
            name: "Yeast",
            id: "yeast",
            pId: "p-yeast",
            grams: 2.5,
            percent: .5,
            show: true
          },
          {
            name: "Leaven",
            id: "leaven",
            pId: "p-leaven",
            grams: 75,
            percent: 15,
            show: false
          }
        ]
      }
      
    },
    methods: {
      // a functions to start and stop the timer while changing button text
      startTimer() {
      if (!this.intervalId) {
        this.intervalId = setInterval(() => {
          if (this.seconds > 0) {
            this.seconds--
          } else if (this.minutes > 0) {
            this.minutes--
            this.seconds = 59
          } else {
            this.resetTimer()
            alert("Fold your dough!")
            this.counter++;
          }
        }, 1000)
      }
      this.timerStarted = !this.timerStarted;
    },
    stopTimer() {
      clearInterval(this.intervalId)
      this.intervalId = null
      this.timerStarted = false;
    }

  }
}
</script>