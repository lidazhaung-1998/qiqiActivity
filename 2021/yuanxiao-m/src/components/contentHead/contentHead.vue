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
                        <div class="giftImg richMedal">
                            <slot name="richMedal1"></slot>
                        </div>
                        <div class="giftMsg">冠军队神豪勋章</div>
                    </div>
                    <div class="gift-content">
                        <div class="giftImg championMedal">
                            <slot name="richMedal2"></slot>
                        </div>
                        <div class="giftMsg">冠军队前10专属勋章</div>
                    </div>
                </div>
                <div class="gift-box" v-else>
                    <div class="gift-content">
                        <div class="giftImg">
                            <img src="http://down.qxiu.com/pic/9448_7.png" alt="">
                        </div>
                        <div class="giftMsg">汤圆队100豆专属礼物</div>
                    </div>
                    <div class="gift-content">
                        <div class="giftImg">
                            <img src="http://down.qxiu.com/pic/9426_7.png" alt="">
                        </div>
                        <div class="giftMsg">饺子队100豆专属礼物</div>
                    </div>
                </div>
                <div class="ruletext" v-show="!isapply">
                    <div v-if="jackpotRule">
                        <div>注：饺子或汤圆礼物，哪款送得多用户就属于哪支队伍</div>
                    </div>
                    <div v-else>
                        <div>主播在PK中每收到1个本队专属礼物，增加100PK票数</div>
                        <div>每收到1个非本队的专属礼物，则减少100PK票数</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "contentHead",
        props: ["jackpotRule", "isapply","richMedal1","richMedal2"],
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
            width: 6.42rem;
            display: flex;
            justify-content: space-between;

            .tab {
                width: 3.14rem;
                height: 1.16rem;
                background-color: #26298f;
                border-radius: .3rem;
                border: 0.04rem solid #26298f;
                box-sizing: border-box;
                font-size: .24rem;
                color: #fff;
                line-height: .7rem;
                text-align: center;
            }

            .active {
                background-color: #6d78ff;
            }
        }

        .gameRuleContext {
            @include themeContent();
            position: relative;
            z-index: 1;
            margin-top: -.5rem;

            .ruleTitle {
                padding: .25rem .2rem;
                display: flex;
                justify-content: center;
                align-items: center;

                .txt {
                    font-size: .24rem;
                    color: #fff;
                    margin: 0 5px;
                    text-align: center;
                    font-weight: 550;
                    line-height: 1.6;

                    img {
                        position: relative;
                        top: 4px;
                    }
                }

                .leftCircle {
                    width: .22rem;
                    height: .22rem;
                    border-radius: 50%;
                    background-color: #26298f;
                    position: relative;
                    flex-shrink: 0;

                    &:before {
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: .12rem;
                        height: .12rem;
                        background-color: #4cdbff;
                        border-radius: 50%;
                    }
                }

                .rightCircle {
                    width: .22rem;
                    height: .22rem;
                    border-radius: 50%;
                    background-color: #26298f;
                    position: relative;
                    flex-shrink: 0;

                    &:before {
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: .12rem;
                        height: .12rem;
                        background-color: #ffb4f4;
                        border-radius: 50%;
                    }
                }
            }

            .jackpotDetail {
                margin: .2rem auto;
                width: 3.43rem;
                height: .77rem;
                box-sizing: border-box;
                border: 1px solid #fff;
                border-radius: .35rem;
                background-color: #2d25ae;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: .21rem;
                color: #fff;

                .detail {
                    font-size: .4rem;
                    color: #fff100;
                }
            }

            .jackpotTitle {
                margin: .25rem auto .1rem;
                width: 2.83rem;
                height: .37rem;
                background-size: 100% 100%;
            }

            .jackpotTitle1 {
                background-image: url("../../assets/img/jiaoziteamAward.png");
            }

            .jackpotTitle0 {
                background-image: url("../../assets/img/tangyuanteamAward.png");

            }

            .giftContext-wrap {
                box-sizing: border-box;
                padding: 0 .15rem;

                .awardtitle {
                    margin: 0 auto 40px;
                    width: 1.89rem;
                    height: .37rem;
                    background-image: url("../../assets/img/no1Award.png");
                    background-size: 100% 100%;
                }

                .gift-box {
                    padding-bottom: .35rem;
                    display: flex;
                    justify-content: space-around;

                    .gift-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        .giftImg {
                            box-sizing: border-box;
                            width: 1.73rem;
                            height: 1.73rem;
                            border-radius: 50%;
                            border: 0.04rem solid #26298f;
                            background-color: #ffb4f4;
                            box-shadow: 0 0.05rem 0 0 #26298f;
                            position: relative;
                            margin-bottom: .2rem;
                            position: relative;

                            &:before {
                                content: "";
                                box-sizing: border-box;
                                display: block;
                                width: 1.65rem;
                                height: 1.65rem;
                                border: 0.02rem solid #fff;
                                border-radius: 50%;


                            }

                            img {
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                            }

                            .medal1 {
                                width: 2.6rem;
                            }

                            .iphone {
                                width: 1.1rem;
                                height: 1.1rem;

                            }
                        }

                        .giftMsg {
                            min-width: 2.2rem;
                            padding: 0 .1rem;
                            height: .55rem;
                            border-radius: .245rem;
                            background-color: #fff100;
                            border: 0.04rem solid #26298f;
                            font-size: .21rem;
                            color: #26298f;
                            text-align: center;
                            line-height: .51rem;
                            font-width: bold;
                        }

                        .richMedal {
                            img{
                                width: 1.6rem;
                            }
                        }

                        .championMedal {
                            img{
                                width: 1.6rem;
                            }
                        }
                    }
                }

                .ruletext {
                    line-height: 1.6;
                    font-size: .22rem;
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