<template>
    <div class="details">
        <div class="searchNav">
            <GoBack></GoBack>
        </div>
        <div class="backgroundNav">
            <img src="../assets/background.jpg">
        </div>
        <div class="items">
            <ItemInfo v-for="(item, index) in 7" :key="item" :onlyShow="true"></ItemInfo>
        </div>
        <div class="footNav">
            <div>关注该商铺</div>
            <div>参与活动</div>
        </div>
    </div>
</template>

<script>
    import GoBack from '../components/GoBack'
    import ItemInfo from '../components/ItemInfo'

    export default {
        data: function () {
            return {context: null, isOpera: false};
        },
        components: {
            GoBack,
            ItemInfo
        },
        methods: {

        }
    }
</script>

<style scoped lang="scss">
    .searchNav{
        width: 100%;
        position: fixed;
        top: 0;
        background-color: transparent;
        padding-top: 8px;
        z-index: 100;
    }
    .items{
        padding-top: 10px;
        padding-bottom: 50px;
    }
    .backgroundNav{
        width: 100%;
        height: 240px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .footNav{
        position: fixed;
        width: 100%;
        bottom: 0;
        background-color: #ffffff;
        box-shadow: 0 4px 0 5px #eee;
        div{
            width: 50%;
            float: left;
            padding: 10px 0;
            text-align: center;
        }
    }
</style>