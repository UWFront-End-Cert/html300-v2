<template>
<div class="row pb-5">
  <h1 class="col-12 pt-5 pb-2">Know Your Cabbage</h1>
  <p class="lead col-12 pb-5">What kind of cabbage do I have? Click on each term for an explanation.</p>
  <!-- Adding accordion -->
  <div id="accordion" class="col-lg-10 col-md-10 col-sm-12">

    <div class="card">
      <div class="card-header pt-0 pb-0" id="termOne">
        <h3 class="m-0 p-0">
          <button class="btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
          v-for="term in terms" v-bind:key="term">{{term.termOne}}</button>
        </h3>
      </div>
    </div>
    <div id="collapseOne" class="collapse" aria-labelledby="termOne" data-parent="#accordion">
      <div class="card-body">
        <p v-for="term in terms" v-bind:key="term">{{term.defOneA}}</p>
      </div>
    </div>

    <div class="card">
      <div class="card-header pt-0 pb-0" id="termTwo">
        <h3 class="m-0 p-0">
          <button class="btn" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
          v-for="term in terms" v-bind:key="term">{{term.termTwo}}</button>
        </h3>
      </div>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="termTwo" data-parent="#accordion">
      <div class="card-body">
        <p v-for="term in terms" v-bind:key="term">{{term.defTwo}}</p>
      </div>
    </div>

    <div class="card">
      <div class="card-header pt-0 pb-0" id="termThree">
        <h3 class="m-0 p-0">
          <button class="btn" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
          v-for="term in terms" v-bind:key="term">{{term.termThree}}</button>
        </h3>
      </div>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="termThree" data-parent="#accordion">
      <div class="card-body">
        <p v-for="term in terms" v-bind:key="term">{{term.defThree}}</p>
      </div>
    </div>

    <div class="card">
      <div class="card-header pt-0 pb-0" id="termFour">
        <h3 class="m-0 p-0">
          <button class="btn" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"
          v-for="term in terms" v-bind:key="term">{{term.termFour}}</button>
        </h3>
      </div>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="termFour" data-parent="#accordion">
      <div class="card-body">
        <p v-for="term in terms" v-bind:key="term">{{term.defFour}}</p>
      </div>
    </div>

    <div class="card">
      <div class="card-header pt-0 pb-0" id="termFive">
        <h3 class="m-0 p-0">
          <button class="btn" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"
          v-for="term in terms" v-bind:key="term">{{term.termFive}}</button>
        </h3>
      </div>
    </div>
    <div id="collapseFive" class="collapse" aria-labelledby="termFive" data-parent="#accordion">
      <div class="card-body">
        <p v-for="term in terms" v-bind:key="term">{{term.defFive}}</p>
      </div>
    </div>

    <div class="card">
      <div class="card-header pt-0 pb-0" id="termSix">
        <h3 class="m-0 p-0">
          <button class="btn" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix"
          v-for="term in terms" v-bind:key="term">{{term.termSix}}</button>
        </h3>
      </div>
    </div>
    <div id="collapseSix" class="collapse" aria-labelledby="termSix" data-parent="#accordion">
      <div class="card-body">
        <p v-for="term in terms" v-bind:key="term">{{term.defSix}}</p>
      </div>
    </div>

  </div>
  <!-- End accordion -->
</div>
</template>


<script>
export default {
  name: '#accordion',
  data () {
    return {
      terms: [
        {termOne: "GREEN",
        // Use a backslash after lines of text so Javascript knows the string is continued; otherwise, errors occur
          defOneA: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim \
          lobortis scelerisque fermentum dui faucibus in. Facilisis gravida \
          neque convallis a cras.",
          termTwo: "SAVOY",
          defTwo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim \
          lobortis scelerisque fermentum dui faucibus in. Facilisis gravida \
          neque convallis a cras.",
          termThree: "RED",
          defThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim \
          lobortis scelerisque fermentum dui faucibus in. Facilisis gravida \
          neque convallis a cras.",
          termFour: "NAPA",
          defFour: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim \
          lobortis scelerisque fermentum dui faucibus in. Facilisis gravida \
          neque convallis a cras.",
          termFive: "BOK CHOY",
          defFive: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim \
          lobortis scelerisque fermentum dui faucibus in. Facilisis gravida \
          neque convallis a cras.",
          termSix: "BRUSSELS SPROUTS",
          defSix: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim \
          lobortis scelerisque fermentum dui faucibus in. Facilisis gravida \
          neque convallis a cras."}
      ]
    }
  }
}
</script>
