<template>
    <form @submit="search">
        <input type="text" v-model="context"/>
        <i class="fa fa-search" @click="search()"></i>
    </form>
</template>

<script>
    export default {
        name: 'SearchHome',
        data: function () {
            return {context: null};
        },
        props: {
            msg: null
        },
        methods: {
            search: function () {
                if(this.context !== null && this.context !== ''){
                    this.$router.push({ name : 'details', params : {context: this.context}});
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    i {
        position: relative;
        left: -35px;
        cursor: pointer;
    }
    input {
        height: 40px;
        width: 60%;
        max-width: 500px;
        border-radius: 20px;
        border: 1px solid #999;
        outline: none;
        padding: 0 20px;
    }
</style>
