<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/gallery">Gallery</router-link> |
      <router-link to="/history">History</router-link> |
      <router-link to="/remembrance">Remembrance</router-link> |
      <router-link to="/normandy">Normandy France</router-link>
    </nav>
    <router-view></router-view>
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
import historyPage from './pages/HistoryPage';

export default {
  name: 'app',
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

<style>
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
background-image: url('./arrow-down-mint.svg');
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.img-fluid {
  width: auto;
}
svg {
  overflow: hidden;
  vertical-align: middle;
}
/* thumbnail images */
.bd-example {
  position: relative;
  padding: 0rem;
  margin: 0 1rem 0;
  border: solid #f8f9fa;
  border-width: .2rem 0 0;
}

</style>
