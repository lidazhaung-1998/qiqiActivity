<template>
    <div>
        <div class="list-wrap">
            <div class="list-title">
                <div v-for="item in titles">{{item}}</div>
            </div>
            <div class="list-content">
                <ul class="list">
                    <li class="item" v-for="(item,index) in list">
                        <div class="rank">
                            <div class="rankimg" :class="item.rankNo || item.rank < 4 ? 'rankimg'+(index+1) : '' ">{{item.rankNo || item.rank}}</div>
                        </div>
                        <div class="name">
                            <span>{{item.anchorName || item.userNickName}}</span>
                        </div>
                        <div class="uid">
                            <span>{{item.anchorId || item.userId}}</span>
                        </div>
                        <div class="CardiacValue">
                            <span>{{item.scores}}</span>
                        </div>
<!--                        总PK积分-->
                        <div class="allPKscore" v-show="more">
                            <span>123456</span>
                        </div>
                        <div class="teamScore" v-show="more">
                            <span>546</span>
                        </div>
<!--                        预计分成-->
                        <div class="divide" v-show="divide">
                            <span>{{item.award}}</span>
                        </div>
                    </li>
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
                width: 20%;
                line-height: 1.3;
                /*white-space: nowrap;*/
            }
        }

        .list-content {
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
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .rank {
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