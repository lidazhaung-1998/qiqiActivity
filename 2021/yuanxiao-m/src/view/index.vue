<template>
    <div class="container">
        <div class="head">
            <div class="tab-wrap">
                <template>
                    <div class="tab"
                         v-for="(item,index) in tab"
                         :class="tabIndex===index ? 'select' : '' "
                         @click="tabIndex = index">{{item}}
                    </div>
                </template>
            </div>
        </div>
        <div class="content">
            <yuan-xiao-PK v-if="tabIndex===0"></yuan-xiao-PK>
            <rich v-else-if="tabIndex===1"></rich>
        </div>
        <div class="fixed-wrap" v-show="sideBar">
            <div class="ruleBtn" @click="showRule=true"></div>
            <div class="topBtn" @click="backTop"></div>
        </div>
        <div class="actRule" v-show="showRule">
            <div class="">
                <div class="acttitle">活动规则</div>
                <div class="close" @click="showRule=false"></div>
            </div>
            <div class="actRuleContext">
                <h3>一、PK活动规则</h3>
                <p>1.报名资格赛</p>
                <p>在规定时间内（2月21日00:00-2月22日22:00）收到任意一款活动专属礼物，即算报名成功，随后将由系统随机分配主播所属队伍</p>
                <p>2.队内选拔N进40</p>
                <p>在规定时间内（2月23日00:00-2月24日24:00）主播使用PK功能参与随机PK，各队连胜场次最高的前20位主播晋级下一轮，连胜场次相同时按照时间顺序排名，胜方票数需超过20,000票才算有效场次。在本阶段，若未报名的主播与参赛主播进行随机PK，则将被自动分到汤圆队，未报名主播不参与榜单排名，而参赛主播的战绩则根据胜负正常计算。</p>
                <p>3.队内淘汰40进20</p>
                <p>队内二十强主播将两两随机分配进行PK，主播需要在规定的比赛时间内开播，3局2胜决出晋级名额，每局比赛5分钟，局间休息1分钟，每队将晋级10名主播</p>
                <p>4.元宵决胜车轮战</p>
                <p>每位主播将与对方队伍的10位主播分别进行一场PK，单局定胜负，每局比赛8分钟，休息2分钟，每局比赛为一轮，共计进行10轮比赛，按照主播总胜场数进行排名，胜场数相同时按照主播10场PK的总票数进行先后排名，决出最后的冠军主播</p>
                <p>5.冠军主播将获得iPhone 12 一台，以及专属勋章；第2-5名的主播，将获得1个浪漫城堡礼物；第6-10名的主播，将获得1个女王降临礼物；第11-20名的主播，将获得1个兰博基尼礼物；礼物及勋章奖励将在比赛结束后7个工作日内发放，冠军主播的iPhone 12领取请联系官方运营QQ：952937600</p>
                <p>6.PK比赛期间主播需按照比赛规定时间上麦开播，请提前调试好设备</p>
                <h3>二、专属礼物规则</h3>
                <p>活动期间，饺子队主播和汤圆队主播分别拥有一款本队专属礼物：</p>
                <p>饺子队专属礼物：饺子 <br/>汤圆队专属礼物：汤圆</p>
                <p>
                    PK中每收到1个本队专属礼物，主播将增加100PK票数；每收到一个非本队的专属礼物，主播则减少100PK票数，PK中双方最低票数为0票，收到其他礼物则按照礼物价值增加PK票数，兑换比例1豆=1PK票数。未成功报名的主播，在参与到N进40的随机PK时，将被自动分到汤圆队，收到1个汤圆礼物，将增加100PK票数，收到1个饺子礼物，将减少100PK票数</p>
                <h3>三、奖池规则</h3>
                <p>1.报名资格赛结束后，用户送给参赛主播的饺子礼物总价值的20%，将记入饺子队奖池；用户送给参赛主播的汤圆礼物总价值的20%，将记入汤圆队奖池（主播被淘汰后收到的礼物不再计入奖池）</p>
                <p>2.用户分队：根据两款专属礼物中，用户送出数量更多的一款，决定用户的分队（例如，用户送出的饺子礼物比汤圆礼物多，用户则属于饺子队）</p>
                <p>3.两队的神豪榜将按根据本队用户送出的本队专属礼物数量进行排名，PK决赛总冠军主播所在队伍的所有用户，将按贡献比例瓜分两队总奖池的75%，该队神豪榜第一的用户将获得神豪勋章，第2-10名用户将获得专属勋章；另一队的所有用户则按贡献比例瓜分两队总奖池的25%，奖励将于活动结束后7个工作日内发放，请及时查收</p>
                <p>4.活动的最终解释权归齐齐直播所有</p>
            </div>
        </div>
        <div class="cloud"></div>
        <div class="isIos" v-if="isIos">本活动与苹果公司无关</div>
    </div>

</template>

<script>
    import YuanXiaoPK from "./yuanxiaoPK"
    import rich from "./rich";

    export default {
        name: "index",
        components: {YuanXiaoPK, rich},
        mounted() {
            window.addEventListener("scroll", this.scrollEvent);
        },
        methods: {
            scrollEvent(ev) {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop >= 200) {
                    this.sideBar = true;
                } else {
                    this.sideBar = false;
                }
            },
            backTop() {
                var currScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                this.move(document.body, 'scrollTop', currScrollTop, 100, 1000);
            },
            move(el, prop, startPos, stopPos, duration) {
                var startTime = +new Date;
                var timer = setInterval(() => {
                    var t = +new Date;
                    if (t > startTime + duration) {
                        clearInterval(timer);
                        el[prop] = stopPos;
                    }
                    var val = this.$Tween.Quad.easeInOut(t - startTime, startPos, stopPos - startPos, duration);
                    el[prop] = val;
                }, 19);
            }
        },
        data() {
            return {
                isIos: this.common.clientType === "iPhone",
                sideBar: false,
                showRule: false,
                tab: [
                    "汤圆饺子PK",
                    "瓜分百万奖池"
                ],
                tabIndex: 0,
            }
        },
        computed: {}
    }
</script>

<style scoped lang="scss">
    .container {
        position: relative;
    }

    .head {
        width: 100%;
        height: 8.91rem;
        background-image: url("../assets/img/bg.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;

        .tab-wrap {
            width: 75%;
            position: absolute;
            left: 50%;
            bottom: .88rem;
            transform: translateX(-50%);
            display: flex;
            justify-content: space-around;
            z-index: 2;

            .tab {
                width: 2.36rem;
                height: .67rem;
                border-radius: .335rem;
                background-color: #26298f;
                color: #fff;
                font-size: .29rem;
                line-height: .67rem;
                text-align: center;
                cursor: pointer;
            }

            .select {
                color: #6565ff;
                background-image: url("../assets/img/select.png");
                background-size: 100% 100%;
            }
        }
    }

    .content {
        box-sizing: border-box;
        padding: 0 10px 0;
        position: relative;
        z-index: 1;
    }

    .fixed-wrap {
        position: fixed;
        z-index: 100;
        top: 3rem;
        right: 0;

        .ruleBtn {
            width: 1.69rem;
            height: .95rem;
            background-image: url("../assets/img/actRuleBtn.png");
            background-size: 100% 100%;
        }

        .topBtn {
            cursor: pointer;
            margin-top: .2rem;
            width: 1.66rem;
            height: .62rem;
            background-image: url("../assets/img/backTopBtn.png");
            background-size: 100% 100%;

        }
    }

    .actRule {
        overflow: scroll;
        position: fixed;
        z-index: 100;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 6.6rem;
        height: 65%;
        box-sizing: border-box;
        border-radius: .3rem;
        border: 0.08rem solid #26298f;
        background-color: #6d78ff;

        .acttitle {
            line-height: .8rem;
            text-align: center;
            font-size: .34rem;
            color: #faea68;
            font-weight: bold;
            text-shadow: 1px 0px #283081, -1px 0 #283081, 0 1px #283081, 0 -1px #283081;
        }

        .close {
            cursor: pointer;
            position: absolute;
            right: .2rem;
            top: .2rem;
            width: .34rem;
            height: .34rem;
            background-image: url("../assets/img/close.png");
            background-size: 100% 100%;
        }

        .actRuleContext {
            color: #fff;
            padding: 0 .3rem;
            line-height: 1.6;
            height: 86%;
            overflow: scroll;
            font-size: .21rem;

            h3 {
                font-weight: 550;
            }
        }
    }

    .cloud {
        width: 100%;
        height: 2.09rem;
        background: url("../assets/img/cloud.png") no-repeat center;
        background-size: 100% 100%;
    }

    .isIos {
        width: 100%;
        position: absolute;
        bottom: .5rem;
        font-size: .21rem;
        text-align: center;
    }
</style>