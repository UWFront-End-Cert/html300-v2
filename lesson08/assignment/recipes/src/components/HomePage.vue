<template>
    <div id="app">
      <!-- Jumbotron -->
      <div class="jumbotron">
        <h1 class="display-4 lead text-center">Welcome to my recipe book!</h1>
        <p class="lead text-center">By popular request, this will have all the recipes that I have inherited or made myself over the years!</p>
      </div>
      <!-- End of Jumbotron  -->
  
      <!-- Main content  -->
      <div class="container-x d-inline">
        <main class="main">

            <!-- Example recipes -->
            <section class="mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <img src="../assets/enchiladas.jpg"
                                alt="plated enchiladas conver in cheese, sauce and veggies" class="img-fluid">
                        </div>
                        <div class="mt-5 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                            <h2 class="text-center">Delicious green chili chicken enchiladas</h2>
                                <p class="text-center">
                                    Easy chicken enchiladas made from roticery chicken with and easy to make green chili sauce ready in 30 min.
                                </p>
                                <div class="container">
                                    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                                        <a class="navbar-brand" href="#">Link to Recipe</a>
                                    </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mt-5">
                <div class="container">
                    <div class="row d-flex flex-row-reverse">
                        <div class="col-lg-6">
                            <img src="../assets/bolognese.jpg"
                                alt="bolognese sause topped on thick noodles" class="img-fluid">
                        </div>
                        <div class="mt-5 col-lg-6 d-flex flex-column align-items-center justify-content-center">
                            <h2 class="text-center">Stay in tune with the market</h2>
                            <p class="text-center">
                                Slow cooker bolognese sauce!  Toss into the crock pot in the morning, go about your day and come home to delicoius Italian dinner!
                            </p>
                            <div class="container">
                                <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                                    <a class="navbar-brand" href="#">Link to Recipe</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
      </div>

      <div id="app">
          <h4>Do these look delicious?</h4>
  
          <input v-model = "good_taste" value= "yes" type="radio" id="yes" />
          <label for="yes"> Yes :D</label><br/>
          <input v-model = "good_taste" value= "no" type="radio" id="no" />
          <label for="no"> No. >:|</label><br/>
  
          <p v-if="good_taste === 'yes'" class="reponse">Noice!</p>
          <p v-else-if="good_taste === 'no'" class="reponse">Make your own then!!!</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    props: {
      msg: String
    },
    data() {
      return {
        good_taste: ''
      }
    }
  };
  
  </script>
  
  <style lang="scss">
  // Style for v-if-v-else statement
  label {
    padding-right: 30px;
  }
  
  .reponse {
    font-size: 16px;
    margin-top: 20px;
    text-align: center;
  }
  
  p {
    text-align: left;
    margin-left: 2rem;
  }
  
  h3 {
    margin: 40px 0 0;
    text-align: left;
  }
  
  // Style for navigation
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
  

  .jumbotron {
    padding: 1rem;
    margin: 0;
  }
  
  .jumbotron p.lead {
    margin-left: auto;
    margin-right: auto;
  }
  
  .caption div {
    overflow: hidden;
    max-width: 480px;
    align-items: flex-start;
    text-align: center;
  }
  
  p.custom {
    margin-bottom: .1rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  
  .display-2 {
    margin-top: 0;
    margin-bottom: .5rem;
  }
  .lead {
    margin-left: 2rem;
    margin-right: 2rem;
    text-align: left;
  }
  
  btn {
    text-decoration: none;
  }
  
  .img-fluid {
    width: auto;
    height: 350px;
  }
  
  </style>