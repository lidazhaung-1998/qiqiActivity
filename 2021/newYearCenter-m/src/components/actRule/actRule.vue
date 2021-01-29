<template>
    <div>
        <div class="actRule">
            <div class="actRuleTitle">
                <span>活动规则</span><span class="icon"></span>
            </div>
            <div class="ruleContent">
                <h3 class="">{{rule.title}}</h3>
                <div v-for="item in rule.rules">
                    {{item.txt || item}}
                    <div v-if="item.child" v-for="child in item.child">{{child.txt}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "actRule",
        props: ['rule'],
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/mixin";

    .actRule {
        margin: .8rem auto 0;
        width: 6.73rem;
        position: relative;
        z-index: 1;

        .actRuleTitle {
            margin: 0 auto;
            width: 2.55rem;
            height: .76rem;
            background-color: #ff507d;
            border: 1px solid #000;
            border-radius: .13rem;
            text-align: center;
            @include boxShadow(#e11348, 1px, #000, .1rem, .08rem, -1px);
            line-height: 0.2;

            span {
                font-size: .3rem;
                font-weight: bold;
                color: #fff;
            }

            .icon {
                margin-left: .1rem;
                display: inline-block;
                width: .32rem;
                height: .18rem;
                background-image: url("../../assets/img/down.png");
                background-size: 100% 100%;
                display: none;
            }
        }

        .ruleContent {
            margin-top: .35rem;
            box-sizing: border-box;
            padding: .2rem .15rem;
            width: 100%;
            background-color: #ff507d;
            border: 1px solid #000;
            border-radius: .2rem;
            color: #fff;
            line-height: 1.6;

            h3 {
                font-size: .24rem;
            }

            > div {
                font-size: .21rem;

                > div {
                    margin-left: .25rem;
                }
            }
        }
    }
</style>