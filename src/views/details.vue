<template>
    <div class="details">
        <GoBack></GoBack>
        <searchDetails :msg="context"></searchDetails>
        <div class="items">
            <ItemInfo></ItemInfo>
            <ItemInfo></ItemInfo>
            <ItemInfo></ItemInfo>
            <ItemInfo></ItemInfo>
            <ItemInfo></ItemInfo>
        </div>
    </div>
</template>

<script>
    import searchDetails from '../components/SearchDetails'
    import GoBack from '../components/GoBack'
    import ItemInfo from '../components/ItemInfo'

    export default {
        data: function () {
            return {context: null};
        },
        props: {
            msg: null
        },
        components: {
            searchDetails,
            GoBack,
            ItemInfo
        },
        created: function () {
            this.context = this.$route.params.context;
            console.log(this.context);
        },
        methods: {
            search: function () {

            }
        }
    }
</script>

<style scoped lang="scss">

</style>