<!--this is where to place the main nav for the site, as it will be repeated on each page-->

<template>
  <div id="app">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap" rel="stylesheet">
    </head>
    <div id="nav">
      <div class="main">
        <!--shooting stars when nav element is hovered-->
        <div class="main__shootingstar" id="starshooter1"></div>
        <div class="main__shootingstar" id="starshooter2"></div>
        <div class="main__shootingstar" id="starshooter3"></div>
        <!--twinkling stars background in header area-->
        <div class="main__star-0 main__stars"></div>
        <div class="main__star-1 main__stars"></div>
        <div class="main__star-2 main__stars"></div>
        <div class="main__star-3 main__stars"></div>
        <div class="main__star-4 main__stars"></div>
        <div class="main__star-5 main__stars"></div>
        <div class="main__star-6 main__stars"></div>
        <div class="main__star-7 main__stars"></div>
        <div class="main__star-8 main__stars"></div>
        <div class="main__star-9 main__stars"></div>
      </div>
      <div class="text-center d-sm-none">
        <h1 class="display-5">SPACELAND</h1>
      </div>
    </div>
    <!--nav bar with site name: non-mobile-->
    <!--responsive navbar that navigates across all four pages-->
    <h1 class="display-3 list-inline-item nav__spacelandtitle d-none d-md-block text-center">SPACELAND</h1>
    <nav class="nav navbar navbar-expand-lg">
      <button class="navbar-toggler navbar-dark ml-auto mr-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon border border-white"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
          <router-link to="/" tag="li" class="nav-item active nav__li list-inline-item nav-link nav__link">Home</router-link>
          <router-link to="/attractions" tag="li" class="nav-item active nav__li list-inline-item nav-link nav__link">Attractions</router-link>
          <router-link to="/about" tag="li" class="nav-item active nav__li list-inline-item nav-link nav__link">About</router-link>
          <router-link to="/contact" tag="li" class="nav-item active nav__li list-inline-item nav-link nav__link">Contact</router-link>
      </div>
    </nav>
    <!--desktop nav bar sub-title-->
    <router-view/>
  </div>

</template>

<style>

</style>
