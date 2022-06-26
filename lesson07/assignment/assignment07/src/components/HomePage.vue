<template>
  <!-- Jumbotron -->
  <b-jumbotron
    class="rounded-0 text-light text-center d-flex justify-content-center align-items-center"
  >
    <!-- bg image overlay div  -->
    <div class="img-overlay"></div>
    <b-container class="p-0">
      <h1 class="display-3">{{ title }}</h1>
      <p class="lead">{{ subtitle }}</p>
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="danger"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
        class="mb-3"
      >
        <b-container class="justify-content-md-center">
          <!-- <b-col md="8"> -->
          {{ message }}
          <b-progress variant="danger" :max="dismissSecs" :value="dismissCountDown"></b-progress>
          <!-- </b-col> -->
        </b-container>
      </b-alert>
      <!-- v-if show danger button  -->
      <b-button
        v-if="showBtn"
        @click="showAlert"
        variant="danger"
        size="lg"
        class="m-1"
      >Show Message</b-button>
      <!-- v-else show primary button -->
      <b-button v-else variant="primary" size="lg" class="m-1">Now Playing</b-button>
    </b-container>
  </b-jumbotron>
  <!-- Jumbotron End  -->
</template>

<!-- All content is from variables in the <script> section of the .vue file. -->
<script>
export default {
  data: () => {
    return {
      title: "GATOS THEATRE",
      subtitle:
        "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
      message:
        "Our website is currently undergoing scheduled maintenance. Thank you for your patience!",
      dismissSecs: 6,
      dismissCountDown: 0,
      showBtn: true,
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

<!--Styling with scss -->
<style scoped lang="scss">
.lead {
  max-width: 50%;
  margin: 0 auto 1rem;
}
.alert-danger {
  width: 75%;
  margin: auto;
  .progress {
    height: 0.25rem;
    margin-top: 0.5rem;
  }
}
</style>