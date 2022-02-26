<template>
  <div class="container py-4">
    <h1>Legendary Memes from a Simpler Time</h1>

    <div class="container">
      <div class="row">
        <div class="col col-lg-12">
          <h2>Memes Sorted By Year Popularized</h2>
        </div>
      </div>

      <div class="row">
        <div class="col col-lg-12">
          <h3>2010</h3>
        </div>
      </div>

      <!-- Responsive Images and Description based on Bootstrap Grid -->
      <div class="row g-2 g-lg-3">
        <div class="col col-sm-12 col-md-6 col-lg-4">
          <img
            src="../assets/images/2010/knee.jpeg"
            class="d-block w-50 img-fluid mx-auto"
            v-if="show1"
          />
        </div>

        <div class="col col-sm-12 col-md-6 col-lg-8">
          <h4>I Took an Arrow to the Knee</h4>
          <p>
            "I Took an Arrow in the Knee" is a memorable quote originating from
            the role-playing video game The Elder Scrolls V: Skyrim. An often
            repeated stock line throughout the game, it went on to inspire the
            snowclone "I used to X, then I took an arrow to the knee."
          </p>
          <p>
            Source:
            <a href="https://knowyourmeme.com/memes/i-took-an-arrow-in-the-knee"
              >KnowYourMeme</a
            >
          </p>
          <p><button v-on:click="show1 = !show1">Show the Meme!</button></p>
        </div>
      </div>

      <div class="row g-2 g-lg-3">
        <div class="col col-sm-12 col-md-6 col-lg-4">
          <img
            src="../assets/images/2010/morpheus.jpeg"
            class="d-block w-50 img-fluid mx-auto"
            v-if="show2"
          />
        </div>

        <div class="col col-sm-12 col-md-6 col-lg-8">
          <h4>Matrix Morpheus</h4>
          <p>
            Matrix Morpheus is an advice animal image macro series featuring a
            screen capture of the fictional character Morpheus (played by
            Lawrence Fishburne) from The Matrix franchise. The captions
            typically follow a two line format with the first line reading "What
            if I Told You," followed by a revelation that often belittles futile
            or petty behavior, in a similar vein to the advice animal characters
            Conspiracy Keanu and Sudden Clarity Clarence.
          </p>
          <p>
            Source:
            <a href="https://knowyourmeme.com/memes/matrix-morpheus"
              >KnowYourMeme</a
            >
          </p>
          <p><button v-on:click="show2 = !show2">Show the Meme!</button></p>
        </div>
      </div>

      <div class="row g-2 g-lg-3">
        <div class="col col-sm-12 col-md-6 col-lg-4">
          <img
            src="../assets/images/2010/orange.jpeg"
            class="d-block w-50 img-fluid mx-auto"
            v-if="show3"
          />
        </div>

        <div class="col col-sm-12 col-md-6 col-lg-8">
          <h4>Annoying orange</h4>
          <p>
            MThe Annoying Orange is an american comedy web series created by
            Dane Boedingheimer for his own company Gagfilms in 2009 starring an
            anthropomorphic orange annoying other fruits, vegetables and other
            objects that appear in the kitchen.
          </p>
          <p>
            Source:
            <a
              href="https://knowyourmeme.com/memes/subcultures/the-annoying-orange"
              >KnowYourMeme</a
            >
          </p>
          <p><button v-on:click="show3 = !show3">Show the Meme!</button></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArchiveView",
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
    };
  },
};
</script>
