<template>
    <div class="activeDiv" @click="operation">
        <img src="../assets/dragon.png">
        <div class="activeInfo">
            <span class="activeName">广惠超市水果大处理</span>
            <span class="storeName">广惠超市</span>
            <span class="goodsName">红富士苹果</span>
            <span class="price">原价<i>5.8</i>元</span>
            <span class="activePrice">优惠价格<i>3.8</i>元</span>
        </div>
        <div class="operationDiv" v-if="isSelected"></div>
        <transition name="slide-fade">
            <div v-if="isSelected" class="operation">
                <div class="join">
                    <div class="fa fa-heart" style="color: red"></div>
                    <div @click="join()">参加</div>
                </div>
                <div class="join">
                    <div class="fa fa-star" style="color: #4395ff;"></div>
                    <div @click="view()">查看活动</div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'ItemInfo',
        data: function () {
            return {context: this.msg, searchType: 0, isSelected: false};
        },
        props: ['activeName', 'storeName', 'isOpera', 'index', 'onlyShow'],
        watch: {
            isOpera: function (val) {
                this.isSelected = this.index === val;
            }
        },
        methods: {
            operation: function () {
                if (this.onlyShow) return false;
                this.isSelected = !this.isSelected;
                this.$emit("changed", this.index);
            },
            join: function () {

            },
            view: function () {
                this.$router.push({name: 'active', params: {id: "12"}});
            }
        }
    }
</script>

<style scoped lang="scss">
    img {
        float: left;
        width: 100px;
        height: 100px;
    }

    .activeDiv {
        position: relative;
        width: 100%;
        display: inline-block;
        border-bottom: 1px solid #eee;
        overflow: hidden;
        margin-top: -4px;
        background-color: #fff;
    }

    .activeInfo {
        float: left;
        margin: 20px 10px;
        width: calc(100% - 120px);
    }

    span {
        margin: 4px;
        display: block;
        float: left;
    }

    .operationDiv {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #444;
        opacity: 0.4;
    }

    .operation {
        position: absolute;
        width: 100%;
        height: 100%;
        display: -webkit-flex;
        justify-content: center;
        align-items: center;
    }

    .join {
        float: left;
        background-color: #ffffff;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 0 40px;

    div:first-child {
        margin-top: 20px;
        font-size: 24px;
    }

    div:last-child {
        font-size: 12px;
    }

    }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 2.0, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(100%);
        opacity: 0;
    }
</style>
