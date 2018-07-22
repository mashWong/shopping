<template>
    <div class="activeDiv" @click="operation">
        <img src="../assets/dragon.png">
        <div class="activeInfo">
            <span class="activeName">广惠超市水果大处理</span>
            <span class="storeName">广惠超市</span><br><br>
            <span class="goodsName">红富士苹果</span>
            <span class="price">原价<i>5.8</i>元</span>
            <span class="activePrice">优惠价格<i>3.8</i>元</span>
        </div>
        <div class="operationDiv">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'ItemInfo',
        data: function () {
            return {context: this.msg, searchType: 0};
        },
        props: {
            activeName: null,
            storeName: null
        },
        methods: {
            operation: function(){

            },
            join: function () {

            },
            view: function () {

            }
        }
    }
</script>

<style scoped lang="scss">
    img{
        float: left;
        width: 100px;
        height: 100px;
    }
    .activeDiv {
        position: relative;
        width: 100%;
        display: inline-block;
        border-bottom: 1px solid #999;
    }

    .activeInfo{
        float: left;
        margin: 20px 10px;
        width: calc(100% - 120px);
    }
    span {
        margin: 4px;
        display: block;
        float: left;
    }

    .operationDiv{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #2c3e50;
        opacity: 0.8
    }
</style>
