<template>
    <div class="contentHead">
        <slot name="switch"></slot>
        <div class="gameRuleContext">
            <slot name="jackpotTitle"></slot>
            <slot name="jackpotDetail"></slot>
            <slot name="ruleTitle"></slot>
            <div class="giftContext-wrap">
                <slot name="awardtitle"></slot>
                <slot name="slotAward"></slot>
                <div class="gift-box" v-if="jackpotRule">
                    <div class="gift-content">
                        <div class="giftImg richMedal"></div>
                        <div class="giftMsg">冠军队神豪勋章</div>
                    </div>
                    <div class="gift-content">
                        <div class="giftImg championMedal"></div>
                        <div class="giftMsg">冠军队专属勋章</div>
                    </div>
                </div>
                <div class="gift-box" v-else>
                    <div class="gift-content">
                        <div class="giftImg"></div>
                        <div class="giftMsg">饺子队100豆专属礼物</div>
                    </div>
                    <div class="gift-content">
                        <div class="giftImg"></div>
                        <div class="giftMsg">汤圆队100豆专属礼物</div>
                    </div>
                </div>
                <div class="ruletext">
                    <div v-if="jackpotRule">
                        <div>注：饺子或汤圆礼物，哪款送得多用户就属于哪支队伍</div>
                    </div>
                    <div v-else>
                        <div>在PK中收到本队专属礼物，正常增加PK积分</div>
                        <div>收到非本队的专属礼物，则减少相应礼物<span class="imporant">价值一半</span>的积分</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "contentHead",
        props: ["jackpotRule"],
        components: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/mixin";

    .contentHead {
        .listSwitch-wrap {
            margin: 0 auto;
            width: 811px;
            display: flex;
            justify-content: space-between;

            .tab {
                width: 397px;
                height: 109px;
                background-color: #26298f;
                border-radius: 30px;
                border: 4px solid #26298f;
                box-sizing: border-box;
                font-size: 24px;
                color: #fff;
                line-height: 60px;
                text-align: center;
                cursor: pointer;
            }

            .active {
                background-color: #6d78ff;
            }
        }

        .gameRuleContext {
            @include themeContent();
            position: relative;
            z-index: 1;
            margin-top: -45px;

            .ruleTitle {
                padding: 25px;
                display: flex;
                justify-content: center;
                align-items: center;

                .txt {
                    font-size: 17px;
                    color: #fff;
                    margin: 0 5px;
                    text-align: center;
                    font-weight: 550;
                    line-height: 1.6;
                }

                .leftCircle {
                    width: 22px;
                    height: 22px;
                    border-radius: 50%;
                    background-color: #26298f;
                    position: relative;

                    &:before {
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        margin-top: -6px;
                        margin-left: -6px;
                        width: 12px;
                        height: 12px;
                        background-color: #4cdbff;
                        border-radius: 50%;
                    }
                }

                .rightCircle {
                    width: 22px;
                    height: 22px;
                    border-radius: 50%;
                    background-color: #26298f;
                    position: relative;

                    &:before {
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        margin-top: -6px;
                        margin-left: -6px;
                        width: 12px;
                        height: 12px;
                        background-color: #ffb4f4;
                        border-radius: 50%;
                    }
                }
            }

            .jackpotDetail {
                margin: 20px auto 20px;
                width: 343px;
                height: 77px;
                box-sizing: border-box;
                border: 2px solid #fff;
                border-radius: 35px;
                background-color: #2d25ae;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                color: #fff;

                .detail {
                    font-size: 39px;
                    color: #fff100;
                }
            }

            .jackpotTitle {
                margin: 25px auto 10px;
                width: 283px;
                height: 37px;
                background-size: 100% 100%;
            }

            .jackpotTitle0 {
                background-image: url("../../assets/img/jiaoziteamAward.png");
            }

            .jackpotTitle1 {
                background-image: url("../../assets/img/tangyuanteamAward.png");

            }

            .giftContext-wrap {
                box-sizing: border-box;
                padding: 0 100px;

                .awardtitle {
                    margin: 0 auto 40px;
                    width: 189px;
                    height: 37px;
                    background-image: url("../../assets/img/no1Award.png");
                }

                .gift-box {
                    padding-bottom: 30px;
                    display: flex;
                    justify-content: space-around;

                    .gift-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        .giftImg {
                            box-sizing: border-box;
                            width: 169px;
                            height: 169px;
                            border-radius: 50%;
                            border: 4px solid #26298f;
                            background-color: #ffb4f4;
                            box-shadow: 0 5px 0 0 #26298f;
                            position: relative;
                            margin-bottom: 20px;

                            &:before {
                                content: "";
                                box-sizing: border-box;
                                display: block;
                                width: 163px;
                                height: 163px;
                                border: 2px solid #fff;
                                border-radius: 50%;
                                position: absolute;
                                top: -1px;
                                left: -1px;
                            }
                        }

                        .giftMsg {
                            width: 255px;
                            height: 49px;
                            border-radius: 24.5px;
                            background-color: #fff100;
                            border: 4px solid #26298f;
                            font-size: 20px;
                            color: #26298f;
                            text-align: center;
                            line-height: 49px;
                            font-width: bold;
                        }
                        .richMedal{}
                        .championMedal{}
                    }
                }

                .ruletext {
                    line-height: 1.6;
                    color: #fff;
                    text-align: center;

                    .imporant {
                        color: #fff100;
                    }
                }
            }
        }
    }

</style>