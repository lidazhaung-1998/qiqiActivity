<template>
    <div class="divideAward-wrap">
        <contentHead :jackpotRule="true">
            <div class="listSwitch-wrap" slot="switch">
                <div class="tab" :class="selectIndex===0?'active':''" @click="selectIndex=0">饺子队主播</div>
                <div class="tab" :class="selectIndex===1?'active':''" @click="selectIndex=1">汤圆队主播</div>
            </div>
            <div class="jackpotTitle" slot="jackpotTitle" :class="'jackpotTitle'+selectIndex"></div>
            <div class="jackpotDetail" slot="jackpotDetail">
                <div class="detail">123456</div>
                豆
            </div>
            <div class="ruleTitle" slot="ruleTitle">
                <div class="leftCircle"></div>
                <div class="txt">
                    活动期间，各队主播收到的活动专属礼物价值的20%，将记入奖池
                    <br/>
                    PK决赛冠军主播队伍排名前50的用户，将按贡献比例瓜分对方队伍的奖池，
                    <br/>
                    还能获得专属勋章
                </div>
                <div class="rightCircle"></div>
            </div>
        </contentHead>
        <div class="teamListTitle" :class="'teamListTitle'+selectIndex"></div>
        <list :titles="titles" :divide="true"></list>
    </div>
</template>

<script>
    import contentHead from "../components/contentHead/contentHead";
    import list from "../components/list/list";

    export default {
        name: "rich",
        components: {contentHead, list},
        data() {
            return {
                selectIndex: 0,
                titles: [
                    "排名",
                    "昵称",
                    "ID",
                    "神豪值",
                    "预计可获得奖池比例"
                ]
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

        .teamListTitle0 {
            background-image: url("../assets/img/jiaoziteamRich.png");
        }

        .teamListTitle1 {
            background-image: url("../assets/img/tangyuanteamRich.png");
        }
    }
</style>