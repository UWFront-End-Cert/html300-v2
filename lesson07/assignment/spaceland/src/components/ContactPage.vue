<template>
<div class="contact">
  <h2 class="text-danger text-center m-4 p-5">{{ msg }}</h2>

  <body>
    <main class="main">


      <div class="m-5" id="accordion">
        <div class="card m-5">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                E-mail Us
              </button>
            </h5>
          </div>

          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body text-danger text-center">
              Feel free to send us an e-mail via spaceland@gmail.com
            </div>
          </div>
        </div>
        <div class="card m-5">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Call Us
              </button>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body text-danger text-center">
              Feel free to call us at 1 - 800 - SPACELAND
            </div>
          </div>
        </div>
      </div>

      <footer class="main__footer">
        <p>SPACELAND &copy; 2020</p>
      </footer>

    </main>
  </body>
</div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
