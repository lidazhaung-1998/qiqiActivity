<template>
    <div class="clockIn-warp">
        <div class="taost" v-show="showClose">
            <div class="close" @click="showClose = !showClose"></div>
            <div class="award-wrap">
                <div class="tip">恭喜你已获得</div>
                <div class="awards">
                    <div class="award" v-for="item in awards">
                        <div class="awardImg" :style="{'backgroundImage':'url('+item.img+')'}"></div>
                        <div class="msg">{{item.txt}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clockIn-container">
            <Pagination :max="maxDay" :total="total" :currDay="currDay" @change="switchDays"></Pagination>
            <div class="clockContent">
                <div class="everyDatTask">
                    <div class="clockInitemTitle">
                        已连续打卡<span>{{continuousDay}}</span>天
                    </div>
                    <div class="task-wrap">
                        <div class="taskmsg">
                            <div>直播≥3小时</div>
                            <div>且流水≥15w豆</div>
                            <div>即可完成打卡</div>
                        </div>
                        <div class="tasksucc">
                            <div class="todayAward">今日奖励</div>
                            <div class="todayGift">
                                <div class="giftImg" :style="{'backgroundImage':'url('+ClockInInfo.goodsPic+')'}"></div>
                                <div class="giftname">{{ClockInInfo.goodsName}}X1</div>
                            </div>
                            <div v-if="ClockInInfo.state === 0" class="taskBtn-wrap">
                                <div class="getBtn">{{ClockInInfo.minute}}/3h</div>
                                <div class="getBtn">{{ClockInInfo.score}}/15w</div>
                            </div>
                            <div v-else-if="ClockInInfo.state === 1"
                                 @click="receiveAward"
                                 class="getBtn sureGet"
                                 :id="ClockInInfo.goodsId">领取
                            </div>
                            <div v-else-if="ClockInInfo.state === 2" class="getBtn yetGet">已领取</div>
                        </div>
                    </div>
                </div>
                <div class="awardDouble">
                    <div class="itemTitle">春节期间打卡更轻松</div>
                    <div class="doubleContext"></div>
                </div>
                <div class="continuonusClockIn">
                    <div class="itemTitle">连续/累计打卡奖励更多</div>
                    <div class="frontTwoAward">
                        <template v-for="(item,key) in frontTwoAward">
                            <Box mstyle="clockInFrontTwo" :boxData="item" :key="item.getAwardId">
                                <div slot="clockIn" class="taskCondition">连续打卡 <span
                                        class="days">{{item.taskInfo.limit}}</span>天
                                </div>
                                <div v-if="item.taskInfo.state === 0"
                                     slot="downBtn"
                                     class="clockInBtn getBtn">
                                    {{item.taskInfo.clear}}/{{item.taskInfo.limit}}
                                </div>
                                <div v-else-if="item.taskInfo.state === 1"
                                     slot="downBtn"
                                     @click="getContinuClockInAward(item,'frontTwoAward',key)"
                                     class="clockInBtn getBtn sureGet">领取
                                </div>
                                <div v-else-if="item.taskInfo.state === 2"
                                     slot="downBtn"
                                     class="clockInBtn getBtn yetGet">已领取
                                </div>
                            </Box>
                        </template>
                    </div>
                    <div class="lastTwoAward">
                        <template v-for="(item,key) in lastTwoAward">
                            <Box :mstyle="item.mstyle" :boxData="item" :key="item.getAwardId">
                                <div slot="clockIn" class="taskCondition">
                                    <span>累计打卡</span>
                                    <span class="days">{{item.taskInfo.limit}}</span>天
                                </div>
                                <div v-if="item.taskInfo.state === 0"
                                     slot="rightAngleBtn"
                                     class="lastTwoAwardBtn clockInBtn getBtn">
                                    {{item.taskInfo.clear}}/{{item.taskInfo.limit}}
                                </div>
                                <div v-else-if="item.taskInfo.state === 1"
                                     slot="rightAngleBtn"
                                     @click="getContinuClockInAward(item,'lastTwoAward',key)"
                                     class="lastTwoAwardBtn clockInBtn getBtn sureGet">领取
                                </div>
                                <div v-else-if="item.taskInfo.state === 2"
                                     slot="rightAngleBtn"
                                     class="lastTwoAwardBtn clockInBtn getBtn yetGet">已领取
                                </div>
                            </Box>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <Rule :rule="rule"></Rule>
    </div>
</template>

<script>
    import Pagination from "../components/pagination/pagination";
    import Rule from "../components/actRule/actRule";
    import Box from "../components/box/box";

    export default {
        name: "clockEveryDay",
        components: {Pagination, Box, Rule},
        async created() {
            //先获取当天天数
            await this.today();
            await this.getAnchorClockInfo();
            await this.getAnchorContinueCard();
        },
        mounted() {
            this.timer = setInterval(async () => {
                await this.getAnchorClockInfo();
                await this.getAnchorContinueCard();
            }, 8000);
        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        data() {
            return {
                timer: null,
                awards: [
                    {
                        txt: '399元红包',
                        img: require("../assets/img/redpacket.png"),
                        imgSize: 'l'
                    },
                ],
                showClose: false,
                maxDay: 0,
                continuousDay: 0,
                ClockInInfo: {},
                total: 28,
                currDay: 1,
                rule: {
                    title: "每日打卡：",
                    rules: [
                        "1.活动期间，主播当日出镜直播≥3小时，且当日流水≥15万豆即可完成打卡，并可领取当日的奖励，每天的打卡任务仅限当天完成，完成后的打卡奖励可在活动期间随时领取。",
                        "在春节假期2.11-2.14期间，每天直播≥2小时且当日流水≥15万豆即可完成打卡，并可领取当日的奖励。",
                        "2.主播连续打卡和累计打卡天数达到规定要求，可获得红包奖励；若期间打卡中断，则连续打卡的天数将重新累计，每种连续打卡和累计打卡的红包奖励仅可获得1次，红包将直接发放到主播后台，请及时查收。",
                        "3.打卡奖励的勋章礼物将由系统自动派发，请及时查看；官频优先权奖励请联系官频审核 QQ：450276285 领取",
                        "4.严禁主播采取挂机等违规方式参与活动，一经发现将取消活动资格。",
                        "5.活动的最终解释权归齐齐直播所有。"
                    ]
                },
                frontTwoAward: {
                    boxData0: {
                        getAwardId: 0,
                        wrapStyle: '',
                        taskInfo: {},
                        giftContentStyle: 'height:78%;color:#fff;',
                        gift: [
                            {
                                txt: '专属勋章',
                                img: require("../assets/img/zsxzlxdk.png"),
                                imgSize: 'm'
                            }
                        ]
                    },
                    boxData1: {
                        getAwardId: 1,
                        wrapStyle: '',
                        taskInfo: {},
                        giftContentStyle: 'height:78%;color:#fff;',
                        gift: [
                            {
                                txt: '88元红包',
                                img: require("../assets/img/redpacket.png"),
                                imgSize: 'm'
                            }
                        ]

                    }
                },
                lastTwoAward: {
                    boxData0: {
                        getAwardId: 2,
                        mstyle: 'clickIn21',
                        taskInfo: {},
                        giftContentStyle: 'height:79%;color:#fff;',
                        wrapStyle: 'width:90%;margin-left:0.09rem;',
                        gift: [
                            {
                                txt: '399元红包',
                                img: require("../assets/img/redpacket.png"),
                                imgSize: 'l'
                            },
                            {
                                txt: '官频优先权',
                                img: require("../assets/img/gpyx.png"),
                                imgSize: 'l'
                            }
                        ]
                    },
                    boxData1: {
                        getAwardId: 3,
                        mstyle: 'clickIn28',
                        taskInfo: {},
                        giftContentStyle: 'height:79%;color:#fff;',
                        wrapStyle: 'width:90%;',
                        gift: [
                            {
                                txt: '588元红包',
                                img: require("../assets/img/redpacket.png"),
                                imgSize: 'l'
                            },
                            {
                                txt: '专属勋章',
                                img: require("../assets/img/zsxznzn.png"),
                                imgSize: 'l'
                            },
                            {
                                txt: '官频优先权',
                                img: require("../assets/img/gpyx.png"),
                                imgSize: 'l'
                            }
                        ]
                    }
                }
            }
        },
        computed: {
            clockinIndex() {
                return this.currDay - 1;
            },
        },
        methods: {
            async switchDays(val) {
                this.currDay = val
                await this.getAnchorClockInfo();
            },
            async today() {
                let {data} = await this.$api.today();
                this.currDay = data.result + 1;
                this.maxDay = data.result + 1;
            },
            async getContinuClockInAward(item, obj, index) {
                let {data} = await this.$api.anchorGetClockInAward(item.getAwardId);
                if (data.result.succ) {
                    this.awards = item.gift;
                    this.showClose = true;
                    this.$set(this[obj][index].taskInfo, 'state', 2);
                } else {
                    this.createToast(data.result.msg);
                }
            },
            async getAnchorClockInfo() {
                let {data} = await this.$api.anchorClockInInfo();
                if (data.result) {
                    let Mflag = String(data.result[this.clockinIndex].minute / 60);
                    let Sflag = String(data.result[this.clockinIndex].score / 10000);
                    let Mindex = Mflag.indexOf('.');
                    let Sindex = Sflag.indexOf('.');
                    if (Mflag < 3) {
                        if (Mindex !== -1) {
                            data.result[this.clockinIndex].minute = Mflag.substr(0, Mindex + 2);
                        } else {
                            data.result[this.clockinIndex].minute = Mflag;
                        }
                    } else {
                        data.result[this.clockinIndex].minute = 3;
                    }

                    if (Sflag < 15) {
                        if (Sindex !== -1) {
                            data.result[this.clockinIndex].score = Sflag.substr(0, Sindex + 2);
                        } else {
                            data.result[this.clockinIndex].score = Sflag;
                        }
                    } else {
                        data.result[this.clockinIndex].score = 15;
                    }


                    this.ClockInInfo = data.result[this.clockinIndex];
                }
            },
            async getAnchorContinueCard() {
                let {data} = await this.$api.anchorContinueClockInInfo();
                let result = data.result;
                var num = 0;
                this.continuousDay = result.currCards;
                for (let key in this.frontTwoAward) {
                    this.$set(this.frontTwoAward[key], 'taskInfo', result.list[num++]);
                }
                for (let key in this.lastTwoAward) {
                    this.$set(this.lastTwoAward[key], 'taskInfo', result.list[num++]);
                }
            },
            //
            async receiveAward() {
                let {data} = await this.$api.anchorClockIn(this.currDay - 1);
                if (data.result.succ) {
                    let award = [];
                    let ClockInInfo = this.ClockInInfo;
                    award.push({
                        txt: ClockInInfo.goodsName,
                        img: ClockInInfo.goodsPic
                    })
                    this.awards = award;
                    this.showClose = true;
                    this.$set(this.ClockInInfo, 'state', 2);
                } else {
                    this.createToast(data.result.msg);
                }
            },
            createToast(txt) {
                let div = document.createElement('div');
                div.innerHTML = txt;
                div.className = 'toast';
                document.documentElement.appendChild(div);
                setTimeout(function () {
                    document.documentElement.removeChild(div);
                }, 2000)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixin";

    .clockIn-warp {
        @include themeWrap();
        @include boxShadow(#e64c73, 1px, #000, .2rem, .11rem, .07rem);

        .taost {
            min-width: 3.73rem;
            height: 2.67rem;
            border-radius: 10px;
            background-color: #a436ff;
            transform: translate(-50%, -50%);
            position: fixed;
            z-index: 5;
            top: 50%;
            left: 50%;

            .close {
                position: absolute;
                z-index: 1;
                right: .1rem;
                top: .1rem;
                width: .19rem;
                height: .19rem;
                background-image: url("../assets/img/close.png");
                background-size: 100% 100%;
                cursor: pointer;
            }

            .award-wrap {
                width: 100%;
                height: 100%;
                position: absolute;
                bottom: 0;
                box-sizing: border-box;
                padding: .3rem .1rem .2rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;

                .tip {
                    font-size: .21rem;
                    color: #fff;
                    font-weight: bold;
                }

                .awards {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    .award {
                        height: 75%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-between;

                        .awardImg {
                            width: 1.11rem;
                            height: 1.11rem;
                            background-image: url("../assets/img/redpacket.png");
                            background-size: 100% 100%;
                        }

                        .msg {
                            font-size: .2rem;
                            color: #fff;
                        }

                    }
                }
            }
        }

        .getBtn {
            border: 0;
            outline: none;
            width: .96rem;
            height: .4rem;
            background-color: #fff;
            border-radius: 0.06rem;
            color: #e11348;
            font-size: .21rem;
            text-align: center;
            line-height: .4rem;
        }

        .sureGet {
            background-color: #ffc62b;
            color: #ff3817 !important;
            cursor: pointer;
        }

        .yetGet {
            background-color: #a4a4a4 !important;
            color: #ffffff !important;
        }

        .clockInBtn {
            color: #8900fb;
        }

        .lastTwoAwardBtn {
            position: absolute;
            right: .15rem;
            top: .1rem;
        }

        .clockIn-container {
            @include themeContent();

            .clockContent {
                margin-top: .5rem;

                .everyDatTask {
                    .clockInitemTitle {
                        margin: 0 auto;
                        width: 2.4rem;
                        height: .47rem;
                        background-color: #ffc62b;
                        border: 1px solid #000;
                        transform: skewX(-5deg);
                        border-radius: 0.08rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: .2rem;
                        color: #fff;
                        text-shadow: 1px 0px 1px #000, -1px 0px 1px #000, 0 1px 1px #000, 0 -1px 1px #000;
                        font-weight: bold;

                        span {
                            font-size: .45rem;
                            position: relative;
                            top: -.14rem;
                        }
                    }

                    .task-wrap {
                        margin: .5rem auto 0;
                        width: 96%;
                        display: flex;
                        justify-content: space-around;


                        .taskmsg {
                            width: 1.66rem;
                            height: 1.5rem;
                            @include angle(#8900fb, 1px);
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            line-height: 1.3;

                            div {
                                font-size: .21rem;
                                color: #fff;
                            }
                        }

                        .tasksucc {
                            width: 4.56rem;
                            height: 1.5rem;
                            @include angle(#ff507e, 1px);
                            display: flex;
                            align-items: center;
                            justify-content: space-around;

                            .todayAward {
                                width: 1rem;
                                height: .58rem;
                                @include angle(#ffc548, 1px);
                                transform: skewX(0deg);
                                border-radius: 0.05rem;
                                color: #ffffff;
                                font-size: .19rem;
                                line-height: .58rem;
                                text-align: center;
                                font-weight: bold;
                            }

                            .todayGift {
                                /*width: 200px;*/
                                transform: skewX(3deg);
                                /*display: flex;*/
                                /*align-items: center;*/

                                .giftImg {
                                    width: .88rem;
                                    height: .88rem;
                                    background-image: url("../assets/img/mmd.png");
                                    background-size: 100% 100%;

                                }

                                .giftname {
                                    text-align: center;
                                    color: #fff;
                                    font-size: .2rem;
                                    font-weight: bold;
                                }
                            }

                            .taskBtn-wrap {
                                height: 70%;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-around;
                            }
                        }
                    }
                }

                .awardDouble {
                    .doubleContext {
                        margin: .25rem auto 0;
                        width: 5.06rem;
                        height: 1.12rem;
                        background-image: url("../assets/img/awardDouble.png");
                        background-size: 100% 100%;
                    }
                }

                .itemTitle {
                    box-sizing: border-box;
                    margin: .65rem auto 0;
                    width: 3.25rem;
                    height: .55rem;
                    @include angle(#ffc62b, 1px);
                    border-radius: 0.08rem;
                    font-size: .2rem;
                    color: #fff;
                    text-shadow: 1px 0px 1px #000, -1px 0px 1px #000, 0 1px 1px #000, 0 -1px 1px #000;
                    font-weight: bold;
                    text-align: center;
                    line-height: .55rem;
                }

                .continuonusClockIn {

                    .frontTwoAward {
                        display: flex;
                        justify-content: space-around;
                    }

                    .taskCondition {
                        width: 2.09rem;
                        height: .57rem;
                        background-image: url("../assets/img/muchCircle.png");
                        background-size: 100% 100%;
                        position: absolute;
                        top: -.26rem;
                        left: -.3rem;
                        text-align: center;
                        line-height: .57rem;
                        color: #fff;
                        font-size: .2rem;
                        font-weight: bold;

                        .days {
                            font-size: .37rem;
                        }
                    }
                }
            }
        }
    }
</style>