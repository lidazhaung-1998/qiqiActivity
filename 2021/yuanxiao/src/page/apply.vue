<template>
    <div class="apply-page">
        <div class="apply-context">
            <div class="actGiftMsg"></div>
            <div class="choseTeam"></div>
            <div class="showMyTeam">
                <div class="team yuanxiao"></div>
                <div class="team jiaozi"></div>
            </div>
        </div>
        <div class="guild-wrap">
            <div data-v-3eaf9ae7="" class="switchList-box">
                <div @click="changeList(0)" class="switchListBtn" :class="selectIndex?'':'select'">饺子队主播</div>
                <div @click="changeList(1)" class="switchListBtn" :class="selectIndex?'select':''">汤圆队主播</div>
            </div>

            <div class="teamAnchorList-wrap">
                <div class="anchorInfo-box" v-for="item in new Array(6)">
                    <div class="anchorInfo">
                        <div class="anchorHead"></div>
                        <div class="ellipsis anchorId">
                            ID:2334315
                        </div>
                        <div class="ellipsis anchorName">
                            昵称:七七大牛人
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <paginator @prev="prev" @next="next" :totalPage="totalPage" :currPage="currPage"></paginator>
    </div>
</template>

<script>
    import paginator from "../components/paginator/paginator";
    export default {
        name: "apply",
        components:{paginator},
        data() {
            return {
                selectIndex: 0,
                currPage: 0,
                totalPage: 4
            }

        },
        computed: {},
        methods: {
            prev() {
                this.currPage--;
            },
            next() {
                this.currPage++;
            },
            async changeList(val) {
                this.selectIndex = val;
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixin";

    .apply-page {
        .apply-context {
            @include themeWrap();
            padding-top: 140px;

            .actGiftMsg {
                margin: 0 auto;
                width: 889px;
                height: 426px;
                background-image: url("../assets/img/actGift.png");
                background-size: 100% 100%;
            }

            .choseTeam {
                margin: 50px auto 20px;
                width: 788px;
                height: 93px;
                background-image: url("../assets/img/choseTeam.png");
                background-size: 100% 100%;
            }

            .showMyTeam {
                margin: 0 auto;
                width: 783px;
                height: 63px;
                position: relative;

                .team {
                    width: 103px;
                    height: 62px;
                    background-size: 100% 100%;
                    position: absolute;
                }

                .yuanxiao {
                    background-image: url("../assets/img/yuanxiaoTeam.png");
                    left: 80px;
                }

                .jiaozi {
                    background-image: url("../assets/img/jiaoziTeam.png");
                    right: 80px;
                }


            }
        }

        .guild-wrap {
            @include themeWrap();
            margin-top: 80px;

            .switchList-box {
                margin: -36px auto 0;
                width: 490px;
                display: flex;
                justify-content: space-between;

                .switchListBtn {
                    width: 194px;
                    height: 63px;
                    line-height: 63px;
                    text-align: center;
                    font-size: 24px;
                    color: #fff;
                    border-radius: 31.5px;
                    background-color: #26298f;
                    cursor: pointer;
                }

                .select {
                    box-sizing: border-box;
                    line-height: 55px;
                    background-color: #ff7db1;
                    color: #fff;
                    border: 4px solid #ff3d8b;
                }
            }

            .teamAnchorList-wrap {
                box-sizing: border-box;
                padding: 20px 20px 0;
                display: flex;
                flex-wrap: wrap;

                .anchorInfo-box {
                    width: 192px;
                    height: 252px;
                    box-sizing: border-box;
                    background-color: #6d78ff;
                    border-radius: 20px;
                    border: 4px solid #26298f;
                    margin: 0 23px 25px;

                    .anchorInfo {
                        height: 88%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                        font-size: 20px;
                        color: #fff;

                        .ellipsis {
                            width: 90%;
                            text-align: center;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }

                        .anchorHead {
                            width: 99px;
                            height: 99px;
                            box-sizing: border-box;
                            border-radius: 50%;
                            border: 5px solid #ffffff;
                            background-image: url("../assets/img/110bdea11b08502aa63744b427a88c24_1.jpg");
                            background-size: 100% 100%;
                        }

                        .anchorId {

                        }

                        .anchorName {
                        }
                    }
                }
            }
        }



    }
</style>