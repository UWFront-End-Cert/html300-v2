// import { Carousel } from 'mdb-ui-kit';

$(document).ready(function(){
  // Activate Carousel with listed interval
  $('.carousel').carousel({interval: 700, pause: "hover", keyboard:true});

  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#carousel-1").carousel(0);
  });
  $(".item2").click(function(){
    $("#carousel-1").carousel(1);
  });
  $(".item3").click(function(){
    $("#carousel-1").carousel(2);
  });
  $(".item4").click(function(){
    $("#carousel-1").carousel(3);
  });

  // Enable Carousel Controls
  $(".carousel-control-prev").click(function(){
    $("#carousel-1").carousel("prev");
  });
  $(".carousel-control-next").click(function(){
    $("#carousel-1").carousel("next");
  });
});
