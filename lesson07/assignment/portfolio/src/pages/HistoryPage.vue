<template>
  <div id="app">
    <h1>World War II History found in the pages of an Album</h1>
    <img class="header" alt="Pointe du Hoc, Cricqueville-en-Bessin, Normandie, Calvados, France By Pascal Moulin " src="../assets/AdobeStock_175334157.jpeg" width=100% height=230px />

    <!-- Accordian Start -->
    <div :class="open ? 'historyPage open' : 'historyPage'" @click="$emit('toggleOpen', toggleOpen)">
      <div class="accordionTitle">{{ historyPage.accordionTitle }}</div>
      <div class="accordionContent">{{ historyPage.accordionContent }}</div>
    </div>
    <div class="historyPages">
      <historyPage
        v-for="(historyPage, i) in historyPages"
        :historyPage="historyPage"
        :index="i"
        :key="i"
        :open="historyPage.open">
        @toggleOpen=>"toggleOpen"
      </historyPage>
    </div>
  </div>
</template>

<script>
import historyPage from '../pages/HistoryPage';
export default {
  name: 'historyPage',
  props: ['historyPage', 'index', 'open'],
  //name: 'app',
  components: {
    historyPage
  },
  data () {
    return {
      historyPages: [
        {
          accordionTitle: "World War II Informational Links",
          content: "WWII Newsprint in color, The Stars and Stripes Paris Edition, Monday, May 7, 1945",
          open: false
        },
        {
          accordionTitle: "What is it ?",
          content: "Mastered it",
          open: false
        },
        {
          accordionTitle: "Have you liked & subscribed yet?",
          content: "YES",
          open: false
        }
      ]
    }
  },
  methods: {
    toggleOpen: function (index) {
      this.historyPages = this.historyPages.map((historyPage, i) => {
        if (index === i) {
          historyPage.open = !historyPage.open;
        } else {
          historyPage.open = false;
        }

        return historyPage;
      });
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  display: grid
}
h1 {
  margin-left: 2rem;
  margin-bottom: 1rem;
  text-align: left;
}
h3 {
  margin: 40px 0 0;
}
img.header {
  margin-bottom: 3rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #eeeeee;
  font-family: sans-serif;
}

header {
  background-color: #3c3c3c;
  display: flex;
  justify-content: left;
  align-items: left;
  padding: 15px;
}

header h1 {
  color: #eeeeee;
  font-size: 28px;
  font-weight: 300;
  text-transform: uppercase;
}
header h1 span {
  color: #56E388;
  font-weight: 900;
}
.historyPage {
  display: block;
  width: 100%;
  max-width: 768px;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  background-color: #ffffff;
}
.historyPage .accordionTitle {
  position: relative;
  color: #3c3c3c;
  font-size: 20px;
  transition: all 0.4s linear;
}
.historyPage .accordionTitle::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%) rotate(0deg);
  width: 30px;
  height: 30px;
  background-image: url('../arrow-down-mint.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.2s linear;
}
.historyPage.open .accordionContent {
  margin-bottom: 15px;
}

.historyPage.open .accordionContent::after {
  transform: translateY(-50%) rotate(90deg);
}
.historyPage .accordionContent {
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 8px;
  overflow-y: hidden;
  transition:all 0.4s ease-out;
}

.historyPage.open .answer {
  opacity: 1;
  max-height: 1000px;
}

</style>
