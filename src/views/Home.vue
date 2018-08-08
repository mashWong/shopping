<template>
    <div class="home">
        <img src="../assets/logo.jpg">
        <SearchHome></SearchHome>
    </div>
</template>

<script>
    import SearchHome from '@/components/SearchHome.vue'

    export default {
        name: 'home',
        components: {
            SearchHome
        }
    }
</script>

<style scoped lang="scss">
    img{
        width: 140px;
    }
    #nav {
        width: calc(100% - 20px);
        margin: 10px;
        display: inline-block;
        text-align: left;
        a {
            font-weight: bold;
            color: #2c3e50;
            font-size: 14px;
            float: left;
            padding-left: 10px;
        }
    }
</style>
