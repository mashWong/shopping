<template>
    <div class="details">
        <div class="searchNav">
            <GoBack></GoBack>
        </div>
        <div class="backgroundNav">
            <slider :listImg="sliders"></slider>
        </div>
        <div class="items">
            <goodsInfo v-for="(item, index) in info" :key="index" :info="item"></goodsInfo>
        </div>
        <div class="footNav">
            <div @click="followShop">
                <span v-show="followed">已关注该商铺</span>
                <span v-show="!followed">关注该商铺</span>
            </div>
            <div @click="join">
                <span v-show="joined">已参与该活动</span>
                <span v-show="!joined">参与活动</span>
            </div>
        </div>
    </div>
</template>

<script>
    import GoBack from '../components/GoBack'
    import goodsInfo from '../components/goodsInfo'
    import slider from '../components/slider'
    import axios from 'axios'

    export default {
        data: function () {
            return {
                id: null,   // 活动Id
                info: [],
                context: null,
                isOpera: false,
                shopId: null,
                business: null,
                sliders: [],
                followed: false,
                joined: false
            };
        },
        components: {
            GoBack,
            goodsInfo,
            slider
        },
        created: function(){
            this.id = this.$route.params.id;
            let param = {
                id: this.id,
                page: 1,
                rows: 10,
            };
            axios.post('promotion/getReturnActivity', param)
                .then((response) => {
                    this.info = response.data.data.returnPaging.data;
                    this.pInfo = response.data.data.list;
                    if(this.info.length > 0){
                        this.shopId = this.info[0].shopId;
                    }
                    this.business = response.data.data.business;
                    for(const i in this.pInfo){
                        this.sliders.push({'url': this.pInfo[i]});
                    }
                })
        },
        methods: {
            followShop: function () {
                let param = {
                    shopId: this.shopId,
                    uid: this.uId,
                    business: this.business,
                };
                axios.post('promotion/followShop', param)
                    .then((response) => {
                        this.followed = true;
                    })
            },
            join: function () {
                console.log(this.uId);
                axios.post('promotion/participate',
                    {"promotionId": this.$route.params.id, userId: this.uId})
                    .then((response) => {
                        this.joined = true;
                    })
            }
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