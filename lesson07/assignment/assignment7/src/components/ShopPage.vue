<template>
<div id="app">
<h1>{{ message }}</h1>
<!-- A v-if and v-else is used to change content of UI -->
<img src="./../assets/shop-piece.jpeg" width="300" v-if="seen">
<img src="./../assets/shop-piece-2.png" width="300" v-if="seen">
<img src="./../assets/shop-piece-3.jpeg" width="300" v-if="seen">
<img src="./../assets/shop-sandwich.jpeg" width="300" v-if="seen">
<h1 v-else>Shop page under construction.</h1>

</div>

</template>

<script>
export default {
name: 'app',
data () {
return {

seen: false,
message: 'Shop'
}
}
}
</script>
