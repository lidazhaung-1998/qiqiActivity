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
        props: ["rule"],
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/mixin";

    .actRule {
        margin: 78px auto 0;
        width: 897px;
        position: relative;
        z-index: 1;

        .actRuleTitle {
            margin: 0 auto;
            width: 253px;
            height: 74px;
            background-color: #ff507d;
            border: 1px solid #000;
            border-radius: 10px;
            text-align: center;
            @include boxShadow(#e11348, 1px, #000, 10px, 8px, -1px);

            span {
                line-height: 74px;
                font-size: 30px;
                font-weight: bold;
                color: #fff;
            }

            .icon {
                margin-left: 8px;
                display: inline-block;
                width: 32px;
                height: 18px;
                background-image: url("../../assets/img/down.png");
                background-size: 100% 100%;
                display: none;
            }
        }

        .ruleContent {
            margin-top: 35px;
            box-sizing: border-box;
            padding: 20px 15px;
            width: 100%;
            background-color: #ff507d;
            border: 1px solid #000;
            border-radius: 20px;
            color: #fff;
            line-height: 1.6;

            .h3 {
                font-size: .24rem;
            }

            > div {
                > div {
                    margin-left: 15px;
                }
            }
        }
    }
</style>