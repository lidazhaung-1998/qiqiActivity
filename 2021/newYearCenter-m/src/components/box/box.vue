<template>
    <div :class="['award',mstyle]">
        <slot name="centerPosition"></slot>
        <slot name="clockIn"></slot>
        <div class="gift-wrap" :style="boxData.wrapStyle">
            <div v-for="item in boxData.gift" class="giftcontent" :style="boxData.giftContentStyle">
                <div :class="['giftimg',item.imgSize]" :style="{'backgroundImage':'url('+item.img+')'}"></div>
                <div>
                    {{item.txt}}
                    <span style="font-size: .28rem">{{item.num || ''}}</span>
                </div>
                <slot name="downBtn"></slot>
            </div>
        </div>
        <slot name="rightAngleBtn"></slot>
    </div>
</template>

<script>
    export default {
        props: ["mstyle", "boxData"],
        name: "box"
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/mixin";

    .gift-wrap {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        transform: skewX(3deg);
    }

    .giftcontent {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: .22rem;

        .giftimg {
            border-radius: 50%;
        }

        .l {
            width: 1.11rem;
            height: 1.11rem;
            background-size: 100% 100%;
        }

        .m {
            width: .91rem;
            height: .91rem;
            background-size: 100% 100%;
        }
    }

    .award {
        margin: 0 auto;
        border: 2px solid #000;
        border-radius: 20px;
        transform: skewX(-6deg);
        margin-top: 45px;
    }

    .centerFrontThree {
        width: 5.8rem;
        height: 2.9rem;
        background-image: linear-gradient(to right, #00fafe 0%, #00fafe 54%, #76fdff 54%, #76fdff 70%, #00fafe 70%, #00fafe 75%, #76fdff 75%, #76fdff 90%, #00fafe);
    }

    .centerLastTwo {
        width: 310px;
        height: 188px;
        background-color: #00fafe;
    }

    .clockInFrontTwo {
        width: 2.95rem;
        height: 2.44rem;
        @include angle(#8900fb, 1px);
    }

    .clickIn21 {
        width: 6.33rem;
        height: 2.33rem;
        @include angle(#8900fb, 1px);
    }

    .clickIn28 {
        width: 6.58rem;
        height: 2.54rem;
        @include angle(#8900fb, 1px);
    }
</style>