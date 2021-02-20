<template>
    <div class="twentyPKContent" :class="isborder ? 'hasborder' : ''">
        <div v-if="pkList.length != 0">
            <div class="pk-box" v-for="item in pkList">
                <div v-show="gameTime" class="gameDate">{{item.startTime}}</div>
                <div class="pkDetails-wrap">
                    <div class="pkAnchor leftAnchor" :class="item.win === 1 ? win : '' ">
                        <div class="anchorInfo">
                            <div class="anchorHead" :class="item.state1 === 2 ? 'live' : '' "
                                 @click="toRoom(item.state1,item.roomId1)">
                                <img :src="item.anchorPic1 || defaultHead" alt="">
                            </div>
                            <div class="anchorname">
                                <div class="id">ID:{{item.anchorId1}}</div>
                                <div class="name">{{item.anchorName1 || "炫酷达人"}}</div>
                                <div class="type" v-show="team">{{item.type1 == 0 ? '汤圆队' : '饺子队'}}</div>
                            </div>
                        </div>
                        <div class="winCount">{{item.score1}}</div>
                    </div>
                    <div class="center"></div>
                    <div class="pkAnchor rightAnchor" :class="item.win === 2 ? win : '' ">
                        <div class="anchorInfo">
                            <div class="anchorHead" :class="item.state2 === 2 ? 'live' : '' "
                                 @click="toRoom(item.state2,item.roomId2)">
                                <img :src="item.anchorPic2 || defaultHead" alt="">
                            </div>
                            <div class="anchorname">
                                <div class="id">ID:{{item.anchorId2}}</div>
                                <div class="name">{{item.anchorName2 || "炫酷达人"}}</div>
                                <div class="type" v-show="team">{{item.type2 == 0 ? '汤圆队' : '饺子队'}}</div>
                            </div>
                        </div>
                        <div class="winCount">{{item.score2}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="notPk" v-else>暂无对阵，敬请期待</div>
    </div>
</template>

<script>
    export default {
        name: "pkBox",
        props: {
            win: String,
            gameTime: String,
            isborder: String,
            team: String,
            pkList: Array
        },
        components: {},
        data() {
            return {
                defaultHead: "http://static.qxiu.com/live/img/static/default818.png"
            }
        },
        computed: {},
        methods: {
            toRoom(state, roomid) {
                if (state === 2 && roomid) {
                    if (this.common.clientType == 'Android') {
                        window.location = 'guagua://qiqi::1::1:' + roomid;
                    } else if (this.common.clientType == 'iPhone') {
                        window.location = '#guagua://qiqi::1::1:' + roomid;
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/mixin";

    .twentyPKContent {
        position: relative;
        .notPk {
            line-height: 1.5rem;
            font-weight: bold;
            font-size: .23rem;
            text-align: center;
        }

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
                        position: relative;
                        /*overflow: hidden;*/

                        img {
                            position: absolute;
                            top: 0;
                            width: 100%;
                            border-radius: 50%;
                        }
                    }

                    .live {
                        cursor: pointer;
                    }

                    .live:before {
                        content: "";
                        position: absolute;
                        right: 0;
                        bottom: -0.03rem;
                        width: 0.2rem;
                        height: 0.2rem;
                        background-image: url("../../assets/img/live2.gif");
                        background-size: 100% 100%;
                    }

                    .anchorname {
                        width: 1.5rem;
                        color: #Fff;
                        font-size: .21rem;

                        > div {
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            width: 100%;
                        }
                        .name{
                            width: 1.2rem;
                        }
                    }
                }


            }
        }
    }
    .hasborder{
        background:url("../../assets/img/pkbg_02.png") top center repeat-y;
        background-size: 100% 100%;
    }
</style>