<template>
    <div class="apply-page">
        <div class="apply-context">
            <div class="gameMsg-wrap">
                <contentHead isapply="true">
                    <div class="ruleTitle" slot="ruleTitle">
                        <div class="leftCircle"></div>
                        <div class="txt">
                            在规定时间内收到任意一款活动专属礼物， <br/>即算报名成功由系统随机分配主播所属队伍
                        </div>
                        <div class="rightCircle"></div>
                    </div>
                </contentHead>
            </div>
            <div class="choseTeam"></div>
            <div class="showMyTeam">
                <div v-show="theTeam===0" class="team yuanxiao"></div>
                <div v-show="theTeam===1" class="team jiaozi"></div>
            </div>
        </div>
        <div class="guild-wrap">
            <div class="applyAnchors" v-if="!grouped"></div>
            <div v-else class="switchList-box">
                <div @click="changeList(0)" class="switchListBtn" :class="selectIndex?'':'select'">汤圆队主播</div>
                <div @click="changeList(1)" class="switchListBtn" :class="selectIndex?'select':''">饺子队主播</div>
            </div>
            <div class="teamAnchorList-wrap">
                <div class="anchorInfo-box" v-for="item in anchorsList">
                    <div class="anchorInfo">
                        <div class="anchorHead"
                             :class="item.state == 2 ? 'live' : '' "
                             @click="toRoom(item.state,item.roomId)">
                            <img :src="item.ancPic || defaultHead" alt="">
                        </div>
                        <div class="ellipsis anchorId">
                            ID:{{item.anchorId}}
                        </div>
                        <div class="ellipsis anchorName">
                            昵称:{{item.anchorName || "炫酷达人"}}
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
    import contentHead from "../components/contentHead/contentHead";

    export default {
        name: "apply",
        components: {paginator, contentHead},
        async created() {
            await this.getGroupedState();
        },
        mounted() {
            this.timer = setInterval(async () => {
                if (this.grouped) {
                    await this.getAnchors();
                } else {
                    await this.getApplyAllAnchors();
                }
            }, 10000);
        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        data() {
            return {
                grouped: false,
                defaultHead: "http://static.qxiu.com/live/img/static/default818.png",
                selectIndex: 0,
                currPage: 0,
                totalPage: 4,
                theTeam: -1,
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
                    return 0;
                } else {
                    return 1;
                }
            }
        },
        methods: {
            async getGroupedState() {
                let {data} = await this.$api.groupState("1");
                if (data.result) {
                    this.grouped = true;
                    await this.getAnchors();
                    await this.checkAnchorIden();
                } else {
                    await this.getApplyAllAnchors();
                }
            },
            async getApplyAllAnchors() {
                let {data} = await this.$api.allAnchors("1", this.currPage);
                if (data.result) {
                    this.setList(data);
                }
            },
            async checkAnchorIden() {
                let {data} = await this.$api.anchorIden('1');
                this.theTeam = data.result;
            },
            async getAnchors() {
                let {data} = await this.$api.anchors('1', this.sentType, this.currPage);
                if (data.result) {
                    this.setList(data);
                }
            },
            setList(data) {
                this.anchorsList = data.result.list;
                this.totalPage = data.result.totalPage;
            },
            async prev() {
                this.currPage--;
                this.grouped ? await this.getAnchors() : await this.getApplyAllAnchors();
            },
            async next() {
                this.currPage++;
                this.grouped ? await this.getAnchors() : await this.getApplyAllAnchors();
            },
            async changeList(val) {
                this.selectIndex = val;
            },
            toRoom(state, roomid) {
                if (state === 2 && roomid) {
                    if (this.common.clientType == 'Android') {
                        window.location = 'guagua://qiqi::1::1:' + roomid;
                    } else if (this.common.clientType == 'iPhone') {
                        window.location = '#guagua://qiqi::1::1:' + roomid;
                    }
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
            padding-top: 1.5rem;

            .gameMsg-wrap {
                padding-top: 1.4rem;
            }

            .choseTeam {
                margin: .5rem auto .2rem;
                width: 6.78rem;
                height: .79rem;
                background-image: url("../assets/img/choseTeam.png");
                background-size: 100% 100%;
            }

            .showMyTeam {
                margin: 0 auto;
                width: 783px;
                height: 63px;
                position: relative;

                .team {
                    width: 1.03rem;
                    height: .62rem;
                    background-size: 100% 100%;
                    position: absolute;
                }

                .yuanxiao {
                    background-image: url("../assets/img/yuanxiaoTeam.png");
                    left: .8rem;
                }

                .jiaozi {
                    background-image: url("../assets/img/jiaoziTeam.png");
                    left: 5.1rem;
                }


            }
        }

        .guild-wrap {
            @include themeWrap();
            margin-top: .8rem;

            .applyAnchors {
                margin: .2rem auto;
                width: 2.48rem;
                height: .37rem;
                background-image: url("../assets/img/anchors.png");
                background-size: 100% 100%;
            }

            .switchList-box {
                margin: -.36rem auto 0;
                width: 4.9rem;
                display: flex;
                justify-content: space-between;

                .switchListBtn {
                    width: 2.12rem;
                    height: .69rem;
                    line-height: .69rem;
                    text-align: center;
                    font-size: .24rem;
                    color: #fff;
                    border-radius: .315rem;
                    background-color: #26298f;
                    cursor: pointer;
                }

                .select {
                    box-sizing: border-box;
                    line-height: .61rem;
                    background-color: #ff7db1;
                    color: #fff;
                    border: 0.04rem solid #ff3d8b;
                }
            }

            .teamAnchorList-wrap {
                box-sizing: border-box;
                padding: .2rem .2rem 0;
                display: flex;
                flex-wrap: wrap;

                .anchorInfo-box {
                    width: 1.92rem;
                    height: 2.52rem;
                    box-sizing: border-box;
                    background-color: #6d78ff;
                    border-radius: .2rem;
                    border: 0.04rem solid #26298f;
                    margin: 0 .15rem .25rem;

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
                            font-size: .21rem;
                        }

                        .anchorHead {
                            width: 1.1rem;
                            height: 1.1rem;
                            box-sizing: border-box;
                            border-radius: 50%;
                            border: 0.05rem solid #ffffff;
                            background-size: 100% 100%;
                            position: relative;

                            img {
                                width: 100%;
                                border-radius: 50%;
                            }
                        }

                        .live:before {
                            content: "";
                            position: absolute;
                            right: 0;
                            bottom: -.04rem;
                            width: .17rem;
                            height: .17rem;
                            background-image: url("../assets/img/live2.gif");
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