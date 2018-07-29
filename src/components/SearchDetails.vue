<template>
    <form @submit="search">
        <div>
            <input type="text" v-model="context"/>
            <i class="fa fa-search" @click="search()"></i>
        </div>
        <select v-model="searchType">
            <option value="0">水果</option>
            <option value="1">蔬菜</option>
            <option value="2">饭店</option>
            <option value="3">服饰</option>
        </select>
    </form>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'SearchDetails',
        data: function () {
            return {
                context: this.msg, searchType: 0, param: {}, params: {
                    longitude: 19.4,
                    commodityName: "苹果",
                    latitude: 19.6,
                    page: 1,
                    rows: 1,
                    distance: 3
                }
            };
        },
        props: {
            msg: null
        },
        created: function () {
            // const querystring = require('querystring');
            axios.post('promotion/getslorPromotion', querystring.stringify({slorPromotion: JSON.stringify(this.params)}))
                .then((response) => {
                    console.log(response.data)
                })
            // axios({
            //     method: "post",
            //     url: "promotion/getslorPromotion",
            //     data: {slorPromotion: JSON.stringify(this.params)},
            //     transformRequest: [function (data) {
            //         let ret = '';
            //         for (let it in data) {
            //             ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            //         }
            //         return ret
            //     }],
            //     headers:{
            //         'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
            //     }
            // })
        },
        methods: {
            search: function () {
                if (this.context !== null && this.context !== '') {
                    this.$router.push({name: 'details', params: {context: this.context}});
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    form {
        width: calc(100% - 60px);
        display: inline-block;
        float: left;

    div {
        width: 34%;
        float: left;
        position: relative;
    }

    }

    i {
        position: absolute;
        right: -28px;
        top: 6px;
        cursor: pointer;
    }

    input {
        float: left;
        height: 30px;
        width: 100%;
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
