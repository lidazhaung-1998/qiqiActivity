<template>
    <div class="yxPK-wrap">
        <div class="tabs-wrap">
            <tabs :currPage="selectIndex" :tabs="tabs" @pvTab="pvTab"></tabs>
        </div>
        <apply v-if="selectIndex===0"></apply>
        <promoted v-else-if="selectIndex===1"></promoted>
        <knockout v-else-if="selectIndex===2"></knockout>
        <final v-else-if="selectIndex===3"></final>
    </div>
</template>

<script>
    import tabs from "../components/tab/tab"
    import apply from "../page/apply"
    import promoted from "../page/promoted";
    import knockout from "../page/knockout";
    import final from "../page/final";

    export default {
        name: "yuanxiaoPK",
        components: {tabs, apply, promoted, knockout, final},
        async created() {
            let {data} = await this.$api.actState();
            if (data.result > 3) {
                data.result = 3;
            }
            this.selectIndex = data.result;
        },
        methods: {
            pvTab(index) {
                this.selectIndex = index;
            }
        },
        data() {
            return {
                selectIndex: -1,
                tabs: [
                    {
                        id: 0,
                        txt: "报名资格赛",
                        date: "02.21-02.22"
                    },
                    {
                        id: 1,
                        txt: "队内选拔赛N进40",
                        date: "02.23-02.24"
                    },
                    {
                        id: 2,
                        txt: "队内淘汰40进20",
                        date: "02.25-02.26"
                    },
                    {
                        id: 3,
                        txt: "元宵决胜车轮战",
                        date: "02.27"
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .yxPK-wrap {
        margin-top: -134px;

        .tabs-wrap {
            position: relative;
            top: 108px;
            z-index: 2;
        }
    }
</style>