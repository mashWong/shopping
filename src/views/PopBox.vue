<template>
    <div :class="{popDiv: isOver}" @click="change" style="position: absolute;right: 0;">
        <div class="fa fa-plus doJoin" @click.stop="isShow = true"></div>
        <transition name="pop-fade">
            <div class="pop" v-if="isShow" @click.stop="">
                <div class="popTitle">关注商户</div>
                <div class="popContext">
                    <input v-model="storeId" @focus="error = ''"/><br>
                    <span style="color: red">{{error}}</span>
                    <button @click="join">关注</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'pop',
        data: function () {
            return {
                storeId: null,
                isShow: false,
                isOver: null,
                error: null
            };
        },
        watch: {
            isShow: function (val) {
                if(val){
                    this.isOver = true;
                } else {
                    setTimeout(() => {
                        this.isOver = false;
                    }, 300);
                }
            }
        },
        methods: {
            change: function(){
                this.isShow = !this.isShow;
            },
            join: function () {
                if(!this.storeId){
                    this.error = "请输入商户编码";
                    return false;
                }
                let param = {
                    shopId: this.storeId,
                    uid: this.uId,
                    business: this.business,
                };
                axios.post('permissionsUsers/promotion/followShop', param)
                    .then((response) => {
                        if(response.data.code === 1001){
                            this.error = "关注成功";
                        } else {
                            this.error = "关注失败";
                        }
                    })
            },

        }
    }
</script>

<style scoped lang="scss">
    .popDiv {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 100;
    }

    .pop {
        position: relative;
        height: 200px;
        background-color: #ffffff;
        box-shadow: 0 0 8px 0 #999
    }

    .popTitle{
        float: left;
        margin: 14px;
    }

    .popContext{
        padding-top: 30px;
        display: inline-block;
        width: 100%;
        input{
            width: 250px;
            height: 38px;
            padding: 0 10px;
            border: 1px solid #999999;
        }
        button{
            margin-right: 71px;
            float: right;
            margin-top: 30px;
            width: 60px;
            height: 30px;
            border-radius: 6px;
            background-color: green;
            border: 0;
            color: #fff;
            outline: none;
        }
    }

    .doJoin{
        padding: 10px;
    }

    .pop-fade-enter-active {
        transition: all .3s ease;
    }

    .pop-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 2.0, 0.8, 1.0);
    }

    .pop-fade-enter, .pop-fade-leave-to {
        transform: translateY(-100%);
        opacity: 0;
    }
</style>