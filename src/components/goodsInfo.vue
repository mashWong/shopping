<template>
    <div class="activeDiv">
        <img :src="info.img">
        <div class="activeInfo">
            <span class="goodsName" v-text="info.name"></span>
            <span class="price">原价<i v-text="info.rice"></i>元</span>
            <span class="activePrice">优惠价格<i v-text="info.favorablePrice.toFixed(2)"></i>元</span>
            <span v-text="info.activityTranslation"></span>
            <span v-text="info.briefIntroduction"></span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'ItemInfo',
        data: function () {
            return {
                context: this.msg,
                searchType: 0,
                isSelected: false
            };
        },
        props: ['info', 'activeName', 'storeName', 'isOpera', 'index', 'onlyShow'],
        watch: {
            isOpera: function (val) {
                this.isSelected = this.index === val;
            }
        },
        methods: {

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
</style>
