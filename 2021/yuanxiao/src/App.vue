<template>
    <Index/>
</template>

<script>
    import Index from "./view/index"

    export default {
        name: 'App',
        methods: {},
        components: {
            Index
        }
    }
</script>

<style lang="scss">

    html,body{
        background-color: #5864fa;
        padding-bottom: 40px;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
</style>
