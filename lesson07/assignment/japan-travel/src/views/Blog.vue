template>
  <div class="container">
     <div class="row">
          <!-- Image with text -->
          <div class="col">
              <div class="row m-3" v-for="image in images" v-bind:key="image">
                <img v-bind:src="image" class="img-fluid">
                    <div class="row box-1 bg-light">
                    <p class="font-italic">
                        {{msg}}
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
</template>

<script>
// Store page content
export default {
    name: 'pageData',
    data () {
        return {
            images: [ require('../assets/mtfuji.jpg'),  require('../assets/mtfuji.jpg') ],
            msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        }
    },
    name: 'pageDataTwo',
    data () {
    return {
        images: [ require('../assets/tokyo.jpg'),  require('../assets/tokyo.jpg') ],
        msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../scss/_base.normalize.scss";
@import "../../scss/_components.content.scss";
@import "../../scss/_settings.responsive.scss";
@import "../../scss/_settings.variables.scss";
@import "../../scss/style.scss";
</style>
