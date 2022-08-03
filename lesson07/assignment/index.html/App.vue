<template>
  <div id="app">
<ul>
<li v-for="link in links"> {{link}}</li>
</ul>
<div><button @click="awesome = !awesome">Click Me!</button>
    <h1 v-if="awesome">Plant Portraits are Awesome!</h1>
    <h1 v-else>Don't hesitate, order one now!</h1>>Plant Portraits</h1>
</div>
<p>Odio suspendisse, aliquet pharetra consequat class vestibulum praesent donec sapien amet consectetur integer. Rhoncus curabitur platea urna tempus! Morbi hac habitant habitant urna, turpis conubia volutpat mattis molestie praesent semper est. Amet odio imperdiet neque ante ultricies nulla porttitor torquent. Dignissim erat tristique libero nulla vivamus suspendisse mollis. Ultrices bibendum accumsan arcu ac justo dictum posuere. Netus phasellus viverra eu potenti proin feugiat feugiat? Tellus id aenean eget tortor vel a tempus praesent massa magnis, conubia etiam! Dui dapibus bibendum orci felis ante commodo consectetur consectetur bibendum facilisis.</p>

 <p>Nisi ad leo morbi faucibus accumsan nostra feugiat nullam elit eu id. Ultricies porta nam sem himenaeos. Aliquet fermentum ante ornare fringilla magna litora nisl montes nisi? Hendrerit vehicula magnis tellus fusce ante feugiat. Fermentum posuere imperdiet blandit risus, vel mi elit. Pulvinar lacus auctor interdum, mus facilisis imperdiet rhoncus viverra proin. Phasellus lectus penatibus elit venenatis vulputate consequat per integer. Eleifend facilisis hac augue facilisi cubilia integer porttitor aliquet. Nunc nisl per, tincidunt ultrices. Sollicitudin id senectus vitae semper ante dictum purus ullamcorper. Hac.</p>

 <p>Ligula orci dignissim lobortis sit fringilla rutrum vivamus. Hac eros enim porttitor cubilia nulla suspendisse. Dui nunc facilisis commodo egestas quam vitae inceptos etiam purus hendrerit. Massa augue platea purus cursus. Convallis consectetur gravida a nibh quisque. Nullam, lorem netus cursus. Porttitor, amet non ad fermentum sociosqu metus! Vestibulum massa sociis ut parturient quisque porttitor vulputate odio curabitur integer imperdiet. Quisque lorem habitant donec quam est elementum lacus ante. Nec venenatis nibh habitasse litora mus.</p>

 <p>Quam aliquet quis enim sit pellentesque vestibulum ridiculus. Fusce sed fringilla lectus mauris, consequat habitant? Quis fusce duis hac laoreet praesent natoque augue ultricies erat condimentum penatibus! Morbi hac tempus fringilla. Primis a congue taciti varius inceptos penatibus velit fermentum. Donec egestas gravida nunc augue himenaeos enim potenti tortor. Est pellentesque hendrerit tincidunt netus, sodales velit non pellentesque per maecenas vitae! Laoreet odio sem at venenatis litora class taciti potenti! Penatibus scelerisque penatibus nam cras ridiculus condimentum nostra class himenaeos vestibulum.</p>

 <p>Posuere ipsum malesuada volutpat parturient. Iaculis duis tempor molestie viverra commodo hendrerit tincidunt mattis. Hac etiam eget ut condimentum. Gravida felis consequat, torquent at! Sagittis gravida quam purus odio maecenas scelerisque blandit gravida ante nisl. Quam hac ligula, felis vestibulum cras vitae. Tristique est purus arcu viverra varius venenatis sed netus. Nunc gravida sem!</p>

<footer class="footer">
  <ul>
    <li><a href="./index.html">About</a><a href="./portfolioimages.html">Portfolio</a><a href="processaccordian.html">Process</a><a href="contactgrid.html">Book a Consultation</a></li>
  </ul>
</nav>
<p><small>© 2022 Plant Portraits LLC | Seattle, WA</small></p>
</footer>
</div>
</template>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"></script>

<script>
import app.vue from './vue.js/src/index.html/app.vue'

export default {
  name: 'App',
  data() {
  return {
  links: ['Home', 'Portfolio', 'Process', 'Book a Consultation'],
  show: true,
  }
  }
  }
</script>

<style>

*{box-sizing: border-box;}
body {
  font-family: 'Calibri', sans-serif;
   color: #393939;
   line-height: 1.8;
   padding-left: 60px;
}

<!--add vari.-->
$primary: #339966
$accent: #33cccc

<!--mixins-->
=border-radius($radius)
  -webkit-border-radius: $radius
  -ms-border-radius: $radius
  border-radius: $radius

<!--implemented vari.-->
body
background: $primary
color: $accent
div
background: $primary
+border-radius(10px)

h3 {padding-left: 20px;}
h4 {padding-left: 20px;}
p {padding-left: 20px;}

<!--header cont.-->
header {
   height: 270px;
   background-color: #339966;
   padding-left: 60px;
   display: flex;
   color: white;
}

header h1 {
  font-size: 45px;
  background-color: #339966;
}
header p {
   font-size: 22px;
   line-height: 1.5;
   font-style: italic;
 }

 <!--transitions and transformation for n.bar-->
 *,
 *:before,
 *:after{
   padding: 0;
   margin: 0;
   box-sizing: border-box;
 }

nav {
   background-color: #ebebeb;
   height: 60px;
   padding-left: 10px;
   display: flex;

}
.topnav {
  float: left;
  text-align: left;
  padding: 0px 0px;
  text-decoration: none;
}

nav ul li a{
  position: relative;
  text-decoration: none;
}

nav ul li a::before{
  content: "";
  position: absolute;
  background-color: navy;
  height: 3px;
  width: 0px;
  bottom: -15px;
  transition: 0.5s;
  transform-origin: left;
}

nav ul li a:hover:before{
  width: 100%;
  text-align: left;
}
nav ul li {
   display: inline;
   line-height: 60px;
}
nav ul li a {
   color: black !important;
   font-weight: bold;
   margin-right: 20px;
   font-size: 18px;
   text-decoration: none;
 }


nav ul li:not(:last-child):after {
   content: "/";
   position: relative;
   left: -5px;
}

footer {
   clear: both;
   background-color: #393939;
   height: 350px;
   text-align: center;
   color: #fff;
   display: flex;
}

footer {
   position: relative;
   left: 0;
   height: 350px;
   width: 100vw;
   background-color: #393939;
   z-index: -10;
   text-align: center;
   display: inline-block;
}

footer img {
   margin-bottom: 20px;
   display: inline-block;
}

footer {
   list-style-type: none;
   margin-top: 20px;
   margin-bottom: 20px;
   display: inline-block;
}

footer nav {
     color: white !important;
     background-color: #393939;
     display: inline-block;
     line-height: 60px;
  }

footer nav ul li a {
     color: white !important;
     font-weight: bold;
     margin-right: 20px;
     font-size: 14px;
     display: inline-block;
}
small {
   font-weight: lighter;
  display: inline-block;
}

.hidden {
  position: relative;
  left: -10000px;
  top: auto;
}
.hidden:focus {
  left: 0;
}
<!--code reference https://www.youtube.com/watch?v=aswRKAjjWuE-->
