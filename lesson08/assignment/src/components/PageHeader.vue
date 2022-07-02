<template>
    <div class="header">
        <h1><slot>Default Writing of PageHeader Component</slot></h1>
    </div>
</template>

<script>
    export default {
        name: 'PageHeader'
    }
</script>

<style scoped>
h1 {
    text-align: center;
    margin: 1em;
    padding: .5em;
}
</style>