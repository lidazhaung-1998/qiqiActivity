<template>
    <div class="twentyPKContent">
        <div v-if="pkList.length != 0">
            <div class="pk-box" v-for="(item,index) in pkList">
                <div class="gameDate" v-show="gameTiem">{{item.startTime}}</div>
                <div class="pkDetails-wrap">
                    <div class="leftAnchor" :class="item.win === 1 ? win : '' ">
                        <div class="anchorInfo ">
                            <div class="anchorHead"
                                 :class="item.state1 == 2 ? 'live' : '' "
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

                    <div class="rightAnchor" :class="item.win === 2 ? win : '' ">
                        <div class="anchorInfo ">
                            <div class="anchorHead"
                                 :class="item.state2 == 2 ? 'live' : '' "
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
        <div class="notPK" v-else>暂无对阵，敬请期待</div>
    </div>
</template>

<script>
    export default {
        name: "pkBox",
        props: ["win", "pkList", "gameTiem","team"],
        components: {},
        data() {
            return {
                defaultHead: "http://static.qxiu.com/live/img/static/default818.png",
            }
        },
        computed: {

        },
        methods: {
            toRoom(state, roomid) {
                if (state == 2 && roomid) {
                    window.location.href = "tvshow:roomid=" + roomid;
                }
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/mixin";

    .twentyPKContent {
        box-sizing: border-box;
        padding: 0 130px;
        background:url("../../assets/img/pkbg_02.png") top center repeat-y;
        .notPK {
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            line-height: 175px;
        }

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
                        position: relative;

                        img {
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
                        right: -4px;
                        bottom: -5px;
                        width: 17px;
                        height: 17px;
                        background-image: url("../../assets/img/live.gif");
                    }

                    .anchorname {
                        width: 140px;
                        color: #Fff;
                        font-size: 20px;

                        > div {
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            width: 100%;
                        }
                        .name{
                            width: 120px;
                        }
                    }
                }


            }
        }
    }
</style>