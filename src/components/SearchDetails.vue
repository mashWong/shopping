<template>
    <form @submit="search">
        <input type="text" v-model="context"/>
        <i class="fa fa-search" @click="search()"></i>
        <select v-model="searchType">
            <option value="0">水果</option>
            <option value="1">蔬菜</option>
            <option value="2">饭店</option>
            <option value="3">服饰</option>
        </select>
    </form>
</template>

<script>
    export default {
        name: 'SearchDetails',
        data: function () {
            return {context: this.msg, searchType: 0};
        },
        props: {
            msg: null
        },
        methods: {
            search: function () {
                if (this.context === null || this.context === '') {

                } else {
                    this.$router.push({name: 'details', params: {context: this.context}});
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    form {
        width: calc(100% - 50px);
        display: inline-block;
    }

    i {
        position: relative;
        left: -50px;
        top: 6px;
        cursor: pointer;
    }

    input {
        float: left;
        height: 30px;
        width: 160px;
        border-radius: 15px;
        border: 1px solid #999;
        outline: none;
        padding: 0 20px;
    }

    select {
        width: 100px;
        height: 30px;
        border-radius: 15px;
        float: right;
        outline: none;
        background-color: #fff;
        padding: 0 14px;
    }
</style>
