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
    @import "./assets/css/reset";
    html,body{
        background-color: #ff507d;
        padding-bottom: .4rem;
    }
    html{
        font-size: 13.333333vw;
    }
    .toast {
        color: #fff;
        position: fixed;
        z-index: 100;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: .25rem;
        box-sizing: border-box;
        border-radius: .1rem;
        background-color: rgba(0, 0, 0, 0.9);
        font-size: .23rem;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
</style>
