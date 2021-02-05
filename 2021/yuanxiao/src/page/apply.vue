<template>
    <div class="apply-page">
        <div class="apply-context">

            <div class="actGiftMsg">
                <contentHead isapply="true">
                    <div class="ruleTitle" slot="ruleTitle">
                        <div class="leftCircle"></div>
                        <div class="txt">在规定时间内收到任意一款活动专属礼物，即算报名成功。由系统随机分配主播所属队伍</div>
                        <div class="rightCircle"></div>
                    </div>
                </contentHead>
            </div>
            <div class="choseTeam"></div>
            <div class="showMyTeam">
                <div v-if="!theTeam" class="team yuanxiao"></div>
                <div v-else class="team jiaozi"></div>
            </div>
        </div>
        <div class="guild-wrap">
            <div class="applyAnchors" v-if="true"></div>
            <div v-else class="switchList-box">
                <div @click="changeList(0)" class="switchListBtn" :class="selectIndex?'':'select'">饺子队主播</div>
                <div @click="changeList(1)" class="switchListBtn" :class="selectIndex?'select':''">汤圆队主播</div>
            </div>

            <div class="teamAnchorList-wrap">
                <div class="anchorInfo-box" v-for="item in anchorsList">
                    <div class="anchorInfo">
                        <div class="anchorHead" :class="item.state==2?'live':''"
                             @click="toRoom(item.state,item.roomId)">
                            <img :src="item.ancPic || defaultHead" alt="">
                        </div>
                        <div class="ellipsis anchorId">
                            ID:{{item.anchorId}}
                        </div>
                        <div class="ellipsis anchorName">
                            昵称:{{item.anchorName}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <paginator @prev="prev" @next="next" :totalPage="totalPage" :currPage="currPage"></paginator>
    </div>
</template>

<script>
    import contentHead from "../components/contentHead/contentHead";
    import paginator from "../components/paginator/paginator";

    export default {
        name: "apply",
        components: {paginator, contentHead},
        async created() {
            await this.checkAnchorIden();
            await this.getAnchors();
        },
        mounted() {
            this.timer = setInterval(async () => {
                await this.getAnchors();
            }, 10000);
        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        data() {
            return {
                defaultHead: "http://static.qxiu.com/live/img/static/default818.png",
                selectIndex: 0,
                currPage: 0,
                totalPage: 0,
                theTeam: 0,
                anchorsList: [],
                timer: null,
            }
        },
        watch: {
            async selectIndex() {
                this.currPage = 0;
                await this.getAnchors();
            }
        },
        computed: {
            sentType() {
                if (this.selectIndex === 0) {
                    return 1;
                } else {
                    return 0;
                }
            }
        },
        methods: {
            async checkAnchorIden() {
                let {data} = await this.$api.anchorIden('1');
                this.theTeam = data.result;
            },
            async getAnchors() {
                let {data} = await this.$api.anchors('1', this.sentType, this.currPage);
                if (data.result) {
                    this.anchorsList = data.result.list;
                    this.totalPage = data.result.totalPage;
                }
            },
            async prev() {
                this.currPage--;
                await this.getAnchors();
            },
            async next() {
                this.currPage++;
                await this.getAnchors();
            },
            async changeList(val) {
                this.selectIndex = val;
            },
            toRoom(state, roomid) {
                if (state == 2 && roomid) {
                    window.location.href = "tvshow:roomid=" + roomid;
                }
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
                padding-top: 45px;
                margin: 0 auto;

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

            .applyAnchors {
                margin: 20px auto;
                width: 248px;
                height: 37px;
                background-image: url("../assets/img/anchors.png");
                background-size: 100% 100%;
            }

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
                            background-size: 100% 100%;
                            overflow: hidden;
                            position: relative;

                            img {
                                width: 100%;
                            }
                        }

                        .live {
                            cursor: pointer;
                        }

                        .live:before {
                            content: "";
                            position: absolute;
                            right: 7px;
                            bottom: 9px;
                            width: 17px;
                            height: 17px;
                            background-image: url("../assets/img/live.gif");
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