<template>
    <div class="twentyPKContent">
        <div class="pk-box" v-for="item in new Array(10)">
            <slot name="pkDate"></slot>
            <div class="pkDetails-wrap">
                <div class="leftAnchor" :class="win">
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
                <div class="rightAnchor" :class="win">
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
        box-sizing: border-box;
        padding: 0 130px;

        .pk-box:last-child {
            padding-bottom: 0;
        }

        .pk-box {
            padding-bottom: 55px;
            height: 175px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            .gameDate {
                width: 307px;
                height: 33px;
                border-radius: 16.5px;
                background-color: #6d78ff;
                color: #fff;
                font-size: 23px;
                text-align: center;
                line-height: 33px;
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
                    top: -35px;
                    left: -27px;
                    width: 65px;
                    height: 59px;
                    background-image: url("../../assets/img/win.png");
                }

                .rightAnchor.win:before {
                    content: "";
                    position: absolute;
                    transform: rotateY(180deg);
                    top: -35px;
                    right: -24px;
                    width: 65px;
                    height: 59px;
                    background-image: url("../../assets/img/win.png");
                }

                .leftAnchor.win2:before {
                    content: "";
                    position: absolute;
                    top: -18px;
                    left: -7px;
                    width: 73px;
                    height: 27px;
                    background-image: url("../../assets/img/win2.png");
                }

                .rightAnchor.win2:before {
                    content: "";
                    position: absolute;
                    top: -18px;
                    right: -8px;
                    width: 73px;
                    height: 27px;
                    background-image: url("../../assets/img/win2.png");
                }

                .center {
                    width: 102px;
                    height: 55px;
                    background-image: url("../../assets/img/pk.png");
                }


                .anchorInfo {
                    height: 100%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    .anchorHead {
                        width: 87px;
                        height: 87px;
                        border-radius: 50%;
                        box-sizing: border-box;
                        border: 4px solid #fff;
                    }

                    .anchorname {
                        width: 120px;
                        color: #Fff;
                        font-size: 20px;

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