<template>
    <!--    result = 12开始默认情人节tab result = 14 结束  -->
    <div>
        <div>
            <Headers :switchId="switchId" @pvTab="pvTab"></Headers>
        </div>
        <div class="content">
            <center-poistion v-if="switchId === 0"></center-poistion>
            <clock-in v-else-if="switchId === 1"></clock-in>
            <Group v-else-if="switchId === 3"></Group>
            <valentine-day v-else-if="switchId === 4"></valentine-day>
        </div>
        <div class="isIos" v-if="isIOS">本活动与苹果公司无关</div>
    </div>

</template>

<script>
    import Headers from "../components/headers/headers";
    import CenterPoistion from "./centerPosition"
    import ClockIn from "./clockEveryDay";
    import Group from "./group"
    import ValentineDay from "./valentineDay"

    export default {
        name: "index",
        async created() {
            let {data} = await this.$api.today();
            if (data.result >= 12 && data.result <= 13) {
                this.switchId = 4;
            }
        },
        components: {
            Headers,
            CenterPoistion,
            ClockIn,
            Group,
            ValentineDay
        },
        data() {
            return {
                isIOS: this.common.clientType === "iPhone",
                switchId: 0
            }
        },
        methods: {
            pvTab(val) {
                this.switchId = val;
            }
        },
        computed: {}
    }
</script>

<style scoped lang="scss">
    .content {
        padding-top: 10px;
        position: relative;
        z-index: 1;
    }

    .isIos {
        font-size: .21rem;
        color: #fff;
        line-height: .8rem;
        text-align: center;
    }
</style>