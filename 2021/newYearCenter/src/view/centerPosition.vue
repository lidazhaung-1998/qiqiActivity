<template>
    <div class="center-wrap">
        <div class="centerPositionRank">
            <div class="rankContainer">
                <div class="frontThere-wrap">
                    <div class="frontThereItem" v-for="item in frontThreeAnchor">
                        <div class="anchorRankInfo">
                            <div class="anchorHead"
                                 @click="inRoom(item.state,item.roomId)"
                                 :class="[item.state === 2 ? 'liveing' : '',]"
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
                            <span>人气值：</span><span>{{anchorSelf.income}}</span>
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
                <template v-for="(item,keys) in awardGiftFrontThree">
                    <Box mstyle="centerFrontThree" :boxData="item">
                        <div slot="centerPosition" class="centerPositionFrontThree">
                            <div>{{item.title}}</div>
                        </div>
                    </Box>
                </template>
                <div class="lastTwo">
                    <template v-for="(item,keys) in awardGiftLastTwo">
                        <Box mstyle="centerLastTwo" :boxData="item">
                            <div slot="centerPosition" class="centerPositionLastTwo">
                                <div>{{item.title}}</div>
                            </div>
                        </Box>
                    </template>
                </div>
            </div>
            <Rule :rule="rule"></Rule>
        </div>
    </div>
</template>

<script>
    import Box from "../components/box/box"
    import Rule from "../components/actRule/actRule"

    export default {
        name: "centerPostion",
        async created() {
            await this.getAnchorCenterRank();
            await this.getAnchorSelfInfo();
        },
        async mounted() {
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
                    window.location = "tvshow:roomid=" + roomid;
                }
            },
            async getAnchorCenterRank() {
                let {data} = await this.$api.anchorCenterRank();
                if (data.result) {
                    let result = data.result;
                    this.anchorCenterRank = result;
                }

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
                            ancPic: "http://resource.qxiu.com/upload/eb70861abf046ae2b098.jpg"
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
                        "2.活动的最终解释权归齐齐直播所有"]
                },
                awardGiftFrontThree: {
                    boxData: {
                        title: 'C位冠军',
                        wrapStyle: 'width:93%;margin-left:50px;',
                        gift: [
                            {
                                img: require('../assets/img/lmcb.png'),
                                txt: "浪漫城堡",
                                num: 'X1',
                                imgSize: 'l'
                            },
                            {
                                img: require('../assets/img/nwjl.png'),
                                txt: "女王降临",
                                num: 'X1',
                                imgSize: 'l'
                            },
                            {
                                img: require('../assets/img/zsxz.png'),
                                txt: "专属勋章",
                                imgSize: 'l'
                            },
                            {
                                img: require('../assets/img/gpyx.png'),
                                txt: "官频优先权",
                                imgSize: 'l'
                            }
                        ]
                    },
                    boxData2: {
                        title: 'C位亚军',
                        wrapStyle: 'width:93%;margin-left:50px;',
                        gift: [
                            {
                                img: require('../assets/img/msld.png'),
                                txt: "玛莎拉蒂",
                                num: 'X1',
                                imgSize: 'l'
                            },
                            {
                                img: require('../assets/img/nwjl.png'),
                                txt: "女王降临",
                                num: 'X1',
                                imgSize: 'l'
                            },
                            {
                                img: require('../assets/img/gpyx.png'),
                                txt: "官频优先权",
                                imgSize: 'l'
                            }
                        ]
                    },
                    boxData3: {
                        title: 'C位季军',
                        wrapStyle: 'width:93%;margin-left:50px;',
                        gift: [
                            {
                                img: require('../assets/img/bjd.png'),
                                txt: "布加迪",
                                num: 'X1',
                                imgSize: 'l'
                            },
                            {
                                img: require('../assets/img/lbjn.png'),
                                txt: "兰博基尼",
                                num: 'X1',
                                imgSize: 'l'
                            },
                            {
                                img: require('../assets/img/gpyx.png'),
                                txt: "官频优先权",
                                imgSize: 'l'
                            }
                        ]
                    },
                },
                awardGiftLastTwo: {
                    boxData4: {
                        title: '第4名',
                        wrapStyle: '',
                        gift: [
                            {
                                img: require('../assets/img/lmmw.png'),
                                txt: "浪漫满屋",
                                num: 'X1',
                                imgSize: 'l'
                            }
                        ]
                    },
                    boxData5: {
                        title: '第5名',
                        wrapStyle: '',
                        gift: [
                            {
                                img: require('../assets/img/bsj.png'),
                                txt: "保时捷",
                                num: 'X1',
                                imgSize: 'l'
                            }

                        ]
                    },
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
        width: 973px;
    }

    .centerPositionRank {
        width: 100%;
        padding-bottom: 30px;
        box-sizing: border-box;
        border-radius: 20px;
        border: 2px solid #000;
        background-color: #fff;
        @include boxShadow(#e64c73, 2px, #000, 20px, 11px, 7px);

        .rankContainer {
            .frontThere-wrap {
                margin: 17px auto 0;
                width: 943px;
                height: 632px;
                background-image: url("../assets/img/centerPositionRankbg.png");
                box-sizing: border-box;
                padding: 0 26px 0 15px;
                position: relative;
                z-index: 1;
                display: flex;
                justify-content: space-between;

                .frontThereItem {
                    width: 278px;
                    height: 349px;
                    background-color: #ff507d;
                    border-radius: 20px;
                    border: 1px solid #000;
                    @include boxShadow(#dc174a, 1px, #000, 20px, 16px, 11px);
                    position: absolute;

                    &.frontThereItem:nth-child(1) {
                        top: 94px;
                        left: 323px;

                        .anchorRankInfo {
                            @include frontThreeicon("../assets/img/No1a.png");

                            .anchorHead {
                                border: 7px solid #fff100;
                                @include crown("../assets/img/No1.png");
                            }
                        }
                    }

                    &.frontThereItem:nth-child(2) {
                        top: 215px;

                        .anchorRankInfo {
                            @include frontThreeicon("../assets/img/No2a.png");

                            .anchorHead {
                                border: 7px solid #eeeeee;
                                @include crown("../assets/img/No2.png");
                            }
                        }
                    }

                    &.frontThereItem:nth-child(3) {
                        top: 253px;
                        right: 26px;

                        .anchorRankInfo {
                            @include frontThreeicon("../assets/img/No3a.png");

                            .anchorHead {
                                border: 7px solid #fc8a65;
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
                            width: 130px;
                            height: 130px;
                            box-sizing: border-box;
                            border-radius: 50%;
                            background-image: url("../assets/img/110bdea11b08502aa63744b427a88c24_1.jpg");
                            background-size: 100% 100%;
                            margin-top: -65px;
                        }


                        .txtinfo {
                            width: 100%;
                            height: 210px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: space-around;
                            color: #fff;
                        }
                    }

                    .noone {
                        position: absolute;
                        top: 50%;
                        color: #fff;
                    }
                }
            }

            .lastTwo-wrap {
                position: relative;
                z-index: 1;


                .lastTwoItem {
                    margin: 45px auto 0;
                    box-sizing: border-box;
                    width: 884px;
                    height: 132px;
                    background-color: #ffc62b;
                    border-radius: 20px;
                    border: 2px solid #000;
                    transform: skewX(-17deg);
                    transform-style: preserve-3d;
                    @include boxShadow(#ff8f2b, 2px, #000, 20px, 15px, 11px);

                    &:before {
                        transform: translateZ(-1px);
                    }

                    .lastAnchorInfo {
                        width: 100%;
                        height: 100%;
                        box-sizing: border-box;
                        padding: 0 15px 0 91px;
                        transform: skewX(17deg);
                        display: flex;
                        align-items: center;
                        justify-content: space-around;

                        .rank {
                            position: absolute;
                            z-index: 1;
                            text-align: center;
                            left: 43px;
                            top: -27px;

                            span {
                                position: absolute;
                                white-space: nowrap;
                                left: -11px;
                                line-height: 53px;
                                font-size: 21px;
                                color: #fff;
                            }

                            &:before {
                                content: "";
                                position: absolute;
                                z-index: -1;
                                width: 56px;
                                height: 56px;
                                border-radius: 50%;
                                background-color: #ff507d;
                            }

                            &:after {
                                content: "";
                                position: absolute;
                                z-index: -1;
                                width: 56px;
                                height: 56px;
                                border-radius: 50%;
                                background-color: #ff507d;
                                left: -25px;
                            }
                        }

                        .ellipsis {
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;

                            color: #551f09;
                        }

                        .anchorHead {
                            width: 97px;
                            height: 97px;
                            border-radius: 50%;
                            background-color: #409EFF;
                            background-size: 100% 100%;
                            position: relative;
                        }

                        .anname {
                            width: 180px;
                            font-weight: bold;
                        }

                        .anid {
                            width: 150px;
                        }

                        .income {
                            width: 255px;
                        }
                    }
                }
            }

            .liveing {
                cursor: pointer;
            }

            .liveing:after {
                content: "";
                position: absolute;
                width: 17px;
                height: 17px;
                background-image: url("../assets/img/live2.gif");
                right: 0;
                bottom: 0;
            }
        }

    }

    .msg {
        line-height: 80px;
        color: #fff;
        font-weight: bold;
        text-align: center;
    }

    .rankAward {
        margin-top: 105px;
        padding-bottom: 35px;
        width: 100%;
        /*height: 2183px;*/
        box-sizing: border-box;
        border-radius: 20px;
        border: 2px solid #000;
        background-color: #fff;
        @include boxShadow(#e64c73, 2px, #000, 20px, 11px, 7px);

        .awardtitle {
            .title {
                width: 439px;
                height: 99px;
                background-image: url("../assets/img/centerRankAward.png");
                background-size: 100% 100%;
                margin: -47px auto 0;
            }

            .planet {
                width: 248px;
                height: 160px;
                background-image: url("../assets/img/planet.png");
                background-size: 100% 100%;
                position: absolute;
                right: -27px;
                top: -71px;
            }
        }

        .myIncome {
            margin: 20px auto 0;
            width: 550px;
            height: 83px;
            background-color: #ffc62b;
            border-radius: 10px;
            border: 2px solid #000;

            .info {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                font-weight: bold;
                font-size: 24px;
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
            margin-top: 30px;

            .lastTwo {
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
                width: 98px;
                height: 112px;
                transform: skewX(0deg);
                box-sizing: border-box;
                border-radius: 12px;
                border: 1px solid #000;
                color: #fff;
                font-size: 37px;
                text-align: center;
                line-height: 1.4;
                position: absolute;
                top: 50%;
                left: -5%;
                margin-top: -56px;
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
            }

        }
    }

</style>