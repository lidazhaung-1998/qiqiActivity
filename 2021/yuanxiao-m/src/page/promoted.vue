<template>
    <div>
        <div class="promoted-wrap">
            <content-head>
                <div class="listSwitch-wrap" slot="switch">
                    <div class="tab" :class="selectIndex===0?'active':''" @click="selectIndex=0">饺子队主播</div>
                    <div class="tab" :class="selectIndex===1?'active':''" @click="selectIndex=1">汤圆队主播</div>
                </div>
                <div class="ruleTitle" slot="ruleTitle">
                    <div class="leftCircle"></div>
                    <div class="txt">主播使用PK功能参与随机PK，各队连胜场次最高的前20位主播晋级下一轮</div>
                    <div class="rightCircle"></div>
                </div>
            </content-head>

            <list :titles="titles"></list>

        </div>
        <paginator @prev="prev" @next="next" :totalPage="totalPage" :currPage="currPage"></paginator>
    </div>

</template>

<script>
    import list from "../components/list/list";
    import contentHead from "../components/contentHead/contentHead";
    import paginator from "../components/paginator/paginator";

    export default {
        name: "promoted", components: {list, paginator, contentHead},
        data() {
            return {
                selectIndex: 0,
                currPage: 0,
                totalPage: 4,
                titles: [
                    "排名",
                    "昵称",
                    "ID",
                    "连胜场次"
                ]
            }
        },
        methods: {
            prev() {
                this.currPage--;
            },
            next() {
                this.currPage++;
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixin";

    .promoted-wrap {
        @include themeWrap();
        padding-top: 2.4rem;
    }
</style>