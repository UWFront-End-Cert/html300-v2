<template>
<div class="hello">
  <div class="main__h1 d-none d-md-block m-3">
    <h1 class="text-center display-5">{{ msg }}</h1>
  </div>

<body>
  <main class="main">


    <div class="main__moon d-flex justify-content-center mt-5 mb-5 pt-5 pb-5">
      <p class="main__moon__p d-flex align-items-center p-0.5">ORBIT SPACE THIS SEASON!<br/>TICKETS START AT $95</p>
    </div>

    <div class="d-flex main__end mb-5">
      <div class="d-flex flex-wrap justify-content-center p-1" data-toggle='tooltip' data-placement='top' title='Check back soon for more details!'>
        <p>CAMP ON MARS WITH FRIENDS</p>
        <img class="w-75" src="https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="An image of camping on mars">
      </div>
      <div class="d-flex flex-wrap justify-content-center p-1" data-toggle='tooltip' data-placement='top' title='Check back soon for more details!'>
        <p>TALK TO AN ASTRONAUT</p>
        <img class="w-75" src="https://images.unsplash.com/photo-1457979406492-d1e6b97f3f55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="An image of an astronaut in space suit">
      </div>
      <div class="d-flex flex-wrap justify-content-center p-1" data-toggle='tooltip' data-placement='top' title='Check back soon for more details!'>
        <p>WATCH THE SPACE RACE</p>
        <img class="w-75" src="https://images.unsplash.com/photo-1563955764659-fb0b2725fc1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="An image of a vintage television">
      </div>
    </div>

    <footer class="main__footer">
      <p>SPACELAND &copy; 2020</p>
    </footer>

  </main>
  <!--<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  <script src="scripts/script.js"></script>-->
</body>
</div>
</template>

<script>
export default {
  name: 'Home',
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
