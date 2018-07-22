<template>
    <i class="fa fa-chevron-left" @click="goBack"></i>
</template>

<script>
    export default {
        name: 'GoBack',
        methods: {
            goBack: function () {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped lang="scss">
    i {
        float: left;
        padding: 10px 20px 10px 10px;
    }
</style>
