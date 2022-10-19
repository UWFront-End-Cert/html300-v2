<template>
  <div id="app">
    <h1>World War II History found in the pages of an Album</h1>
    <img class="header" alt="Pointe du Hoc, Cricqueville-en-Bessin, Normandie, Calvados, France By Pascal Moulin " src="../assets/AdobeStock_175334157.jpeg" width=100% height=230px />
    <div class="account">
        <div class="title">{{ account.title }}</div>
        <div class="answer">{{ account.answer }}</div>
    </div>
  </div>
</template>

<script>
import HistoryPage from './pages/HistoryPage';

export default {
    name: 'HistoryPage',
    Components: {
      HistoryPage
    },
  data() {
    return {
      accounts: [
        {
          title: "World War II Informational Links",
          answer: <a href="http://www.omaha- beach.eu">Omaha Beach Project June 6, 1944</a>,
          open: false
        },
        {
          title: "WWII Newsprint in color",
          answer: "Newspaper clipping found in my uncles scrap album of paintings by Ogden Pleissner. <strong>Assumed titles: ENGLAND'S AIRFIELDS and FLOCKS OF FLYING FORTRESSES.</strong> Source unknown. ./imgs/Englands-Airfields-a.jpg",
          open: false
        },
        {
          title: "The Stars and Stripes Paris Edition | Monday, May 7, 1945",
          answer: "./imgs/front-page.jpg",
          open: false
        }
      ]



    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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
</style>
