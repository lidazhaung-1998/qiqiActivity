<template>
    <div class="guild-wrap">
<!--        <div data-v-3eaf9ae7="" class="switchList-box">-->
<!--            <div @click="changeList(0)" class="switchListBtn" :class="selectIndex?'':'select'">最佳人气公会</div>-->
<!--            <div @click="changeList(1)" class="switchListBtn" :class="selectIndex?'select':''">最佳开播公会</div>-->
<!--        </div>-->
        <div class="frontThere-wrap">
            <div class="frontThereItem" v-for="item in finalList">
                <div class="anchorRankInfo">
                    <div class="anchorHead" :style="{'backgroundImage':'url('+item.roomPic+')'}"></div>
                    <div class="txtinfo" v-show="!item.none">
                        <div>
                            <span>昵称：</span>
                            <span>{{item.roomName}}</span>
                        </div>
                        <div>
                            <span>ID：</span>
                            <span>{{item.roomId}}</span>
                        </div>
                        <div>
                            <span>{{selectIndex?'总开播时长':'总人气值'}}</span>
                        </div>
                        <div>
                            <span>{{selectIndex?back(item.score):item.score}}</span>
                        </div>
                    </div>
                    <div class="noone" v-show="item.none">暂无人上榜</div>
                </div>

            </div>
        </div>
        <div class="guildAward"></div>
        <Rule :rule="rule"></Rule>
    </div>
</template>

<script>
    import Rule from "../components/actRule/actRule"

    export default {
        name: "group",
        components: {Rule},
        async created() {
            await this.getMoodsList();
        },
        mounted() {
            this.timer = setInterval(async () => {
                await this.getMoodsList();
            }, 8000);
        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        methods: {
            async changeList(val) {
                this.selectIndex = val;
                if (val === 0) {
                    await this.getMoodsList();
                } else {
                    await this.getBestLiveList();
                }
            },
            async getMoodsList() {
                let {data} = await this.$api.guildRank();
                this.list = data.result;
            },
            async getBestLiveList() {
                let {data} = await this.$api.guildRoomOnMicRank();
                this.list = data.result;
            },
            back(time) {
                time = new Date(time);
                var hour = time / 1000 / 60 / 60 % 24;
                return hour.toFixed(1) + '小时';
            }
        },
        computed: {
            finalList() {
                let len = this.list.length;
                for (var i = len; i < 3; i++) {
                    this.list.push({
                        none: true,
                        roomPic: ''
                    })
                }
                this.list.forEach(item => {
                    if (!item.roomPic) {
                        item.roomPic = "http://resource.qxiu.com/upload/eb70861abf046ae2b098.jpg";
                    }
                })
                return this.list;
            }
        },
        data() {
            return {
                timer:null,
                list: [],
                selectIndex: 0,
                rule: {
                    title: "最佳公会：",
                    rules: [
                        "1.活动期间，根据各个公会旗下所有主播的总人气值进行榜单排名，排名前三的公会将获得相应的奖励，奖励将在活动结束后一周内发放。",
                        "2.活动的最终解释权归齐齐直播所有。"
                    ]
                },
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixin";

    .guild-wrap {
        @include themeWrap();
        @include boxShadow(#e64c73, 1px, #000, .2rem, .11rem, .07rem);

        .switchList-box {
            margin: .15rem auto;
            width: 4.9rem;
            display: flex;
            justify-content: space-between;

            .switchListBtn {
                width: 2.27rem;
                height: .67rem;
                line-height: .67rem;
                text-align: center;
                font-size: .22rem;
                font-weight: bold;
                color: #909090;
                background-size: 100% 100%;
                border-radius: .335rem;
                background-color: #e5e5e5;
            }

            .select {
                background-color: #ff507d;
                color: #fff;
            }
        }

        .frontThere-wrap {
            margin: .2rem auto 0;
            width: 6.82rem;
            height: 5rem;
            background-image: url("../assets/img/centerPositionRankbg.png");
            background-size: 100% 100%;
            box-sizing: border-box;
            padding: 0 .26rem 0 .15rem;
            position: relative;
            z-index: 1;
            display: flex;
            justify-content: space-between;

            .frontThereItem {
                width: 1.97rem;
                height: 2.48rem;
                background-color: #ff507d;
                border-radius: .2rem;
                border: 1px solid #000;
                @include boxShadow(#dc174a, 1px, #000, .2rem, .16rem, .11rem);
                position: absolute;

                &.frontThereItem:nth-child(1) {
                    top: .85rem;
                    left: 2.36rem;

                    .anchorRankInfo {
                        @include frontThreeicon("../assets/img/No1a.png");

                        .anchorHead {
                            border: 0.05rem solid #fff100;
                            @include crown("../assets/img/No1.png");
                        }
                    }
                }

                &.frontThereItem:nth-child(2) {
                    top: 1.72rem;

                    .anchorRankInfo {
                        @include frontThreeicon("../assets/img/No2a.png");

                        .anchorHead {
                            border: 0.05rem solid #eeeeee;
                            @include crown("../assets/img/No2.png");
                        }
                    }
                }

                &.frontThereItem:nth-child(3) {
                    top: 1.99rem;
                    right: .26rem;

                    .anchorRankInfo {
                        @include frontThreeicon("../assets/img/No3a.png");

                        .anchorHead {
                            border: 0.05rem solid #fc8a65;
                            @include crown("../assets/img/No3.png");
                        }
                    }

                }

                .anchorRankInfo {
                    height: 100%;
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .anchorHead {
                        width: .93rem;
                        height: .93rem;
                        box-sizing: border-box;
                        border-radius: 50%;
                        background-image: url("../assets/img/110bdea11b08502aa63744b427a88c24_1.jpg");
                        background-size: 100% 100%;
                        margin-top: -.4rem;
                    }

                    .txtinfo {
                        width: 100%;
                        height: 1.37rem;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-around;
                        color: #fff;
                        font-size: .2rem;

                        div {
                            width: 95%;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            text-align: center;
                        }
                    }
                }

                .noone {
                    font-size: .21rem;
                    position: absolute;
                    top: 48%;
                    color: #fff;
                }
            }
        }
    }
    .guildAward{
        margin: .3rem auto 0;
        width: 6.51rem;
        height: 4.02rem;
        background-image: url("../assets/img/guildmoodsAward-m.png");
        background-size: 100% 100%;
    }
</style>