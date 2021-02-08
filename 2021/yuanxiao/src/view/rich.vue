<template>
    <div class="divideAward-wrap">
        <contentHead :jackpotRule="true">
            <img slot="richMedal1" :src="richMedal1" alt="">
            <img slot="richMedal2" :src="richMedal2" alt="">
            <div class="listSwitch-wrap" slot="switch">
                <div class="tab" :class="selectIndex===0?'active':''" @click="selectIndex=0">汤圆队主播</div>
                <div class="tab" :class="selectIndex===1?'active':''" @click="selectIndex=1">饺子队主播</div>
            </div>
            <div class="jackpotTitle" slot="jackpotTitle" :class="'jackpotTitle'+selectIndex"></div>
            <div class="jackpotDetail" slot="jackpotDetail">
                <div class="detail">{{details}}</div>
                豆
            </div>
            <div class="ruleTitle" slot="ruleTitle">
                <div class="txt">
                    用户送给参赛主播的饺子、汤圆礼物总价值的20%，将分别记入饺子队、汤圆队奖池，<br/>
                    PK决赛冠军主播所在队伍的所有用户，将按贡献比例瓜分75%的两队总奖池，获得勋章，<br/>
                    另一队所有用户则能瓜分25%的两队总奖池
                </div>
            </div>
        </contentHead>
        <div class="teamListTitle" :class="'teamListTitle'+selectIndex"></div>
        <list :list="list" :titles="titles" :divide="true"></list>
        <paginator @prev="prev" @next="next" :currPage="currPage" :totalPage="totalPage"></paginator>
        <div class="myInfo" v-if="myInfo.length != 0">
            <list :titles="myRankTitles" :list="myInfo" :divide="true"></list>
        </div>
    </div>
</template>

<script>
    import contentHead from "../components/contentHead/contentHead";
    import list from "../components/list/list";
    import paginator from "../components/paginator/paginator";
    import tangyuanMedal1 from "../assets/img/tangyuanshenhaoleft.png";
    import tangyuanMedal2 from "../assets/img/tangyuanshenhaoright.png";
    import jiaoziMedal1 from "../assets/img/jiaozishenhaoleft.png";
    import jiaoziMedal2 from "../assets/img/jiaozishenhaoright.png";
    export default {
        name: "rich",
        components: {contentHead, list, paginator},
        async created() {
            await this.getList();
            await this.getAward();
            await this.getRichInfo();
        },
        mounted() {
            this.timer = setInterval(async () => {
                await this.getList();
                await this.getAward();
                await this.getRichInfo();
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
                    "贡献汤圆数",
                    "预计可获得奖池豆数"
                ],
                list: [],
                myRankTitles: [
                    "我的排名",
                    "昵称",
                    "ID",
                    "贡献汤圆数",
                    "预计可获得奖池豆数"
                ],
                myInfo: [],
                details: 0,
                richMedal1: tangyuanMedal1,
                richMedal2: tangyuanMedal2,
                timer: null,
            }
        },
        watch: {
            async selectIndex(val) {
                if (val === 0) {
                    this.$set(this.titles, 3, "贡献汤圆数");
                    this.richMedal1 = tangyuanMedal1;
                    this.richMedal2 = tangyuanMedal2;
                } else {
                    this.$set(this.titles, 3, "贡献饺子数");
                    this.richMedal1 = jiaoziMedal1;
                    this.richMedal2 = jiaoziMedal2;
                }
                this.currPage = 0;
                await this.getList();
                await this.getAward();
            }
        },
        computed: {
            sentType() {
                if (this.selectIndex === 0) {
                    return 0;
                } else {
                    return 1;
                }
            }
        },
        methods: {
            async getRichInfo() {
                let {data} = await this.$api.richInfo();
                this.myInfo = [];
                if (data.result) {
                    this.myInfo.push(data.result);
                }
            },
            async getList() {
                let {data} = await this.$api.richRank(this.sentType, this.currPage)
                if (data.result) {
                    this.totalPage = data.result.totalPage;
                    this.list = data.result.list;
                    return ;
                }
                this.list = [];
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
        margin-top: -71px;
        padding-top: 42px;

        .teamListTitle {
            margin: 20px auto 20px;
            width: 248px;
            height: 37px;
            background-size: 100% 100%;
        }

        .teamListTitle1 {
            background-image: url("../assets/img/jiaoziteamRich.png");
        }

        .teamListTitle0 {
            background-image: url("../assets/img/tangyuanteamRich.png");
        }

        .myInfo {
            margin-top: 30px;
        }
    }
</style>