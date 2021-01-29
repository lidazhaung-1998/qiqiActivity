<template>
    <div class="center-wrap">
        <div class="centerPositionRank">
            <div class="rankContainer">
                <div class="frontThere-wrap">
                    <div class="frontThereItem" v-for="item in frontThreeAnchor">
                        <div class="anchorRankInfo">
                            <div class="anchorHead"
                                 @click="inRoom(item.state,item.roomId)"
                                 :class="item.state === 2 ? 'liveing' : '' "
                                 :style="{'backgroundImage':'url('+item.ancPic+')'}"></div>
                            <div class="txtinfo" v-show="!item.none">
                                <div>
                                    <span>昵称：</span>
                                    <span>{{item.anchorName}}</span>
                                </div>
                                <div>
                                    <span>ID：</span>
                                    <span>{{item.anchorId}}</span>
                                </div>
                                <div>
                                    <span>人气值</span>
                                </div>
                                <div>
                                    <span>{{item.scores}}</span>
                                </div>
                            </div>
                            <div class="noone" v-show="item.none">虚位以待</div>
                        </div>

                    </div>
                </div>

                <div class="lastTwo-wrap">
                    <div class="lastTwoItem" v-for="(item,index) in lastTwoAnchor">
                        <div class="lastAnchorInfo">
                            <div class="rank"><span>第{{item.rankNo}}名</span></div>
                            <div class="anchorHead"
                                 @click="inRoom(item.state,item.roomId)"
                                 :class="item.state === 2 ? 'liveing' : '' "
                                 :style="{'backgroundImage':'url('+item.ancPic+')'}"></div>
                            <div class="infowrap">
                                <div class="anname ellipsis">
                                    <span>昵称：</span><span>{{item.anchorName}}</span>
                                </div>
                                <div class="anid ellipsis">
                                    <span>ID：</span><span>{{item.anchorId}}</span>
                                </div>
                                <div class="income ellipsis">
                                    <span>人气值：</span><span>{{item.scores}}</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="msg">注：主播每收到价值100豆的礼物，则可获得1人气值
            兑换比例：100豆=1人气值
        </div>
        <div class="rankAward">
            <div class="awardtitle">
                <div class="title"></div>
                <div class="planet"></div>
            </div>
            <div v-show="isAnchor" class="myIncome">
                <div class="info">
                    <div v-if="!anchorSelf.notRank">
                        <div>
                            <span>我的人气值：</span><span>{{anchorSelf.income}}</span>
                        </div>
                        <div>
                            <span>排名：</span><span>{{anchorSelf.rank}}</span>
                        </div>
                    </div>
                    <div v-else>
                        暂无排名
                    </div>
                </div>
            </div>
            <div class="showAward-wrap">

            </div>
            <Rule :rule="rule"></Rule>
        </div>
    </div>
</template>

<script>
    import Box from "../components/box/box";
    import Rule from "../components/actRule/actRule";

    export default {
        name: "centerPostion",
        async created() {
            await this.getAnchorCenterRank();
            await this.getAnchorSelfInfo();
        },
        mounted() {
            this.timer = setInterval(async () => {
                await this.getAnchorCenterRank();
                await this.getAnchorSelfInfo();
            }, 8000);
        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        methods: {
            inRoom(state, roomid) {
                if (state === 2) {
                    if (this.common.clientType == 'Android') {
                        window.location = 'guagua://qiqi::1::1:' + roomid;
                    } else if (this.common.clientType == 'iPhone') {
                        window.location = '#guagua://qiqi::1::1:' + roomid;
                    }
                }
            },
            async getAnchorCenterRank() {
                let {data} = await this.$api.anchorCenterRank();
                let result = data.result;
                this.anchorCenterRank = result;
            },
            async getAnchorSelfInfo() {
                if (this.isAnchor) {
                    let {data} = await this.$api.anchorCenterInfo();
                    if (data.result) {
                        this.anchorSelf = {
                            income: data.result.scores,
                            rank: data.result.rankNo,
                        }
                    } else {
                        this.anchorSelf = {
                            notRank: true
                        }
                    }
                }
            }
        },
        computed: {
            frontThreeAnchor() {
                let len = this.anchorCenterRank.length;
                if (len < 3) {
                    for (var i = len; i < 3; i++) {
                        this.$set(this.anchorCenterRank, i, {
                            none: true,
                            ancPic: 'http://resource.qxiu.com/upload/eb70861abf046ae2b098.jpg'
                        });
                    }
                }
                return this.anchorCenterRank;
            },
            lastTwoAnchor() {
                let len = this.anchorCenterRank.length;
                let arr = [];
                if (len >= 4) {
                    arr = this.anchorCenterRank.splice(3, 2);
                }
                return arr;
            }
        },
        data() {
            return {
                timer: null,
                isAnchor: this.common.anchorId == this.common.userId,
                anchorSelf: {
                    income: 0,
                    rank: 0
                },
                anchorCenterRank: [],
                rule: {
                    title: "新年C位榜：",
                    rules: ["1.活动期间，根据主播所有的礼物收入进行榜单排行，每收到价值100豆礼物可获得1人气值(兑换比例：100豆=1人气值)，人气值相同时按照获得的时间先后进行排序。最终排名前五的主播可获得相应的礼物、勋章、官频优先排档权等奖励，奖励将在活动结束后一周内发放。\n",
                        "2.活动的最终解释权归齐齐直播所有。"]
                }
            }
        },
        components: {Box, Rule}
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixin";

    .center-wrap {
        margin: 0 auto;
        width: 7.16rem;
    }

    .centerPositionRank {
        width: 100%;
        padding-bottom: .33rem;
        box-sizing: border-box;
        border-radius: .22rem;
        border: 0.02rem solid #000;
        background-color: #fff;
        @include boxShadow(#e64c73, .03rem, #000, .2rem, .11rem, .07rem);

        .rankContainer {
            .frontThere-wrap {
                margin: .2rem auto 0;
                width: 6.82rem;
                height: 5rem;
                background-image: url("../assets/img/centerPositionRankbg.png");
                background-size: 100% 100%;
                box-sizing: border-box;
                padding: 0 .26rem 0 .15rem;
                position: relative;
                z-index: 1;
                display: flex;
                justify-content: space-between;

                .frontThereItem {
                    width: 1.97rem;
                    height: 2.48rem;
                    background-color: #ff507d;
                    border-radius: .2rem;
                    border: 1px solid #000;
                    @include boxShadow(#dc174a, 1px, #000, .2rem, .16rem, .11rem);
                    position: absolute;

                    &.frontThereItem:nth-child(1) {
                        top: .85rem;
                        left: 2.36rem;

                        .anchorRankInfo {
                            @include frontThreeicon("../assets/img/No1a.png");

                            .anchorHead {
                                border: 0.05rem solid #fff100;
                                @include crown("../assets/img/No1.png");
                            }
                        }
                    }

                    &.frontThereItem:nth-child(2) {
                        top: 1.72rem;

                        .anchorRankInfo {
                            @include frontThreeicon("../assets/img/No2a.png");

                            .anchorHead {
                                border: 0.05rem solid #eeeeee;
                                @include crown("../assets/img/No2.png");
                            }
                        }
                    }

                    &.frontThereItem:nth-child(3) {
                        top: 1.99rem;
                        right: .26rem;

                        .anchorRankInfo {
                            @include frontThreeicon("../assets/img/No3a.png");

                            .anchorHead {
                                border: 0.05rem solid #fc8a65;
                                @include crown("../assets/img/No3.png");
                            }
                        }

                    }

                    .anchorRankInfo {
                        height: 100%;
                        position: relative;
                        z-index: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        .anchorHead {
                            width: .93rem;
                            height: .93rem;
                            box-sizing: border-box;
                            border-radius: 50%;
                            background-image: url("../assets/img/110bdea11b08502aa63744b427a88c24_1.jpg");
                            background-size: 100% 100%;
                            margin-top: -.4rem;
                        }

                        .txtinfo {
                            width: 100%;
                            height: 1.37rem;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: space-around;
                            color: #fff;
                            font-size: .2rem;

                            div {
                                width: 95%;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                text-align: center;
                            }
                        }
                    }

                    .noone {
                        position: absolute;
                        top: 48%;
                        color: #fff;
                        font-size: .21rem;
                    }
                }
            }

            .lastTwo-wrap {
                position: relative;
                z-index: 1;


                .lastTwoItem {
                    margin: .6rem auto 0;
                    box-sizing: border-box;
                    width: 6.47rem;
                    height: 1.49rem;
                    background-color: #ffc62b;
                    border-radius: .2rem;
                    border: 1px solid #000;
                    transform: skewX(-3deg);
                    transform-style: preserve-3d;
                    @include boxShadow(#ff8f2b, 1px, #000, .2rem, .15rem, .11rem);

                    &:before {
                        transform: translateZ(-1px);
                    }

                    .lastAnchorInfo {
                        width: 100%;
                        height: 100%;
                        box-sizing: border-box;
                        padding: 0 .15rem 0 .91rem;
                        transform: skewX(3deg);
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        font-size: .22rem;

                        .rank {
                            position: absolute;
                            z-index: 1;
                            text-align: center;
                            left: .5rem;
                            top: -.3rem;

                            span {
                                position: absolute;
                                white-space: nowrap;
                                left: -.2rem;
                                line-height: .64rem;
                                font-size: .21rem;
                                color: #fff;
                            }

                            &:before {
                                content: "";
                                position: absolute;
                                z-index: -1;
                                width: .64rem;
                                height: .64rem;
                                border-radius: 50%;
                                background-color: #ff507d;
                            }

                            &:after {
                                content: "";
                                position: absolute;
                                z-index: -1;
                                width: .64rem;
                                height: .64rem;
                                border-radius: 50%;
                                background-color: #ff507d;
                                left: -.4rem;
                            }
                        }

                        .ellipsis {
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;

                            color: #551f09;
                        }

                        .anchorHead {
                            width: 1rem;
                            height: 1rem;
                            border-radius: 50%;
                            background-color: #409EFF;
                            background-size: 100% 100%;
                            position: relative;
                        }

                        .infowrap {
                            width: 3rem;
                            height: 80%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                        }

                        .anname {
                            // width: 1.8rem;
                        }

                        .anid {
                            // width: 1.8rem;
                        }

                        .income {
                            // width: 2.6rem;
                        }
                    }
                }
            }

            .liveing:after {
                content: "";
                position: absolute;
                bottom: 0;
                right: 0;
                width: .17rem;
                height: .17rem;
                background-image: url("../assets/img/live.gif");
                background-size: 100% 100%;
            }
        }

    }

    .msg {
        margin: .5rem auto 0;
        width: 80%;
        font-size: .20rem;
        line-height: 1.6;
        color: #fff;
        font-weight: bold;
        text-align: center;
    }

    .rankAward {
        margin-top: 1rem;
        padding-bottom: 35px;
        width: 100%;
        /*height: 2183px;*/
        box-sizing: border-box;
        border-radius: 20px;
        border: 1px solid #000;
        background-color: #fff;
        @include boxShadow(#e64c73, 1px, #000, .2rem, .11rem, .07rem);

        .awardtitle {
            .title {
                width: 4.4rem;
                height: .99rem;
                background-image: url("../assets/img/centerRankAward.png");
                background-size: 100% 100%;
                margin: -.47rem auto 0;
            }

            .planet {
                width: 248px;
                height: 160px;
                background-image: url("../assets/img/planet.png");
                background-size: 100% 100%;
                position: absolute;
                right: -27px;
                top: -71px;
                display: none;
            }
        }

        .myIncome {
            margin: .3rem auto 0;
            width: 5.06rem;
            height: .83rem;
            background-color: #ffc62b;
            border-radius: .1rem;
            border: 1px solid #000;

            .info {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                font-weight: bold;
                font-size: .21rem;
                color: #ff4a94;

                & > div:first-child {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                }

                div:last-child {
                    /*width: 123px;*/
                }

                div {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }

        .showAward-wrap {
            margin: .3rem auto 0;
            width: 6.91rem;
            height: 9.55rem;
            background-image: url("../assets/img/centerAward-m.png");
            background-size: 100% 100%;
            /*.lastTwo {
                display: flex;
            }

            .award:nth-of-type(1) {
                .centerPositionFrontThree:nth-of-type(1) {
                    background-image: linear-gradient(to bottom, #ffa811, #ffd564);
                }
            }

            .award:nth-of-type(2) {
                .centerPositionFrontThree:nth-of-type(1) {
                    background-image: linear-gradient(to bottom, #d3d3d3, #c9c9c9);
                }
            }

            .award:nth-of-type(3) {
                .centerPositionFrontThree:nth-of-type(1) {
                    background-image: linear-gradient(to right, #ff9867, #ff755a);
                }
            }

            .centerPositionFrontThree {
                width: .94rem;
                height: .85rem;
                transform: skewX(0deg);
                box-sizing: border-box;
                border-radius: .12rem;
                border: 1px solid #000;
                color: #fff;
                font-size: .33rem;
                text-align: center;
                line-height: 1.4;
                position: absolute;
                top: 50%;
                left: -8%;
                margin-top: -.425rem;
            }

            .centerPositionLastTwo {
                width: 107px;
                height: 62px;
                border: 1px solid #000;
                border-radius: 20px;
                font-weight: bold;
                font-size: 30px;
                color: #fff;
                line-height: 62px;
                text-align: center;
                background-image: linear-gradient(to right, #fe93be, #ec4493);
                position: absolute;
                top: 50%;
                margin-top: -31px;
                left: -15%;
            }*/

        }
    }

</style>