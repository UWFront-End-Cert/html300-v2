<template>
  <!-- <link rel="stylesheet" href="css/style.css" /> -->
  <div id="appgal">
        <a href="#" data-toggle="tooltip" title="Hooray!">Events around Seattle</a>   <!--Tooltip-->
        <div class="row1">
            <div class="item-1" v-for="x in event1" :key="x.url">
                <Image :src="x.url" :alt="x.name" :title="x.name" :city="x.city" />
            </div>
        </div>
        <div class="row1">
          <div class="item-1" v-for="x in event2"  :key="x.name">
            <Image :src="x.url" :alt="x.name" :title="x.name" :city="x.city" />
            </div>
        </div>
        <div class="row1">
          <div class="item-1" v-for="x in event3"  :key="x.name">
            <Image :src="x.url" :alt="x.name" :title="x.name" :city="x.city" />
          </div>
        </div>
  </div>
</template>

<script>
import Image from "./components/ImageComponent.vue"; // 

export default {
  name: 'app',
  components: {
    Image,
  },
  props: {
    category: {
      type: String,
      default: 'home'
    }
  },
  setup(props) {
    console.log('%%%%%%%%%%%%%%%%%%%%%%');
    console.log(props)
    console.log(props.category)
  },
  data () {
    return {
      event1: this.category === 'drama' ? [ {name: 'Halloween', url: require('../images/10.jpg'), city:'Seattle'},{name: 'Party Night', url: require('../images/3.jpg'), city:'Taccoma'}]
          :[ {name: 'High School Threatre', url: require('../images/12.jpg'), city:'Seattle'}, {name: 'College Theater', url: require('../images/13.jpg'), city:'Taccoma'}]
          , event2 : 
          this.category === 'drama' ?
          [ {name: 'Alice in Wonderland', url: require('../images/8.jpg'), city:'Redmond'},{name: 'Pokemon', url: require('../images/7.jpg'), city:'Everete'}] 
          : [ {name: '1', url: require('../images/14.png'), city:'Redmond'},{name: 'Pokemon', url: require('../images/15.jpg'), city:'Everete'}] 
          ,
          event3: this.category === 'drama' ?
          [ {name: 'Bass Monsters', url: require('../images/11.jpg'), city:'Bellevue'},{name: 'Salsa at Alki beach', url: require('../images/5.jpg'), city:'Tukwila'}]
          :[ {name: 'Bass Monsters', url: require('../images/16.jpg'), city:'Bellevue'},{name: 'Salsa at Alki beach', url: require('../images/17.jpg'), city:'Tukwila'}],
      }
    },
    methods:{
				changeTitle:	function(event){
						this.msg	=	event.target.value;
				}
		}
}
</script>