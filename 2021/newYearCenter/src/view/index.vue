<template>
    <div>
        <div>
            <Headers :switch-id="switchId" @pvTab="pvTab"></Headers>
        </div>
        <div class="content">
            <center-poistion v-if="switchId === 0"></center-poistion>
            <clock-in v-else-if="switchId === 1"></clock-in>
            <Group v-else-if="switchId === 3"></Group>
            <valentine-day v-else-if="switchId === 4"></valentine-day>
        </div>
    </div>

</template>

<script>
    import Headers from "../components/headers/headers";
    import CenterPoistion from "./centerPosition"
    import ClockIn from "./clockEveryDay";
    import ValentineDay from "./valentineDay"
    import Group from "./group"

    export default {
        name: "index",
        components: {
            Headers,
            CenterPoistion,
            ClockIn,
            Group,
            ValentineDay
        },
        async created() {
            let {data} = await this.$api.today();
            if (data.result >= 12 && data.result <= 13) {
                this.switchId = 4;
            }
        },
        data() {
            return {
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
</style>