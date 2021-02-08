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
        width: 100%;
        overflow-x: hidden;
        background-color: #5864fa;
        padding-bottom: 40px;
    }
    html{
        font-size: 13.333333vw;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
</style>
