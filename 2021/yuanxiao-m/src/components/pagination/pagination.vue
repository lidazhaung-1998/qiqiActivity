<template>
    <div>
        <div class="pages-wrap">
            <div class="prev" @click="prev">
                <div></div>
            </div>
            <ul class="page-content">
                <li class="page"
                    :class="[currDay === item.id ? 'active' : '']"
                    v-for="(item,index) in pages"
                    :key="index"
                    @click="changeDay(item.id)"
                >{{item.session}}
                    <br/>
                    {{item.date}}
                </li>
            </ul>
            <div class="next" @click="next">
                <div></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "pagination",
        props: ['total', 'currDay', 'max'],
        watch: {
            page(newval) {
                this.$emit('change', newval);
            },
            currDay(val) {
                this.page = val;
            }
        },
        methods: {
            changeDay(day) {
                this.page = day;
            },
            prev() {
                this.page > 1 && (this.page--)
            },
            next() {
                this.page < this.total && (this.page++);
            }
        },
        data() {
            return {
                page: this.currDay,
                gameDate: [
                    "19:00",
                    "19:10",
                    "19:20",
                    "19:30",
                    "19:40",
                    "19:50",
                    "20:00",
                    "20:10",
                    "20:20",
                    "20:30",
                ]
            }
        },
        mounted() {

        },
        computed: {
            pages() {
                let arr = []
                for (let i = Math.max(1, this.page - 2); i <= Math.min(this.total, this.page + 2); i++) {
                    var num = i;
                    arr.push({
                        session: "第" + i + "轮",
                        date: this.gameDate[num - 1],
                        id: i
                    })
                }
                if (arr.length < 5) {
                    var max = arr[arr.length - 1].id;
                    for (var j = max; j < 5; j++) {
                        var num = j + 1;
                        arr.push({
                            session: "第" + (num) + "轮",
                            date: this.gameDate[j],
                            id: num
                        })
                    }
                }
                return arr;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/mixin";

    .pages-wrap {
        margin: .24rem auto .3rem;
        width: 6.45rem;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .prev {
            margin-right: .12rem;
            width: .61rem;
            height: .43rem;
            box-sizing: border-bxo;
            border-radius: .1rem;
            border: 1px solid #000;
            background-color: #6d78ff;

            div {
                border-right: .23rem solid #fff;
                @include triangle(0.14rem);
            }
        }

        .next {
            margin-left: .12rem;
            width: .61rem;
            height: .43rem;
            box-sizing: border-bxo;
            border-radius: .1rem;
            border: 1px solid #000;
            background-color: #6d78ff;

            div {
                border-left: .23rem solid #fff;
                @include triangle(.2rem);
            }
        }

        .page-content {
            flex: 1;
            display: flex;
            align-items: center;
            overflow: hidden;

            .page {
                width: .87rem;
                height: .53rem;
                text-align: center;
                flex-shrink: 0;
                background-color: #0e1569;
                border-radius: .06rem;
                color: #ffffff;
                font-weight: bold;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: .21rem;
            }

            .active {
                border: 1px solid #0e1569;
                background-color: #fff36f;
                color: #0e1569;
            }

            .notClick {
                background-color: #ccc;
                color: #fff;
                cursor: not-allowed;
            }

            .page:nth-child(2n) {
                margin: 0 .12rem;
            }
        }
    }
</style>