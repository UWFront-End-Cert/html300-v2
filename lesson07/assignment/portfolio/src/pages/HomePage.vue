<template>
  <div id="app">
    <!-- Jumbotron -->
    <div class="jumbotron">
      <h1 class="display-4">History and Family</h1>
      <p class="lead">My Great Uncle Gerald N. Croom was a Military Police officer during the second World War. It was an honor when he gave me his WWII album and I hope to honor him by helping it live on. Remembering Gerald (Jerry to friends) and those that fought so fearlessly for the World.</p>
      <hr class="my-4">
      <p>Stationed in Deauville, France</p>
      <p class="lead">
         <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
        <a class="btn btn-info btn-lg" href="https://en.indeauville.fr/la-place-morny" role="button">Place Morny, Deauville, France  </a>  |
        <a class="btn btn-info btn-lg" href="https://www.dday-overlord.com/en/battle-of-normandy/allied-operations/cobra" role="button">D-Day Operation Cobra</a>
      </p>
    </div>
    <!-- End of Jumbotron  -->
    <!-- Header image  -->
    <div>
      <img alt="Normandy Beach" src="../assets/AdobeStock_353186138.jpeg" width=100% height=230px />
    </div>

    <!-- Main content  -->
    <div class="container-x d-inline">
      <img class="img-fluid img-thumbnail float-left m-4" alt="Gerald Croom" src="../assets/Croom-Deauville-France-1-Sept-1945-th.jpg" max-width=30% />
      <p> </p>
    </div>
    <div class="container-x d-inline">

        <h1 class="display-2">Gerald Newton Croom</h1>
        <p class="custom">Deauville, France</p>
        <p class="custom">September 1, 1945</p>
          <h1 class="display-5">1921 - 2009</h1>

        <!-- https://litipsum.com/  The Adventures of Sherlock Holmes-->
        <p class="lead">"Really! Does it not strike you as a little singular that this McCarthy, who appears to have had little of his own, and to have been under such obligations to Turner, should still talk of marrying his son to Turner's daughter, who is, presumably, heiress to the estate, and that in such a very cocksure manner, as if it were merely a case of a proposal and all else would follow? It is the more strange, since we know that Turner himself was averse to the idea. The daughter told us as much. Do you not deduce something from that?"</p>

        <p class="lead">"We have got to the deductions and the inferences," said Lestrade, winking at me. "I find it hard enough to tackle facts, Holmes, without flying away after theories and fancies."</p>

        <p class="lead">"You are right," said Holmes demurely; "you do find it very hard to tackle the facts."</p>

        <p class="lead">"Well, moonshine is a brighter thing than fog," said Holmes, laughing. "But I am very much mistaken if this is not Hatherley Farm upon the left."</p>

        <p class="lead">"Yes, that is it." It was a widespread, comfortable-looking building, two-storied, slate-roofed, with great yellow blotches of lichen upon the grey walls. The drawn blinds and the smokeless chimneys, however, gave it a stricken look, as though the weight of this horror still lay heavy upon it. We called at the door, when the maid, at Holmes' request, showed us the boots which her master wore at the time of his death, and also a pair of the son's, though not the pair which he had then had. Having measured these very carefully from seven or eight different points, Holmes desired to be led to the court-yard, from which we all followed the winding track which led to Boscombe Pool.</p>

        <p class="lead">Sherlock Holmes was transformed when he was hot upon such a scent as this. Men who had only known the quiet thinker and logician of Baker Street would have failed to recognise him. His face flushed and darkened. His brows were drawn into two hard black lines, while his eyes shone out from beneath them with a steely glitter. His face was bent downward, his shoulders bowed, his lips compressed, and the veins stood out like whipcord in his long, sinewy neck. His nostrils seemed to dilate with a purely animal lust for the chase, and his mind was so absolutely concentrated upon the matter before him that a question or remark fell unheeded upon his ears, or, at the most, only provoked a quick, impatient snarl in reply. Swiftly and silently he made his way along the track which ran through the meadows, and so by way of the woods to the Boscombe Pool. It was damp, marshy ground, as is all that district, and there were marks of many feet, both upon the path and amid the short grass which bounded it on either side. Sometimes Holmes would hurry on, sometimes stop dead, and once he made quite a little detour into the meadow. Lestrade and I walked behind him, the detective indifferent and contemptuous, while I watched my friend with the interest which sprang from the conviction that every one of his actions was directed towards a definite end.</p>

    </div>
    <div id="app">
      <!-- Use of v-if-v-else statement -->
        <h4>Were you a U.S. Soldier during WWII?</h4>

        <input v-model= "soldier" value= "yes" type="radio" id="yes" />
        <label for="yes"> yes</label><br />
        <input v-model= "soldier" value= "no" type="radio" id="no" />
        <label for="no"> no</label><br />

        <p v-if="soldier === 'yes'" class="thumbs">👍 Thank you for your service!</p>
        <p v-else-if="soldier === 'no'" class="thumbs">Thank you for your support!</p>
    </div>
    <!-- End of v-if-v-else statement  -->
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
      soldier: ''
    }
  }
};

</script>

<style lang="scss">
// Style for v-if-v-else statement
label {
  padding-right: 30px;
}

.thumbs {
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

// Style for Jumbotron on HomePage.vue
.jumbotron {
  padding: 1rem;
  margin: 0;
}

.jumbotron p.lead {
  margin-left: auto;
  margin-right: auto;
}

// container
// .container-x.d-inline img {

// }

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
