<template>
    <div class="details">
        <div class="searchNav">
            <GoBack></GoBack>
            <searchDetails :msg="context" @searchData="searchData"></searchDetails>
        </div>
        <div class="items">
            <ItemInfo v-for="(item, index) in info" :key="index" @changed="changed"
                      :info="item" :index="index" :isOpera=isOpera></ItemInfo>
            <h4 v-if="isShow">暂无结果，请尝试其他关键字搜索</h4>
        </div>
    </div>
</template>

<script>
    import searchDetails from '../components/SearchDetails'
    import GoBack from '../components/GoBack'
    import ItemInfo from '../components/ItemInfo'

    export default {
        data: function () {
            return {
                isShow: false,
                context: null,
                isOpera: false,
                info: []
            };
        },
        components: {
            searchDetails,
            GoBack,
            ItemInfo
        },
        created: function () {
            this.context = this.$route.params.context;
        },
        methods: {
            search: function () {

            },
            changed: function (val) {
                this.isOpera = val;
            },
            searchData: function (val) {
                this.info = val.data;
                if (val.data.length === 0) this.isShow = true;
            }
        }
    }
</script>

<style scoped lang="scss">
    .searchNav {
        width: 100%;
        position: fixed;
        top: 0;
        background-color: #ffffff;
        padding-top: 8px;
        z-index: 100;
    }

    .items {
        padding-top: 40px;
    }
</style>