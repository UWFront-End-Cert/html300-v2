<!-- <template>
    <div class="menu-item" @click="isOpen = !isOpen">
      <a href="#">
        {{ title }}
      </a>
      <svg viewBox="0 0 1030 638" width="10">
        <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
      </svg>
      <transition name="fade" appear>
        <div class="sub-menu" v-if="isOpen">
          <div v-for="(item, i) in items" :key="i" class="menu-item">
            <a :href="item.link">{{ item.title }}</a>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>

    import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
    import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
    import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

    import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
//Component registeration
export default {
    name: "DropDown",
    components: {
        'ejs-dropdownlist' : DropDownListComponent,
    }
}

//   export default {
//     name: 'DropDown',
//     props: ['title', 'items'],
//     data () {
//       return {
//         isOpen: false
//       }
//     }
//   }
  </script>
  
  <style>
  nav .menu-item svg {
    width: 10px;
    margin-left: 10px;
  }
  
  nav .menu-item .sub-menu {
    position: absolute;
    background-color: #222;
    top: calc(100% + 18px);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    border-radius: 0px 0px 16px 16px;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s ease-out;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style> -->


<template>
    <div class="control_wrapper">
        <ejs-dropdownlist id='dropdownlist' :dataSource='sportsData'></ejs-dropdownlist>
    </div>
</template>
<script>
    import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
    //Component registeration
    export default {
        name: 'DropDown',
        components: {
            "ejs-dropdownlist": DropDownListComponent
        },
        data () {
            return {
                sportsData: ['Seattle', 'Taccoma', 'Spokane', 'Everette', 'Redmond']
            }
        }
    }
</script>
<style>
    /* @import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-base/styles/material.css"; */
    @import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
    @import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>