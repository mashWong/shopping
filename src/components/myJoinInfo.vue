<template>
  <div class="activeDiv" @click="operation">
    <img :src="info.img">
    <div class="activeInfo">
      <span class="activeName" v-text="info.name"></span>
      <span class="storeName" v-text="info.shopName"></span>
      <span class="goodsName" v-text="info.commodityName"></span>
      <span v-show="info.quota > 1">满<i v-text="info.fullSubtraction"></i>减<i v-text="info.quota"></i></span>
      <span v-show="info.quota < 1">优惠额度：<i v-text="info.quota"></i></span>
    </div>
    <div class="operationDiv" v-if="isSelected"></div>
    <transition name="slide-fade">
      <div v-if="isSelected" class="operation">
        <div class="join">
          <div class="fa fa-heart-o"  style="color: red"></div>
          <div @click.stop="join()">参加</div>
        </div>
        <div class="join">
          <div class="fa fa-star" style="color: #4395ff;"></div>
          <div @click.stop="view()">查看活动</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'ItemInfo',
        data: function () {
            return {
                context: this.msg,
                searchType: 0,
                isSelected: false
            };
        },
        props: ['info', 'activeName', 'storeName', 'isOpera', 'index', 'onlyShow'],
        watch: {
            isOpera: function (val) {
                this.isSelected = this.index === val;
            }
        },
        methods: {
            operation: function () {
                if (this.onlyShow) return false;
                this.isSelected = !this.isSelected;
                this.$emit("changed", this.index);
            },
            join: function () {
                axios.post('permissionsUsers/promotion/participate',
                    {"promotionId": this.info.id, userId: this.uId})
                    .then((response) => {
                        this.$emit("searchData", response.data.data);
                    })
            },
            view: function () {
                this.$router.push({name: 'active', params: {id: this.info.id}});
            }
        }
    }
</script>

<style scoped lang="scss">
  img {
    float: left;
    width: 100px;
    height: 100px;
  }

  .activeDiv {
    position: relative;
    width: 100%;
    display: inline-block;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    margin-top: -4px;
    background-color: #fff;
  }

  .activeInfo {
    float: left;
    margin: 20px 10px;
    width: calc(100% - 120px);
  }

  span {
    margin: 4px;
    display: block;
    float: left;
  }

  .operationDiv {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #444;
    opacity: 0.4;
  }

  .operation {
    position: absolute;
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }

  .join {
    float: left;
    background-color: #ffffff;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 40px;

  div:first-child {
    margin-top: 20px;
    font-size: 24px;
  }

  div:last-child {
    font-size: 12px;
  }

  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 2.0, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }
</style>
