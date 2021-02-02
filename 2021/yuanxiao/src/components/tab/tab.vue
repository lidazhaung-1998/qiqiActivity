<template>
    <div>
        <div class="my-tabbar">
            <template>
                <div v-for="(item,index) in tabs" :class="['tabs', selectIndex === item.id ? 'select' : '' ]"
                     :key="item.id"
                     @click="$emit('pvTab', item.id), selectIndex = item.id">
                    <span>{{item.txt}}</span>
                    <span>{{item.date}}</span>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headers",
        props: ["tabs", "currPage"],
        created() {},
        computed: {},
        data() {
            return {
                selectIndex: this.currPage
            }
        },
        methods: {},

    }
</script>

<style scoped lang="scss">
    @import "tabbar";

</style>