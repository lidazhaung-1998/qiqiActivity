<template>
    <div class="outGame-warp">
        <div class="outGameSwitch-wrap">
            <content-head>
                <div class="listSwitch-wrap" slot="switch">
                    <div class="tab" :class="selectIndex===0?'active':''" @click="selectIndex=0">饺子队</div>
                    <div class="tab" :class="selectIndex===1?'active':''" @click="selectIndex=1">汤圆队</div>
                </div>
                <div class="ruleTitle" slot="ruleTitle">
                    <div class="txt">队内二十强主播两两随机分配进行PK，3局2胜决出晋级名额<br/>
                        获胜的主播均可获得 礼物1个
                    </div>
                </div>
            </content-head>
        </div>
        <div class="twentyPK-wrap">
            <div class="twentyPK-title"></div>
            <pkBox win="win">
                <div slot="pkDate" class="gameDate">比赛时间02.24 19：00</div>
            </pkBox>
        </div>
    </div>
</template>

<script>
    import contentHead from "../components/contentHead/contentHead";
    import pkBox from "../components/pkBox/pkBox";
    export default {
        name: "knockout",
        props: [],
        components: {contentHead,pkBox},
        data() {
            return {
                selectIndex: 0
            }
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixin";

    .outGame-warp {
        .outGameSwitch-wrap {
            @include themeWrap();
            padding-top: 2.4rem;
        }

        .twentyPK-wrap {
            margin: .3rem auto 0;
            width: 7.23rem;
            height: 24.39rem;
            background-image: url("../assets/img/pkbg.png");
            background-size: 100% 100%;
            overflow: hidden;

            .twentyPK-title {
                margin: .4rem auto;
                width: 2.83rem;
                height: .37rem;
                background-image: url("../assets/img/twentyPKtitle.png");
                background-size: 100% 100%;
            }


        }
    }
</style>