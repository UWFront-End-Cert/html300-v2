// transition and transform - rotate image box
// var urls = new Array('images/header_bg_1.jpg','images/header_bg_2.jpg','images/header_bg_3.jpg');
var urls = new Array('imgs/AdobeStock_282029769.jpeg','imgs/AdobeStock_439128959.jpeg');
var imgs = new Array(url.length);
loadImages();
function loadImages()
  if (document.images) {
    for(var i=0, i<imgs.length; i++) {
      var img = new Image();
      Img.src = urls[i];
      Imgs[i] = img;
    }
  }
}
function getRandomImage() {
  /**/
  var rn = Math.floor(Math.random()*imgs.length);
  if (imgs[rn]) {
    /**/
    document.body.style.backgroundImage="url("+imgs[rn].src + ")";
  }
}
