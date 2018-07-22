<template>
    <div class="details">
        <div class="searchNav">
            <GoBack></GoBack>
            <searchDetails :msg="context"></searchDetails>
        </div>
        <div class="items">
            <ItemInfo v-for="(item, index) in 7" @changed="changed"
                      :index="index" :isOpera=isOpera></ItemInfo>
        </div>
    </div>
</template>

<script>
    import searchDetails from '../components/SearchDetails'
    import GoBack from '../components/GoBack'
    import ItemInfo from '../components/ItemInfo'

    export default {
        data: function () {
            return {context: null, isOpera: false};
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
            }
        }
    }
</script>

<style scoped lang="scss">
    .searchNav{
        width: 100%;
        position: fixed;
        top: 0;
        background-color: #ffffff;
        padding-top: 8px;
        z-index: 100;
    }
    .items{
        padding-top: 40px;
    }
</style>