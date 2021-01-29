<template>
    <div>
        <div class="list-wrap">
            <div class="list-title">
                <div v-for="item in titles">{{item}}</div>
            </div>
            <div class="list-content">
                <ul class="list">
                    <li class="item" v-for="(item,index) in list">
                        <div class="rank" :class="(index+1) < 4 ? 'rank'+(item.rankNo || item.rank) : '' ">{{item.rankNo || item.rank}}
                        </div>
                        <div class="name">
                            <span>{{item.anchorName || item.userNickName || "炫酷达人"}}</span>
                        </div>
                        <div class="uid">
                            <span>{{item.anchorId || item.userId}}</span>
                        </div>
                        <div class="CardiacValue">
                            <span>{{item.scores || item.scores}}</span>
                        </div>
                        <div class="sweetheart">
                            <span>{{item.greatUserName || item.greatAnchorName}}</span>
                        </div>
                        <div class="uuid">
                            <span>{{item.greatUserId || item.greatAnchorId}}</span>
                        </div>
                        <div class="sentValue">
                            <span>{{item.greatUserScore || item.greatAnchorScore}}</span>
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
        props: ['list', 'changed', 'titles'],
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style scoped lang="scss">
    @import "list";
</style>