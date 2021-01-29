<template>
    <div class="finalPK-wrap">
        <div class="championAward">
            <div class="explan">
                <content-head>
                    <div class="ruleTitle" slot="ruleTitle">
                        <div class="txt">每位主播将与对方队伍的10位主播分别进行一场PK，单局定胜负按照主播总胜场数进行排名，决出最后的总冠军
                        </div>
                    </div>
                    <div slot="awardtitle" class="awardtitle"></div>
                    <div class="gift-box" slot="slotAward">
                        <div class="gift-content">
                            <div class="giftImg"></div>
                            <div class="giftMsg">专属勋章</div>
                        </div>
                        <div class="gift-content">
                            <div class="giftImg"></div>
                            <div class="giftMsg">iPhone12一台</div>
                        </div>
                    </div>
                </content-head>
            </div>
        </div>
        <div class="turns-wrap">
            <pagination @change="switchDateTab" :currDay="currDay" :total="totalDay"></pagination>
            <pkBox win="win2"></pkBox>
        </div>
        <div class="allWinList-wrap">
            <div class="allWinRankTitle"></div>
            <list more="true" :titles="titles"></list>
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
        data() {
            return {
                currDay: 1,
                totalDay: 10,
                currPage: 0,
                totalPage: 4,
                titles: [
                    "排名",
                    "昵称",
                    "ID",
                    "总胜场数",
                    "总PK积分",
                    "队伍"
                ]
            }
        },
        methods: {
            switchDateTab(val) {
                this.currDay = val;
            },
            prev() {
                this.currPage--;
            },
            next() {
                this.currPage++;
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixin";

    .finalPK-wrap {
        .championAward {
            @include themeWrap();
            padding-top: 2.4rem;

            .explan {
                padding-top: .5rem;
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
                margin: .2rem auto .1rem;
                width: 2.28rem;
                height: .37rem;
                background-image: url("../assets/img/allWinRank.png");
                background-size: 100% 100%;
            }
        }

    }
</style>