<template>
    <div class="finalPK-wrap">
        <div class="championAward">
            <div class="explan">
                <content-head>
                    <div class="ruleTitle" slot="ruleTitle">
                        <div class="txt">每位主播将与对方队伍的10位主播分别进行一场PK，单局定胜负<br/>
                            按照主播总胜场数进行排名，决出最后的总冠军<br/>
                            排名第2-20名的主播，将获得礼物奖励
                        </div>
                    </div>

                    <div slot="awardtitle" class="awardtitle"></div>
                    <div class="gift-box" slot="slotAward">
                        <div class="gift-content">
                            <div class="giftImg">
                                <img class="medal" src="../assets/img/123.png" alt="">
                            </div>
                            <div class="giftMsg">专属勋章</div>
                        </div>
                        <div class="gift-content">
                            <div class="giftImg">
                                <img class="iphone" src="../assets/img/iPhon12.png" alt="">
                            </div>
                            <div class="giftMsg">iPhone12一台</div>
                        </div>
                    </div>
                </content-head>
            </div>
        </div>
        <div class="turns-wrap">
            <pagination @change="switchDateTab" :currDay="currDay" :total="totalDay"></pagination>
            <pkBox :pkList="pkList" win="win2" team="true"></pkBox>
        </div>
        <div class="rewards-wrap">
            <div class="rewardsTitle"></div>
            <div class="rewardsImg"></div>
        </div>
        <div class="allWinList-wrap">
            <div class="allWinRankTitle"></div>
            <list :list="list" more="true" :titles="titles"></list>
            <paginator @prev="prev" @next="next" :currPage="currPage" :totalPage="totalPage"></paginator>
        </div>
    </div>
</template>

<script>
    import contentHead from "../components/contentHead/contentHead";
    import pagination from "../components/pagination/pagination";
    import paginator from "../components/paginator/paginator";
    import pkBox from "../components/pkBox/pkBox";
    import list from "../components/list/list";

    export default {
        name: "final",
        props: [],
        components: {contentHead, pagination, pkBox, paginator, list},
        async created() {
            // await this.getFinalPKList();
            await this.getgameindex();
            await this.getList();
        },
        mounted() {
            this.timer = setInterval(async () => {
                await this.getFinalPKList();
                await this.getList();
            }, 10000);
        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        data() {
            return {
                currDay: 1,
                totalDay: 10,
                currPage: 0,
                totalPage: 0,
                titles: [
                    "排名",
                    "昵称",
                    "ID",
                    "总胜场数",
                    "PK总票数",
                    "队伍"
                ],
                list: [],
                pkList: [],
                timer: null,
            }
        },
        methods: {
            async getFinalPKList() {
                let {data} = await this.$api.finalPKList('4', (this.currDay - 1));
                this.pkList = data.result || [];
            },
            async getList() {
                let {data} = await this.$api.finalGameRank('4', this.currPage);
                if (data.result) {
                    this.list = data.result;
                    // this.totalPage = data.result.totalPage;
                }
            },
            async getgameindex() {
                let {data} = await this.$api.gameindex('4');
                if (data.result) {
                    this.currDay = parseInt(data.result+1);
                }else {
                    this.currDay = 1;
                }
            },
            async switchDateTab(val) {
                this.currDay = val;
                await this.getFinalPKList();
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

    .finalPK-wrap {
        .championAward {
            @include themeWrap();
            padding-top: 140px;

            .explan {
                padding-top: 109px;
            }
        }

        .turns-wrap {
            @include themeWrap();
            margin-top: 30px;
        }

        .allWinList-wrap {
            @include themeWrap();
            margin-top: 30px;

            .allWinRankTitle {
                margin: 20px auto 10px;
                width: 228px;
                height: 37px;
                background-image: url("../assets/img/allWinRank.png");
            }
        }

        .rewards-wrap{
            @include themeWrap();
            margin-top: 30px;
            .rewardsTitle {
                margin: 20px auto 10px;
                width: 228px;
                height: 37px;
                background-image: url("../assets/img/rewardsTitle.png");
            }
            .rewardsImg{
                margin: 20px auto 10px;
                width: 513px;
                height: 282px;
                background-image: url("../assets/img/rewardsImg.png");
            }
        }

    }
</style>