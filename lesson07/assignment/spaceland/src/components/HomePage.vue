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

  </main>
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

</style>
