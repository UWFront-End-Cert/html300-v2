<template>
<div id="app">
<h1> {{ heading }}</h1>
<img src="./../assets/about-img.png" width="600">
</div>
</template>

<!--All repeated content is from variables in the <script> section of the .vue file.-->
<script>

export default {
name: 'app',
data () {
return {
heading: 'Celebrating glassmaking at its source.'
}
}
}

</script>
