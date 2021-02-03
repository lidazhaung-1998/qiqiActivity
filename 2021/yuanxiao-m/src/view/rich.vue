<template>
    <div class="divideAward-wrap">
        <contentHead :jackpotRule="true">
            <div class="listSwitch-wrap" slot="switch">
                <div class="tab" :class="selectIndex===0?'active':''" @click="selectIndex=0">饺子队主播</div>
                <div class="tab" :class="selectIndex===1?'active':''" @click="selectIndex=1">汤圆队主播</div>
            </div>
            <div class="jackpotTitle" slot="jackpotTitle" :class="'jackpotTitle'+selectIndex"></div>
            <div class="jackpotDetail" slot="jackpotDetail">
                <div class="detail">{{details}}</div>
                豆
            </div>
            <div class="ruleTitle" slot="ruleTitle">
                <div class="leftCircle"></div>
                <div class="txt">
                    活动期间，各队主播收到的活动专属礼物价值的20%<br/>将记入奖池PK决赛冠军主播队伍排名前50的用户，将按贡献比例瓜分对方队伍的奖池，还能获得专属勋章
                </div>
                <div class="rightCircle"></div>
            </div>
        </contentHead>
        <div class="teamListTitle" :class="'teamListTitle'+selectIndex"></div>
        <list :list="list" :titles="titles" :divide="true"></list>
        <paginator @prev="prev" @next="next" :currPage="currPage" :totalPage="totalPage"></paginator>
    </div>
</template>

<script>
    import contentHead from "../components/contentHead/contentHead";
    import list from "../components/list/list";
    import paginator from "../components/paginator/paginator";

    export default {
        name: "rich",
        components: {contentHead, list, paginator},
        async created() {
            await this.getList();
            await this.getAward();
        },
        mounted() {
            this.timer = setInterval(async () => {
                await this.getList();
                await this.getAward();
            }, 10000);
        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        data() {
            return {
                selectIndex: 0,
                currPage: 0,
                totalPage: 4,
                titles: [
                    "排名",
                    "昵称",
                    "ID",
                    "神豪值",
                    "预计可获得奖池比例"
                ],
                list: [],
                details:0,
                timer: null,
            }
        },
        watch: {
            async selectIndex() {
                this.currPage = 0;
                await this.getList();
                await this.getAward();
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
        methods: {
            async getList() {
                let url = this.selectIndex === 0 ? "promotedRank" : "finalAnchorRank";
                let {data} = await this.$api.richRank(this.sentType, this.currPage)
                if (data.result) {
                    this.totalPage = data.result.totalPage;
                    this.list = data.result.list;
                }
            },
            async getAward() {
                let {data} = await this.$api.richDivide(this.sentType);
                this.details = data.result;
            },
            async prev() {
                this.currPage--;
                await this.getList();
            },
            async next() {
                this.currPage++;
                await this.getList();
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixin";

    .divideAward-wrap {
        @include themeWrap();
        margin-top: -.62rem;
        padding-top: .41rem;

        .teamListTitle {
            margin: 20px auto 20px;
            width: 248px;
            height: 37px;
            background-size: 100% 100%;
        }

        .teamListTitle0 {
            background-image: url("../assets/img/jiaoziteamRich.png");
        }

        .teamListTitle1 {
            background-image: url("../assets/img/tangyuanteamRich.png");
        }
    }
</style>