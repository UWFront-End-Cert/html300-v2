<template>
<div class="contact">
  <h2 class="text-danger text-center m-4 p-5">{{ msg }}</h2>

  <body>
    <main class="main">
    <h3 class="text-primary text-center m-4 p-6">Please feel free to reach out through the following:</h3>
    <ul class="text-center list-inline">
      <li class="list-inline-item p-3" v-for="item in items" v-bind:key="item">
        {{item.text}}
        <div v-if="item.checked" class="text-warning">Available</div>
        <div v-else>Not Availavble</div>
      </li>
    </ul>
      <div class="m-5" id="accordion">
        <div class="card m-5">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Contact Us
              </button>
            </h5>
          </div>

          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body text-danger text-center">
              <p class="card-body text-danger text-center" v-for="info in contact" v-bind:key="info">{{ info.info }}</p>
            </div>
          </div>
        </div>
      </div>

    </main>
  </body>
</div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    msg: String
  },
  data () {
    return {
      contact: [
        {info: 'Feel free to send us an e-mail via spaceland@gmail.com'},
        {info: 'Feel free to call us at 1 - 800 - SPACELAND'}
      ],
      items: [
      {text: 'Email', checked: true},
      {text: 'Phone', checked: true},
      {text: 'Chatbot', checked: false},
      ],
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
