<template>
    <div>
        <div class="promoted-wrap">
            <content-head>
                <div class="listSwitch-wrap" slot="switch">
                    <div class="tab" :class="selectIndex===0?'active':''" @click="selectIndex=0">饺子队主播</div>
                    <div class="tab" :class="selectIndex===1?'active':''" @click="selectIndex=1">汤圆队主播</div>
                </div>
                <div class="ruleTitle" slot="ruleTitle">
                    <div class="leftCircle"></div>
                    <div class="txt">主播使用PK功能参与随机PK，各队连胜场次最高的前20位主播晋级下一轮</div>
                    <div class="rightCircle"></div>
                </div>
            </content-head>

            <list :list="list" :titles="titles"></list>

        </div>
        <paginator @prev="prev" @next="next" :totalPage="totalPage" :currPage="currPage"></paginator>
    </div>

</template>

<script>
    import list from "../components/list/list";
    import contentHead from "../components/contentHead/contentHead";
    import paginator from "../components/paginator/paginator";

    export default {
        name: "promoted",
        components: {list, paginator, contentHead},
        async created() {
            await this.getList();
        },
        mounted() {
            this.timer = setInterval(async () => {
                await this.getList();
            }, 10000);
        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        data() {
            return {
                selectIndex: 0,
                currPage: 0,
                totalPage: 0,
                titles: [
                    "排名",
                    "昵称",
                    "ID",
                    "连胜场次"
                ],
                list: [],
                timer:null,
            }
        },
        computed: {
            sentType() {
                if (this.selectIndex === 0) {
                    return 1;
                } else {
                    return 0;
                }
            }
        },
        watch: {
            async selectIndex() {
                this.currPage = 0;
                await this.getList();
            }
        },
        methods: {
            async getList() {
                let {data} = await this.$api.promotedRank('2', this.sentType, this.currPage);
                if (data.result) {
                    this.totalPage = data.result.totalPage;
                    this.list = data.result.list;
                }
            },
            async prev() {
                this.currPage--;
                await this.getList();
            },
            async next() {
                this.currPage++;
                await this.getList();
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixin";

    .promoted-wrap {
        @include themeWrap();
        padding-top: 2.4rem;
    }
</style>