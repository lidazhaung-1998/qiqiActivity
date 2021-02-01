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
        </div>
        <div class="cloud"></div>
        <div class="isIos">本活动与苹果公司无关</div>
    </div>

</template>

<script>
    import YuanXiaoPK from "./yuanxiaoPK"
    import rich from "./rich";

    export default {
        name: "index",
        components: {YuanXiaoPK, rich},
        mounted() {
            window.addEventListener("scroll", this.scrollEvent, true);
        },
        methods: {
            scrollEvent(ev) {
                var scrollTop = document.documentElement.scrollTop;
                if (scrollTop >= 200) {
                    this.sideBar = true;
                } else {
                    this.sideBar = false;
                }
            },
            backTop() {
                var currScrollTop = document.documentElement.scrollTop;
                this.move(document.documentElement, 'scrollTop', currScrollTop, 100, 1000);
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
        z-index: 99;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 6.6rem;
        height: 70%;
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