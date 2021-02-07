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
                            <div class="rankimg" :class="item.rankNo < 4 || item.rank ? 'rankimg'+(index+1) : '' ">
                                {{item.rankNo || item.rank}}
                            </div>
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
                        <div class="allPKscore" v-show="more">
                            <span>{{item.allTickets}}</span>
                        </div>
                        <div class="teamScore" v-show="more">
                            <span>{{item.type ? "饺子队" : "汤圆队" }}</span>
                        </div>
                        <!--                        这个是用户预计分红齐齐豆-->
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
        width: 884px;
        background-color: #424ee3;
        border-radius: 20px;
        border: 4px solid #0e1569;
        overflow: hidden;

        .list-title {
            line-height: 64px;
            color: #fff;
            font-weight: bold;
            font-size: 20px;
            display: flex;
            justify-content: space-around;

            > div {
                text-align: center;
                width: 21%;
                white-space: nowrap;
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
                    height: 50px;
                    color: #fff;
                    display: flex;
                    justify-content: space-around;

                    > div {
                        width: 20%;
                        text-align: center;
                        line-height: 51px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .rank {
                        line-height: 34px;
                        margin-top: 8.5px;
                        background-size: 100% 100%;
                        display: flex;
                        justify-content: center;

                        .rankimg {
                            width: 48px;
                            height: 34px;
                        }

                        .rankimg1 {
                            color: #ff6e04;
                            line-height: 47px;
                            background-image: url("../../assets/img/listNo1.png");
                        }

                        .rankimg2 {
                            color: #6f6f6f;
                            line-height: 47px;
                            background-image: url("../../assets/img/listNo2.png");
                        }

                        .rankimg3 {
                            color: #982a0d;
                            line-height: 47px;
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