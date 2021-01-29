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
                >{{item.date}}
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
                page: this.currDay
            }
        },
        mounted() {

        },
        computed: {
            pages() {
                let arr = []
                for (let i = Math.max(1, this.page - 3); i <= Math.min(this.total, this.page + 3); i++) {
                    var num = i;
                    arr.push({
                        date: '2月' + (num + '日'),
                        id: i
                    })
                }
                if (arr.length < 7) {
                    var max = arr[arr.length - 1].id;
                    for (var j = max; j < 7; j++) {
                        var num = j + 1;
                        arr.push({
                            date: '2月' + (num + '日'),
                            id: j + 1
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
        margin: 24px auto 0;
        width: 800px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .prev {
            margin-right: 12px;
            width: 45px;
            height: 32px;
            box-sizing: border-bxo;
            border-radius: 10px;
            border: 1px solid #000;
            background-color: #e11348;

            div {
                border-right: 17px solid #fff;
                @include triangle(11px);
            }
        }

        .next {
            margin-left: 12px;
            width: 45px;
            height: 32px;
            box-sizing: border-bxo;
            border-radius: 10px;
            border: 1px solid #000;
            background-color: #e11348;

            div {
                border-left: 17px solid #fff;
                @include triangle(18px);
            }
        }

        .page-content {
            flex: 1;
            display: flex;
            align-items: center;
            overflow: hidden;

            .page {
                width: 85px;
                height: 26px;
                line-height: 28px;
                text-align: center;
                flex-shrink: 0;
                background-color: #e11348;
                border-radius: 6px;
                border: 1px solid #000;
                color: #ff93af;
                font-weight: bold;
                cursor: pointer;
            }

            .active {
                background-color: #fff36f;
                color: #8900fb;
            }

            .notClick {
                background-color: #ccc;
                color: #fff;
                cursor: not-allowed;
            }

            .page:nth-child(2n) {
                margin: 0 12px;
            }
        }
    }
</style>