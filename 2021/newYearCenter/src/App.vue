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
        padding-bottom: 40px;
    }
    .toast {
        color: #fff;
        position: fixed;
        z-index: 9999;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 25px;
        box-sizing: border-box;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.9);
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
</style>
