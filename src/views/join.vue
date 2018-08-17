<template>
    <div class="details">
        <div class="searchNav">
            <GoBack></GoBack>
        </div>
        <div class="items">
            <JoinInfo v-for="(item, index) in info" @changed="changed"
                      :info="item" :index="index" :isOpera=isOpera></JoinInfo>
        </div>
    </div>
</template>

<script>
    import GoBack from '../components/GoBack'
    import JoinInfo from '../components/myJoinInfo'
    import axios from 'axios'

    export default {
        data: function () {
            return {info: [], isOpera: false};
        },
        components: {
            GoBack,
            JoinInfo
        },
        created: function(){
            const params = {
                // id: null,
                uid: this.uId,
                page: 1,
                rows: 10,
            };
            axios.post('permissionsUsers/promotion/getByShopId', params)
                .then((response) => {
                    this.info = response.data.data.data;
                    console.log(this.info)
                })
        },
        methods: {
            changed: function (val) {
                this.isOpera = val;
            },
            selectStore: function (index) {
                this.whichStore = index;
            }
        }
    }
</script>

<style scoped lang="scss">
    .details{
        display: inline-block;
        width: 100%;
    }
    .searchNav {
        position: fixed;
        top: 0;
        background-color: transparent;
        padding-top: 8px;
        z-index: 100;
    }

    .menuNav{
        float: left;
        width: 80px;
        background-color: #f5f6f7;
        top: 0;
        div{
            padding: 14px 6px;
            font-size: 14px;
        }
    }
    .items {
        padding-top: 4px;
    }

    .backgroundNav {
        width: 100%;
        height: 240px;

    img {
        width: 100%;
        height: 100%;
    }
    }
</style>