<template>
<div class="about">
  <h2 class="text-danger text-center m-4 p-5">{{ msg }}</h2>

  <body>
    <main class="main">
      <div class="row">
        <!--sidebar html-->
        <div class="d-none d-md-block col-xl-5 col-lg-8 col-sm-7 col-12 p-5">
          <h3>Calling All Space Cadets</h3>
          <p class="pb-3">Are you interesting in becoming a space cadet? Join us at Saturn's Rings to learn more about this opportunity!</p>
          <img class="w-50 pb-5 mx-auto d-block" src="https://images.unsplash.com/photo-1494022299300-899b96e49893?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Spaceman floating in space">
          <h3>Fresh Space Ice Cream</h3>
          <p class="pb-3">We just received a fresh batch of fresh space ice cream. We have Martian Mint, Neptuneipolitan, Crater Chip, and many more. The Space Scoop is OPEN everday between 8am and 8pm.</p>
          <img class="w-50 mx-auto d-block" src="https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Ice cream popsicles">
        </div>
        <!--content html-->
        <div class="col-xl-7 col-lg-4 col-sm-5 col-12 p-5">
          <img class="w-75 pb-5 mx-auto d-block" src="https://images.unsplash.com/photo-1596827414868-2e4478fc13d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="A crowd by a spaceship">
          <p>Spaceland is a place where everyone can escape reality and enjoy the mysterious, yet calming nature of outer space. Guests can take a virtual tour of the stars, participate in a zero gravity simulation, and watch photos of space -- all
            from the comfort of their home. Spaceland was built in October 2020 - a time in which the public needed virtual escape opportunities.</p>
          <h3>Mission</h3>
          <p>Our mission is simple: embrace the unknown. Space can be scary for some people, yet it's vast expansiveness can provide ample opportunities to explore life.</p>
          <h3>Partnerships</h3>
          <p>We are actively seeking opportunites to pair with organizations focusing on STEM education among BIPOC communities.</p>
        </div>
      </div>

    </main>
  </body>
</div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
