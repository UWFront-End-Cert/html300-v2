<template>
  <div id="app">
<ul>
<li v-for="link in links"> {{link}}</li>
</ul>
<div class=background><h1>Process</h1>
</div>

<ul class="accordian">
  <li v-for="item in menu">
  {{item.name}}
  {{item.description}}
  </li>
  </ul>

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
import app.vue from './vue.js/src/processaccordian/app.vue'

export default {
  name: 'App',
  data() {
  return {
  links: ['Home', 'Portfolio', 'Process', 'Book a Consultation'],
  menu:[
    {name: 'Step 1: Consultation', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {name: 'Step 2: Photo Session', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {name: 'Step 3: Editing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
    ],
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
