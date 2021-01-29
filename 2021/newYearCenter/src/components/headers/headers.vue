<template>
    <div>
        <div class="headerbg"></div>
        <div class="my-tabbar">
            <template v-for="(item,index) in tabs">
                <div :class="['tabs', 'notSelect'+item.id,selectIndex==item.id ? 'select'+item.id:'']"
                     :key="item.id"
                     @click="$emit('pvTab', item.id),selectIndex=item.id">
                    {{item.label}}
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headers",
        props: ["switchId"],
        created() {
            if (!this.isAnchor) {
                this.tabs = [
                    {
                        label: '新年C位榜',
                        id: 0,
                        classname: 'notSelect3'
                    },
                    {
                        label: '最佳公会',
                        id: 3
                    },
                    {
                        label: '情人节限定',
                        id: 4
                    }
                ]
            }
        },
        computed: {},
        watch:{
            switchId(newVal){
                this.selectIndex = newVal;
            }
        },
        data() {
            return {
                isAnchor: this.common.anchorId == this.common.userId,
                selectIndex: this.switchId,
                tabs: [
                    {
                        label: '新年C位榜',
                        id: 0,
                        classname: 'notSelect3'
                    },
                    {
                        label: '每日打卡',
                        id: 1,
                        classname: 'notSelect3'
                    },
                    {
                        label: '最佳公会',
                        id: 3
                    },
                    {
                        label: '情人节限定',
                        id: 4
                    }
                ],
            }
        },
        methods: {},

    }
</script>

<style scoped lang="scss">
    @import "tabbar";

    .headerbg {
        width: 100%;
        height: 1470px;
        background-image: url("../../assets/img/headerbg.png");
        background-repeat: no-repeat;
        background-position: center;
    }

</style>