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
                    <div class="noone" v-show="item.none">虚位以待</div>
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
        async mounted() {
            this.timer = setInterval(async () => {
                await this.getMoodsList();
            }, 8000);
        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        methods: {
            // async changeList(val) {
            //     this.selectIndex = val;
            //     if (val === 0) {
            //         await this.getMoodsList();
            //     } else {
            //         await this.getBestLiveList();
            //     }
            // },
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
                if (len < 3) {
                    for (var i = len; i < 3; i++) {
                        this.list.push({roomPic: '', none: true});
                    }
                }
                this.list.forEach(item => {
                    if (!item.roomPic) {
                        item.roomPic = "'http://resource.qxiu.com/upload/eb70861abf046ae2b098.jpg'"
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
        @include boxShadow(#e64c73, 2px, #000, 20px, 11px, 7px);

        .switchList-box {
            margin: 15px auto;
            width: 490px;
            display: flex;
            justify-content: space-between;

            .switchListBtn {
                width: 227px;
                height: 67px;
                line-height: 67px;
                text-align: center;
                font-size: 24px;
                font-weight: bold;
                color: #909090;
                background-size: 100% 100%;
                border-radius: 33.5px;
                background-color: #e5e5e5;
                cursor: pointer;
            }

            .select {
                background-color: #ff507d;
                color: #fff;
            }
        }

        .frontThere-wrap {
            margin: 17px auto 0;
            width: 943px;
            height: 632px;
            background-image: url("../assets/img/centerPositionRankbg.png");
            box-sizing: border-box;
            padding: 0 26px 0 15px;
            position: relative;
            z-index: 1;
            display: flex;
            justify-content: space-between;

            .frontThereItem {
                width: 278px;
                height: 349px;
                background-color: #ff507d;
                border-radius: 20px;
                border: 1px solid #000;
                @include boxShadow(#dc174a, 1px, #000, 20px, 16px, 11px);
                position: absolute;

                &.frontThereItem:nth-child(1) {
                    top: 94px;
                    left: 323px;

                    .anchorRankInfo {
                        @include frontThreeicon("../assets/img/No1a.png");

                        .anchorHead {
                            border: 7px solid #fff100;
                            @include crown("../assets/img/No1.png");
                        }
                    }
                }

                &.frontThereItem:nth-child(2) {
                    top: 215px;

                    .anchorRankInfo {
                        @include frontThreeicon("../assets/img/No2a.png");

                        .anchorHead {
                            border: 7px solid #eeeeee;
                            @include crown("../assets/img/No2.png");
                        }
                    }
                }

                &.frontThereItem:nth-child(3) {
                    top: 253px;
                    right: 26px;

                    .anchorRankInfo {
                        @include frontThreeicon("../assets/img/No3a.png");

                        .anchorHead {
                            border: 7px solid #fc8a65;
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
                        width: 130px;
                        height: 130px;
                        box-sizing: border-box;
                        border-radius: 50%;
                        background-image: url("../assets/img/110bdea11b08502aa63744b427a88c24_1.jpg");
                        background-size: 100% 100%;
                        margin-top: -65px;
                    }

                    .txtinfo {
                        width: 100%;
                        height: 210px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-around;
                        color: #fff;
                    }
                }

                .noone {
                    position: absolute;
                    top: 50%;
                    color: #fff;
                }
            }
        }
    }

    .guildAward {
        margin: 30px auto 0;
        width: 931px;
        height: 175px;
        background-image: url("../assets/img/guildmoodsAward.png");
    }
</style>