<template>
    <div class="paginator-wrap">
        <button @click="$emit('prev')" :disabled="currPage===0" class="pageBtn leftYet"></button>
        <button @click="$emit('next')" :disabled="currPage>=(totalPage - 1)" class="pageBtn rightYet"></button>
    </div>
</template>

<script>
    export default {
        name: "paginator",
        props: ["currPage", "totalPage"],
    }
</script>

<style scoped lang="scss">
    .paginator-wrap {
        margin: .3rem auto 0;
        width: 1.6rem;
        display: flex;
        justify-content: space-between;

        .pageBtn {
            width: .6rem;
            height: .6rem;
            background-size: 100% 100%;
            cursor: pointer;
            outline: none;
            border: 0;
            background-color: transparent;
        }

        .leftYet {
            background-image: url("../../assets/img/leftYet.png");
        }

        .rightYet {
            background-image: url("../../assets/img/rightYet.png");
        }

        .pageBtn:nth-child(1):disabled {
            cursor: not-allowed;
            background-image: url("../../assets/img/leftNot.png");
        }

        .pageBtn:nth-child(2):disabled {
            cursor: not-allowed;
            background-image: url("../../assets/img/rightNot.png");
        }
    }
</style>