<div class="container">
   <div class="row">
      <!-- Create row with title and two p of text -->
      <div class="col mt-3">
          <h1 class="m-3" >How it started</h1>
          <div class="row box-1 bg-light m-3" v-for="msg in text" v-bind:key="msg">
              <p>
                  {{msg}}}
              </p>
          </div>
      </div>
    </div>
    <div class="row">
        <!-- Create row with title and two p of text -->
        <div class="col mt-3">
            <h1 class="m-3" >How we got here</h1>
            <div class="row box-1 bg-light m-3">
                <p>
                     {{msgOne}}
                </p>
            </div>
              <div class="row bg-light box-2 m-3">
                  <div class="col-sm"  v-for="msg in text" v-bind:key="msg">
                      <p>
                         {{msg}}}
                      </p>
                  </div>
              </div>
        </div>
        <div class="row">
            <!-- Create 3 x 1 on medium and above devices, 1 x 3 on devices less than medium.-->
            <div class="col mt-3">
                <h1 class="m-3" >Where we're going</h1>
                <div class="row bg-light box-2 m-3">
                    <div class="col-md-4"  v-for="msg in textTwo" v-bind:key="msg">
                        <p>
                           {{msg}}}
                        </p>
                    </div>
                </div>
            </div>
          </div>
          <!-- Footer -->
        <div class="row bg-light text-middle">
            &copy 2021 Japan Travel, LLC | Seattle, WA
        </div>
  </div>
</div>
</template>

<script>
// Store page content
export default {
  name: 'pageData',
  data () {
      return {
          text: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
           'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
          textTwo: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],

           msgOne : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
  }
}
</script>


<style lang="scss">
// Import font awesome and scss
@import "../../scss/_base.normalize.scss";
@import "../../scss/_components.content.scss";
@import "../../scss/_settings.responsive.scss";
@import "../../scss/_settings.variables.scss";
@import "../../scss/style.scss";
</style>
