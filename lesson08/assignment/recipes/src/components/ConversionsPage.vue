<template>
  <div id="app">
    <div>
      <h1 class="display-4 lead text-center">Common Conversions</h1>
    </div>
    <div class="accordion" :id="'accordionExample'+id" v-for="(conversion, id) in conversions" :key="id" >
      <div class="card">
          <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                  <button class="btn btn-link text-dark text-decoration-none collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {{ conversion.title }} 
                  </button>
              </h2>
          </div>

          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" :data-parent="'#accordionExample'+id">
              <div class="card-body">
                {{ conversion.text }}
              </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['account', 'index', 'open'],
  data() {
    return {
      conversions: [
        {
          id: 1,
          title: "Imperial Conversions",
          text: "1 tablespoons = 3 teaspoons",
          open: true
        },
        {
          id: 2,
          title: "Metric Conversions",
          text: "1 ml = 1g",
          open: true
        },
        {
          id: 3,
          title: 'Imperial to Metric Conversions',
          text: "1 cup = 240 ml",
          open: true
        }
      ]
    }
  },
  methods: {
    toggleOpen: function (index) {
      this.accounts = this.accounts.map((account, i) => {
        if (index === i) {
          account.open = !account.open;
        } else {
          account.open = false;
        }
        return account;
      });
    }
  }
};

</script>

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