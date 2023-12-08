<template>
  <!-- <link rel="stylesheet" href="css/style.css" /> -->
  <div id="app">
    <b-col md="12" lg="6">  <!--responsive for small and large screens-->
    <div class="grid-container">
      <header class="header-grid">
        <div class="header-left">
          <div class="header-left-1">
            <h1>BOOK MY EVENT</h1>
          </div>
          <div class="header-left-2">
            <form method="get">
              <input type="text" name="q" placeholder="search for events">
              <input type="submit" value="search">
            </form>
          </div>
        </div>
        <div class="header-right">
          <label class="lbl-header"> Select Location : {{ defaultcity }}</label><br>
          <!-- <v-select :options="cities" v-model="city.name" label="Select City"></v-select> -->
          <v-select v-model="defaultcity" :items="cities" :options="cities" :clearable="false" :searchable="false"
            label="Select City"></v-select>
            <Dropdown title="Services" :items="services" />
        </div>
      </header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-ul">
            <li class="nav-item">
              <router-link class="nav-link" to="/events/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/events/drama">Drama</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/events/comedy">Comedy shows</router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="kids.html">Kids</a> -->
              <!-- <router-link :to="{ name: 'bar', params: { id: 123 }}">Kids</router-link> -->
              <router-link class="nav-link" to="/events/kids">Kids</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <section>
        <h3>Filters</h3>
        <nav>
          <ul>
            <li>Language
              <ul class="menu-1">
                <li class="menu-1__li">English</li>
                <li>Spanish</li>
                <li>French</li>
                <li>Japanese</li>
                <li>Korean</li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>

      <aside>
        <router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>
      </aside>
      <footer>
        <p class="footer-text"><strong>Book My Event</strong> <br>Seattle, Bellevue and Tacoma <br>111 Pike place
          market, Seattle, WA <br><small>All rights reserved</small></p>
      </footer>
    </div>

    </b-col>
  </div>
</template>
<!-- <style scoped src="@./css/style.css">
</style> -->

<script>
  import Dropdown from '../components/Dropdown';
  export default {
    name: 'app',
    components: {
      Dropdown
  },
    data() {
      return {
        cities1: [{
            name: 'Seattle'
          },
          {
            name: 'Bellevue'
          },
          {
            name: 'Tacoma'
          }
        ],
        cities: [
          'Seattle',
          'Bellevue',
          'Tacoma'
        ],
        defaultcity: '',

      }
    },
    methods: {
      changeTitle: function (event) {
        this.msg = event.target.value;
      }
    }
  }
</script>

/* <style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1,
  h2 {
    font-weight: inherit;
    font-style: italic;
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
</style> */