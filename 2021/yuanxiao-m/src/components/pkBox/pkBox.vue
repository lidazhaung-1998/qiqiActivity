<template>
    <div class="twentyPKContent">
        <div class="pk-box" v-for="item in new Array(10)">
            <slot name="pkDate"></slot>
            <div class="pkDetails-wrap">
                <div class="pkAnchor leftAnchor" :class="win">
                    <div class="anchorInfo ">
                        <div class="anchorHead"></div>
                        <div class="anchorname">
                            <div class="id">ID:12456789</div>
                            <div class="name">齐齐大牛人</div>
                            <div>饺子队</div>
                        </div>
                    </div>
                    <div class="winCount">1</div>
                </div>
                <div class="center"></div>
                <div class="pkAnchor rightAnchor" :class="win">
                    <div class="anchorInfo ">
                        <div class="anchorHead"></div>
                        <div class="anchorname">
                            <div class="id">ID:12456789</div>
                            <div class="name">齐齐大牛人</div>
                            <div>饺子队</div>
                        </div>
                    </div>
                    <div class="winCount">1</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pkBox",
        props: ["win"],
        components: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/mixin";

    .twentyPKContent {

        .pk-box:last-child {
            padding-bottom: 0;
        }

        .pk-box {
            padding-bottom: .55rem;
            height: 1.75rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            .gameDate {
                width: 3.07rem;
                height: .33rem;
                border-radius: .165rem;
                background-color: #6d78ff;
                color: #fff;
                font-size: .22rem;
                text-align: center;
                line-height: .33rem;
            }

            .pkDetails-wrap {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;

                .leftAnchor {
                    @include pkAnchorBox(#6d78ff, #464ac9);
                }

                .rightAnchor {
                    @include pkAnchorBox(#f65bc8, #ffafe7);
                }

                .leftAnchor.win:before {
                    content: "";
                    position: absolute;
                    top: -.35rem;
                    left: -.27rem;
                    width: .65rem;
                    height: .59rem;
                    background-image: url("../../assets/img/win.png");
                    background-size: 100% 100%;
                }

                .rightAnchor.win:before {
                    content: "";
                    position: absolute;
                    transform: rotateY(180deg);
                    top: -.35rem;
                    right: -.24rem;
                    width: .65rem;
                    height: .59rem;
                    background-image: url("../../assets/img/win.png");
                    background-size: 100% 100%;
                }

                .leftAnchor.win2:before {
                    content: "";
                    position: absolute;
                    top: -.18rem;
                    left: -.07rem;
                    width: .73rem;
                    height: .27rem;
                    background-image: url("../../assets/img/win2.png");
                    background-size: 100% 100%;
                }

                .rightAnchor.win2:before {
                    content: "";
                    position: absolute;
                    top: -.18rem;
                    right: -.08rem;
                    width: .73rem;
                    height: .27rem;
                    background-image: url("../../assets/img/win2.png");
                    background-size: 100% 100%;
                }

                .center {
                    width: 1.02rem;
                    height: .55rem;
                    background-image: url("../../assets/img/pk.png");
                    background-size: 100% 100%;
                }


                .anchorInfo {
                    height: 100%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    .anchorHead {
                        width: .87rem;
                        height: .87rem;
                        border-radius: 50%;
                        box-sizing: border-box;
                        border: 0.04rem solid #fff;
                    }

                    .anchorname {
                        width: 1.3rem;
                        color: #Fff;
                        font-size: .21rem;

                        > div {
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            width: 100%;
                        }
                    }
                }


            }
        }
    }
</style>