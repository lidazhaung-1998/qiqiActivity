<template>
    <div>
        <div class="list-wrap">
            <div class="list-title">
                <div v-for="item in titles">{{item}}</div>
            </div>
            <div class="list-content">
                <ul class="list" v-if="list.length != 0">
                    <li class="item" v-for="(item,index) in list">
                        <div class="rank">
                            <div class="rankimg" :class="(item.rankNo || item.rank) < 4 ? 'rankimg'+(index+1) : '' ">
                                {{item.rankNo || item.rank}}
                            </div>
                        </div>
                        <div class="name">
                            <span>{{item.anchorName || item.userNickName || "炫酷达人"}}</span>
<!--                            <span>{{item.anchorId || item.userId}}</span>-->
                        </div>
                        <div class="uid">
                            <span>{{item.anchorId || item.userId}}</span>
                        </div>
                        <div class="CardiacValue">
                            <span>{{item.scores || 0}}</span>
                        </div>
                        <!--                        总PK积分-->
                        <div class="allPKscore" v-show="more">
                            <span>{{item.allTickets}}</span>
                        </div>
                        <div class="teamScore" v-show="more">
                            <span>{{item.type ? "饺子队" : "汤圆队"}}</span>
                        </div>
                        <!--                        预计分成-->
                        <div class="divide" v-show="divide">
                            <span>{{item.award}}</span>
                        </div>
                    </li>
                </ul>
                <ul class="list" v-else>
                    <li class="item" style="align-items: center;justify-content: space-around;">暂无数据</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list",
        props: ['list', 'titles', 'more', 'divide'],
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style scoped lang="scss">
    /*@import "list";*/
    .list-wrap {
        margin: 0 auto;
        box-sizing: border-box;
        width: 6.65rem;
        background-color: #424ee3;
        border-radius: .2rem;
        border: 0.04rem solid #0e1569;
        font-size: .21rem;

        .list-title {
            height: .57rem;
            color: #fff;
            font-weight: bold;
            font-size: .22rem;
            display: flex;
            justify-content: space-around;
            align-items: center;

            > div {
                text-align: center;
                width: 22%;
                line-height: 1.3;
                /*white-space: nowrap;*/
            }
            div:first-child{
                /*width: 12%;*/
            }
        }

        .list-content {
            border-radius: 0 0 .2rem .2rem;
            overflow: hidden;
            .list {
                width: 100%;

                .item:nth-of-type(2n+1) {
                    background-color: #6d78ff;
                }

                .item {
                    position: relative;
                    height: .57rem;
                    color: #fff;
                    display: flex;
                    justify-content: space-around;

                    > div {
                        width: 20%;
                        text-align: center;
                        line-height: .57rem;
                        /*white-space: nowrap;*/
                        /*overflow: hidden;*/
                        /*text-overflow: ellipsis;*/
                        /*margin: 0 0.3rem;*/
                    }

                    .rank {
                        /*width: 12%;*/
                        line-height: .34rem;
                        margin-top: .115rem;
                        background-size: 100% 100%;
                        display: flex;
                        justify-content: center;

                        .rankimg {
                            width: .48rem;
                            height: .34rem;
                            background-size: 100% 100%;
                        }

                        .rankimg1 {
                            color: #ff6e04;
                            line-height: .47rem;
                            background-image: url("../../assets/img/listNo1.png");
                        }

                        .rankimg2 {
                            color: #6f6f6f;
                            line-height: .47rem;
                            background-image: url("../../assets/img/listNo2.png");
                        }

                        .rankimg3 {
                            color: #982a0d;
                            line-height: .47rem;
                            background-image: url("../../assets/img/listNo3.png");
                        }
                    }


                    .name {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .uid {


                    }

                    .CardiacValue {
                        left: 697px;
                    }
                }
            }
        }

    }
</style>