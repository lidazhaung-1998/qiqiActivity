<template>
    <div>
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
                if (scrollTop >= 650) {
                    this.sideBar = true;
                } else {
                    this.sideBar = false;
                }
            },
            backTop() {
                var currScrollTop = document.documentElement.scrollTop;
                this.move(document.documentElement, 'scrollTop', currScrollTop, 140, 1000, 'linear');
            },
            move(el, prop, startPos, stopPos, duration, type) {
                var startTime = new Date().getTime();
                var timer = setInterval(() => {
                    var t = new Date().getTime();
                    if (t > startTime + duration) {
                        clearInterval(timer);
                        el[prop] = stopPos;
                    }
                    var val = this.$Tween.Quad.easeInOut(t - startTime, startPos, stopPos - startPos, duration);
                    el[prop] = val;
                }, 16);
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
    .head {
        width: 100%;
        height: 985px;
        background-image: url("../assets/img/bg.png");
        background-repeat: no-repeat;
        background-position: center;
        position: relative;

        .tab-wrap {
            width: 75%;
            position: absolute;
            left: 50%;
            bottom: 112px;
            transform: translateX(-50%);
            display: flex;
            justify-content: space-around;

            .tab {
                width: 249px;
                height: 70px;
                border-radius: 35px;
                background-color: #26298f;
                color: #fff;
                font-size: 31px;
                line-height: 70px;
                text-align: center;
                cursor: pointer;
            }

            .select {
                width: 253px;
                height: 82px;
                line-height: 73px;
                color: #6565ff;
                background-image: url("../assets/img/select.png");
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
        top: 300px;
        right: 0;

        .ruleBtn {
            cursor: pointer;
            width: 169px;
            height: 95px;
            background-image: url("../assets/img/actRuleBtn.png");
        }

        .topBtn {
            cursor: pointer;
            margin-top: 10px;
            width: 166px;
            height: 62px;
            background-image: url("../assets/img/backTopBtn.png");

        }
    }

    .actRule {
        overflow: scroll;
        position: fixed;
        z-index: 99;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 795px;
        height: 721px;
        box-sizing: border-box;
        border-radius: 30px;
        border: 8px solid #26298f;
        background-color: #6d78ff;

        .acttitle {
            line-height: 80px;
            text-align: center;
            font-size: 34px;
            color: #faea68;
            font-weight: bold;
            text-shadow: 2px 0px #283081, -2px 0 #283081, 0 2px #283081, 0 -2px #283081;
        }

        .close {
            cursor: pointer;
            position: absolute;
            right: 20px;
            top: 20px;
            width: 34px;
            height: 34px;
            background-image: url("../assets/img/close.png");
        }
    }

    .cloud {
        width: 100%;
        height: 209px;
        background: url("../assets/img/cloud.png") no-repeat center;
    }
</style>