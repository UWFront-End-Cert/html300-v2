<template>
<div class="row pb-5">
  <h1 class="col-12 pt-5 pb-5">How to Cook Cabbage: 4 Methods</h1>
  <section class="col-sm-6">
  <div class="pb-5" v-for="technique in techniques" v-bind:key="technique.title">
    <img :src="technique.imgOne" :alt="technique.title" width=80%>
    <h3 class="mt-4 pb-1">{{technique.titleOne}}</h3>
    <p>{{technique.contentOneA}}</p>
    <p>{{technique.contentOneB}}</p>
</div>
</section>
<section class="col-sm-6">
  <div class="pb-5" v-for="technique in techniques" v-bind:key="technique.title">
    <img :src="technique.imgTwo" :alt="technique.title" width=80%>
    <h3 class="mt-4 pb-1">{{technique.titleTwo}}</h3>
    <p>{{technique.contentTwoA}}</p>
    <p>{{technique.contentTwoB}}</p>
  </div>
</section>
<section class="col-sm-6">
  <div class="pb-5" v-for="technique in techniques" v-bind:key="technique.title">
    <img :src="technique.imgThree" :alt="technique.title" width=80%>
    <h3 class="mt-4 pb-1">{{technique.titleThree}}</h3>
    <p>{{technique.contentThreeA}}</p>
    <p>{{technique.contentThreeB}}</p>
  </div>
</section>
<section class="col-sm-6">
  <div class="pb-5" v-for="technique in techniques" v-bind:key="technique.title">
    <img :src="technique.imgFour" :alt="technique.title" width=80%>
    <h3 class="mt-4 pb-1">{{technique.titleFour}}</h3>
    <p>{{technique.contentFourA}}</p>
    <p>{{technique.contentFourB}}</p>
  </div>
</section>
</div>
</template>

<script>
export default {
  name: 'methods',
  data () {
    return {
      techniques: [
        {titleOne: "ROASTED",
          imgOne: require('../assets/RoastedCabbage.jpg'),
          // Use a backslash after lines of text so Javascript knows the string is continued; otherwise, errors occur
          contentOneA: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
          tempor incididunt ut labore et dolore magna aliqua. In egestas erat imperdiet sed euismod.\
          Maecenas sed enim ut sem viverra aliquet eget sit amet. Libero volutpat sed cras ornare \
          arcu dui vivamus arcu. Egestas sed sed risus pretium quam vulputate dignissim. Leo urna \
          molestie at elementum eu facilisis sed. In aliquam sem fringilla ut morbi tincidunt augue. \
          Egestas diam in arcu cursus euismod quis viverra. Ut eu sem integer vitae. Arcu ac tortor \
          dignissim convallis aenean. At elementum eu facilisis sed odio morbi quis commodo. \
          Fringilla ut morbi tincidunt augue interdum velit euismod. Aliquam ultrices sagittis orci \
          a scelerisque purus semper eget duis.",
          contentOneB: "Sit amet luctus venenatis lectus magna fringilla urna porttitor. Habitasse \
          platea dictumst quisque sagittis purus sit amet volutpat. Gravida rutrum quisque non tellus \
          orci ac auctor. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Ultrices eros \
          in cursus turpis massa. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Sed \
          blandit libero volutpat sed cras ornare arcu. Massa placerat duis ultricies lacus sed. \
          Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Aliquet lectus proin nibh \
          nisl condimentum id venenatis a. Suspendisse potenti nullam ac tortor vitae purus faucibus \
          ornare. Sodales ut eu sem integer vitae justo eget. Maecenas volutpat blandit aliquam etiam \
          erat velit. Odio ut sem nulla pharetra diam. Duis at tellus at urna. Tempor orci dapibus \
          ultrices in iaculis nunc sed augue lacus. Hac habitasse platea dictumst quisque sagittis \
          purus sit. Arcu dictum varius duis at consectetur lorem donec. Adipiscing diam donec \
          adipiscing tristique risus nec feugiat in. Eu turpis egestas pretium aenean pharetra magna \
          ac placerat.",
          // Second set
          titleTwo: "BOILED",
          imgTwo: require('../assets/BoiledCabbage.jpg'),
          contentTwoA: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
          tempor incididunt ut labore et dolore magna aliqua. In egestas erat imperdiet sed euismod.\
          Maecenas sed enim ut sem viverra aliquet eget sit amet. Libero volutpat sed cras ornare \
          arcu dui vivamus arcu. Egestas sed sed risus pretium quam vulputate dignissim. Leo urna \
          molestie at elementum eu facilisis sed. In aliquam sem fringilla ut morbi tincidunt augue. \
          Egestas diam in arcu cursus euismod quis viverra. Ut eu sem integer vitae. Arcu ac tortor \
          dignissim convallis aenean. At elementum eu facilisis sed odio morbi quis commodo. \
          Fringilla ut morbi tincidunt augue interdum velit euismod. Aliquam ultrices sagittis orci \
          a scelerisque purus semper eget duis.",
          contentTwoB: "Sit amet luctus venenatis lectus magna fringilla urna porttitor. Habitasse \
          platea dictumst quisque sagittis purus sit amet volutpat. Gravida rutrum quisque non tellus \
          orci ac auctor. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Ultrices eros \
          in cursus turpis massa. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Sed \
          blandit libero volutpat sed cras ornare arcu. Massa placerat duis ultricies lacus sed. \
          Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Aliquet lectus proin nibh \
          nisl condimentum id venenatis a. Suspendisse potenti nullam ac tortor vitae purus faucibus \
          ornare. Sodales ut eu sem integer vitae justo eget. Maecenas volutpat blandit aliquam etiam \
          erat velit. Odio ut sem nulla pharetra diam. Duis at tellus at urna. Tempor orci dapibus \
          ultrices in iaculis nunc sed augue lacus. Hac habitasse platea dictumst quisque sagittis \
          purus sit. Arcu dictum varius duis at consectetur lorem donec. Adipiscing diam donec \
          adipiscing tristique risus nec feugiat in. Eu turpis egestas pretium aenean pharetra magna \
          ac placerat.",
          // Third set
          titleThree: "FRIED",
          imgThree: require('../assets/FriedCabbage.jpg'),
          contentThreeA: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
          tempor incididunt ut labore et dolore magna aliqua. In egestas erat imperdiet sed euismod.\
          Maecenas sed enim ut sem viverra aliquet eget sit amet. Libero volutpat sed cras ornare \
          arcu dui vivamus arcu. Egestas sed sed risus pretium quam vulputate dignissim. Leo urna \
          molestie at elementum eu facilisis sed. In aliquam sem fringilla ut morbi tincidunt augue. \
          Egestas diam in arcu cursus euismod quis viverra. Ut eu sem integer vitae. Arcu ac tortor \
          dignissim convallis aenean. At elementum eu facilisis sed odio morbi quis commodo. \
          Fringilla ut morbi tincidunt augue interdum velit euismod. Aliquam ultrices sagittis orci \
          a scelerisque purus semper eget duis.",
          contentThreeB: "Sit amet luctus venenatis lectus magna fringilla urna porttitor. Habitasse \
          platea dictumst quisque sagittis purus sit amet volutpat. Gravida rutrum quisque non tellus \
          orci ac auctor. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Ultrices eros \
          in cursus turpis massa. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Sed \
          blandit libero volutpat sed cras ornare arcu. Massa placerat duis ultricies lacus sed. \
          Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Aliquet lectus proin nibh \
          nisl condimentum id venenatis a. Suspendisse potenti nullam ac tortor vitae purus faucibus \
          ornare. Sodales ut eu sem integer vitae justo eget. Maecenas volutpat blandit aliquam etiam \
          erat velit. Odio ut sem nulla pharetra diam. Duis at tellus at urna. Tempor orci dapibus \
          ultrices in iaculis nunc sed augue lacus. Hac habitasse platea dictumst quisque sagittis \
          purus sit. Arcu dictum varius duis at consectetur lorem donec. Adipiscing diam donec \
          adipiscing tristique risus nec feugiat in. Eu turpis egestas pretium aenean pharetra magna \
          ac placerat.",
          // Fourth set
          titleFour: "FERMENTED",
          imgFour: require('../assets/PickledCabbage.jpg'),
          contentFourA: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
          tempor incididunt ut labore et dolore magna aliqua. In egestas erat imperdiet sed euismod.\
          Maecenas sed enim ut sem viverra aliquet eget sit amet. Libero volutpat sed cras ornare \
          arcu dui vivamus arcu. Egestas sed sed risus pretium quam vulputate dignissim. Leo urna \
          molestie at elementum eu facilisis sed. In aliquam sem fringilla ut morbi tincidunt augue. \
          Egestas diam in arcu cursus euismod quis viverra. Ut eu sem integer vitae. Arcu ac tortor \
          dignissim convallis aenean. At elementum eu facilisis sed odio morbi quis commodo. \
          Fringilla ut morbi tincidunt augue interdum velit euismod. Aliquam ultrices sagittis orci \
          a scelerisque purus semper eget duis.",
          contentFourB: "Sit amet luctus venenatis lectus magna fringilla urna porttitor. Habitasse \
          platea dictumst quisque sagittis purus sit amet volutpat. Gravida rutrum quisque non tellus \
          orci ac auctor. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Ultrices eros \
          in cursus turpis massa. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Sed \
          blandit libero volutpat sed cras ornare arcu. Massa placerat duis ultricies lacus sed. \
          Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Aliquet lectus proin nibh \
          nisl condimentum id venenatis a. Suspendisse potenti nullam ac tortor vitae purus faucibus \
          ornare. Sodales ut eu sem integer vitae justo eget. Maecenas volutpat blandit aliquam etiam \
          erat velit. Odio ut sem nulla pharetra diam. Duis at tellus at urna. Tempor orci dapibus \
          ultrices in iaculis nunc sed augue lacus. Hac habitasse platea dictumst quisque sagittis \
          purus sit. Arcu dictum varius duis at consectetur lorem donec. Adipiscing diam donec \
          adipiscing tristique risus nec feugiat in. Eu turpis egestas pretium aenean pharetra magna \
          ac placerat.",
        }
      ]
    }
  }
}
</script>
