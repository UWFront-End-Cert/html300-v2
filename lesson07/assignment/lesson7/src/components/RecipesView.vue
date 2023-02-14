<template>
  <div id="app">
    <main class="main__recipes">

      <!-- recipe of the day card (same as index) -->
      <div class="container">
        <div class="row">
          <div class="col-12 p-5">
            <article class="card">
              <a class="card__link" href="recipe.html">
                <h3 class="card__title">Today's Recipe</h3>
                <h4 class="card__subtitle">Seeded Rye Sourdough Boule</h4>
                <img class="card__img" src="@/assets/bread-2.jpeg" alt="bread goes here">
            </a>
            </article>
          </div>
        </div>

        <!-- a bottom row with more recipes -->
        <div class="row">
          <div class="col-lg-8 col-12 p-3">
            <article class="recipes">
              <h3 class="recipes__title">Base Recipes</h3>
              <ul>
                <li class="recipes__item" v-for="recipe in baseRecipes" v-bind:key="recipe.id">
                  <a :href="recipe.link" class="recipes__link"> >> {{ recipe.name }}</a>
                </li>
              </ul>

            </article>
          </div>

          <!-- extra recipes card opens when button is clicked -->
          <div class="col-lg-8 col-12 p-3">
            <article class="recipes" v-if="!show">
              <h3 class="recipes__title">More Recipes</h3>
              <ul>
                <li class="recipes__item" v-for="recipe in xRecipes" :key="recipe.id">
                  <a :href="recipe.link" class="recipes__link"> >> {{recipe.name}}</a>
                </li>
              </ul>
            </article>

            <!-- button that hides or shows more recipes -->
            <div class="recipes__button-wrap">
              <button class="recipes__button" @click="buttonText" ref="buttonToggle">See More</button>
            </div>
          </div>
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
        show: true,

        // data for base and extra recipes
        baseRecipes: [
          {
            name: "Base Sourdough",
            link: "#"
          },
          {
            name: "Base White Bread",
            link: "#"
          },
          {
            name: "Base Focaccia",
            link: "#"
          }
        ],
        xRecipes: [
          {
            name: "Spiced Rye",
            link: "#"
          },
          {
            name: "Poolish White Bread",
            link: "#"
          },
          {
            name: "Naan",
            link: "#"
          },
          {
            name: "Pita",
            link: "#"
          }
        ]
      }
    },
    methods: {
      // button to show/hide recipes and change the button text
      buttonText: function () {
        this.show = !this.show;
        this.$refs.buttonToggle.innerText = this.show?'See More':'Hide Recipes';
      }
    }
  }
</script>