<template>
    <div class="valentineDay-wrap">
        <div class="awardContainer">
            <div class="valentineGift-wrap">
                <div class="valentineGift"></div>
            </div>
            <div class="medal-wrap">
                <div class="valentineMedal"></div>
                <div class="loveMedal-wrap">
                    <div class="loveMedal"></div>
                    <div class="mySendGiftCount-box">
                        <div class="giftInfo">
                            <div class="giftimg"></div>
                            <div class="giftname">情侣证</div>
                        </div>
                        <div class="sentCount">
                            <span>已送出{{count}}个</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="list-container">
            <div class="switchList-box">
                <div @click="switchList(0)" class="switchListBtn anchorListNotSelect"
                     :class="selectIndex ? '' : 'anchorListSelect' "></div>
                <div @click="switchList(1)" class="switchListBtn userListNotSelect"
                     :class="selectIndex ? 'userListSelect' : '' "></div>
            </div>
            <List v-if="" :titles="titles" :changed="selectIndex" :list="list"></List>
            <div class="exchange">兑换比例：100豆情人节专属礼物=1心动值</div>
            <div class="myinfo">
                <div class="tit">我的心动值</div>
                <List v-if="selfInfo.length > 0"
                      :titles="isAnchor?anchorListTitle:userListTitle"
                      :list="selfInfo"></List>
                <div v-else class="none">暂无数据</div>
            </div>
            <Rule :rule="rule"></Rule>
        </div>
    </div>
</template>

<script>
    import List from "../components/list/list"
    import Rule from "../components/actRule/actRule"

    export default {
        name: "valentineDay",
        async created() {
            await this.getRank();
            await this.getMySelfInfo();
            await this.sentGiftCount();
        },
        mounted() {
            this.timer = setInterval(async () => {
                await this.getRank();
                await this.getMySelfInfo();
                await this.sentGiftCount();
            }, 8000);
        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        data() {
            return {
                timer: null,
                list: [],
                selfInfo: [],
                count: 0,
                isAnchor: this.common.anchorId == this.common.userId,
                selectIndex: 0,
                rule: {
                    title: "情人节限定：",
                    rules: [
                        {
                            txt: "1.活动期间，送出两款情人节专属礼物：爱的亲亲(100豆)，情侣证(131,400豆)，将累计两倍的价值记入主播的新年C位榜排名中，即100豆情人节专属礼物=2人气值。",
                        },
                        {
                            txt: "2.在2月14日当天，每送出价值100豆的情人节专属礼物，用户和主播则可累计1心动值，兑换比例：100豆情人节专属礼物=1心动值。",
                        },
                        {
                            txt: "3.情人节限定勋章获得方法：",
                            child: [
                                {
                                    txt: "A.情人节当天累计收到心动值最多的主播，和给这位主播贡献心动值最多的用户，都可获得限定情侣勋章；",
                                },
                                {
                                    txt: "B.情人节当天累计贡献心动值最多的用户，和收到这位用户送出的心动值最多的主播，都可获得限定情侣勋章；",
                                },
                                {
                                    txt: "若A与B出现主播或用户重合，则只获得1个勋章奖励，不重复计算。",
                                }
                            ]
                        },
                        {
                            txt: "4.爱你一生一世勋章获得方法：",
                            child: [
                                {
                                    txt: "2月14日当天，送出和收到第66、100、199、520、666、888、999、1314、1888、1999、2021个情侣证礼物的用户和主播，将获得爱你一生一世勋章。若出现相同的主播或用户，则只获得1个勋章奖励，不重复计算。",
                                }
                            ]
                        },
                        {
                            txt: "5.活动的最终解释权归齐齐直播所有。"
                        }


                    ]
                },
                anchorListTitle: ['排名', '主播昵称', 'ID', '收到的总心动值', '最心动的用户', 'ID', '贡献的心动值'],
                userListTitle: ['排名', '用户昵称', 'ID', '贡献的总心动值', '最心动的主播', 'ID', '收到的心动值']
            }
        },
        methods: {
            async sentGiftCount() {
                let {data} = await this.$api.valentineCount();
                this.count = data.result;
            },
            async getRank() {
                if (this.selectIndex === 0) {
                    let {data} = await this.$api.anchorValentineRank();
                    this.list = data.result;
                } else if (this.selectIndex === 1) {
                    let {data} = await this.$api.userValentineRank();
                    this.list = data.result;
                }
            },
            async getMySelfInfo() {
                if (this.isAnchor) {
                    let {data} = await this.$api.anchorSelfValentineInfo();
                    if (data.result) {
                        this.selfInfo = [];
                        this.selfInfo.push(data.result);
                    }
                } else {
                    let {data} = await this.$api.userSelfValentineInfo();
                    if (data.result) {
                        this.selfInfo = [];
                        this.selfInfo.push(data.result);
                    }
                }
            },
            async switchList(val) {
                this.selectIndex = val;
                await this.getRank();
            }
        },
        computed: {
            titles() {
                if (this.selectIndex) {
                    return this.userListTitle;
                } else {
                    return this.anchorListTitle;
                }
            }
        },
        components: {
            List, Rule
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixin";

    .valentineDay-wrap {
        .awardContainer {
            @include themeWrap();
            @include boxShadow(#e64c73, 1px, #000, .2rem, .11rem, .07rem);

            .valentineGift-wrap {
                @include themeContent();

                .valentineGift {
                    margin: .25rem auto;
                    width: 6.38rem;
                    height: 3.67rem;
                    background-image: url("../assets/img/medalAward-m.png");
                    background-size: 100% 100%;
                }
            }

            .medal-wrap {
                margin-top: 30px;

                .valentineMedal {
                    margin: 0 auto;
                    width: 6.88rem;
                    height: 3.55rem;
                    background-image: url("../assets/img/valentineMedal-m.png");
                    background-size: 100% 100%;
                }

                .loveMedal-wrap {
                    position: relative;

                    .loveMedal {
                        margin: .25rem auto 0;
                        width: 6.9rem;
                        height: 4.25rem;
                        background-image: url("../assets/img/loveOnelife-m.png");
                        background-size: 100% 100%;
                    }

                    .mySendGiftCount-box {
                        width: 1.37rem;
                        /*height: 100%;*/
                        position: absolute;
                        left: .2rem;
                        bottom: .2rem;
                        display: flex;
                        align-items: center;

                        .giftInfo {
                            flex-shrink: 0;
                            margin-right: .25rem;
                            box-sizing: border-box;
                            width: 100%;
                            height: 1.62rem;
                            border-radius: .1rem;
                            border: 1px solid #000;
                            background-color: #facd89;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: space-around;

                            .giftimg {
                                width: 1.03rem;
                                height: 1.03rem;
                                border-radius: 50%;
                                background-color: #fff;
                                background-image: url("../assets/img/qlz.png");
                                background-size: 100% 100%;
                                border: 1px solid #000;
                            }

                            .giftname {
                                font-size: .2rem;
                                color: #000000;
                                font-weight: 550;
                            }
                        }

                        .sentCount {
                            border: 1px solid #000;
                            box-sizing: border-box;
                            /*width: 100%;*/
                            height: .58rem;
                            line-height: .58rem;
                            border-radius: .1rem;
                            background-color: #8900fb;
                            text-align: center;
                            color: #fff;
                            font-size: .18rem;
                            white-space: nowrap;
                            padding: 0 0.09rem;
                        }
                    }
                }
            }
        }

        .list-container {
            @include themeWrap();
            @include boxShadow(#e64c73, 1px, #000, .2rem, .11rem, .07rem);
            margin-top: .6rem;

            .switchList-box {
                margin: 15px auto;
                width: 4.9rem;
                display: flex;
                justify-content: space-between;

                .switchListBtn {
                    width: 2.4rem;
                    height: .7rem;
                    background-size: 100% 100%;
                }

                .anchorListNotSelect {
                    background-image: url("../assets/img/anchorListNotSelect.png");

                }

                .anchorListSelect {
                    background-image: url("../assets/img/anchorListSelect.png");
                }

                .userListNotSelect {
                    background-image: url("../assets/img/userListNotSelect.png");
                }

                .userListSelect {
                    background-image: url("../assets/img/userListSelect.png");
                }
            }

            .exchange {
                margin: .15rem 0 .45rem;
                text-align: center;
                font-size: .2rem;
                font-family: "Source Han Sans CN";
                color: rgb(243, 66, 112);
                font-weight: bold;
            }

            .myinfo {
                .tit {
                    margin: 0 auto 20px;
                    width: 2.84rem;
                    height: .6rem;
                    border: 1px solid #000;
                    border-radius: .29rem;
                    color: #902dff;
                    font-size: .25rem;
                    font-weight: bold;
                    text-align: center;
                    line-height: .6rem;
                    background-color: #ffdf30;
                }

                .none {
                    text-align: center;
                    height: .92rem;
                    color: #fff;
                    line-height: .92rem;
                    font-weight: bold;
                    font-size: .18rem;
                    background-color: #f34270;
                }
            }
        }
    }
</style>