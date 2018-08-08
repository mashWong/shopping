<template>
  <div class="details">
    <div class="searchNav">
      <GoBack></GoBack>
    </div>
    <div class="backgroundNav">
      <!--<img src="../../src/assets/background.jpg">-->
      <slider :listImg="sliders"></slider>
    </div>
    <div id="menuNav" class="menuNav" :style="{position: searchBarFixed?'fixed':'', height: screenHeight + 'px'}">
      <div class="menuNavDiv">
        <div v-for="(item, index) in info.myFollow" :key="index" @click="selectStore(index, item.id)"
             :style="{'background': whichStore==index?'#fff':'#f5f6f7'}">
          <span v-text="item.shopName"></span>
        </div>
      </div>
    </div>
    <div id="items" class="items" :style="{ minHeight: (screenHeight - 8) + 'px' }">
      <JoinInfo v-for="(item, index) in activeInfo" :key="index" @changed="changed"
                :info="item" :index="index" :isOpera=isOpera></JoinInfo>
    </div>
  </div>
</template>

<script>
    import GoBack from '../components/GoBack'
    import JoinInfo from '../components/myJoinInfo'
    import slider from '../components/slider'
    import axios from 'axios'

    export default {
        data: function () {
            return {
                context: null,
                isOpera: false,
                whichStore: 0,
                searchBarFixed: false,
                screenHeight: 0,
                info: [],
                activeInfo: [],
                sliders: []
            };
        },
        components: {
            GoBack,
            JoinInfo,
            slider
        },
        created: function(){
            axios.post('promotion/selectMyfollow',{uid: '546548465456'})
                .then((response) => {
                    this.info = response.data.data;
                    for(const i in this.info.banner){
                        this.sliders.push({'url': this.info.banner[i]});
                    }
                    this.getShop(this.info.myFollow[0].id);
                })
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll);
        },
        watch: {
            info: function () {
                this.$nextTick(function () {
                    this.screenHeight = document.documentElement.clientHeight;
                })
            }
        },
        methods: {
            getShop: function(id){
                let param = {
                    id: id,
                    uid: '546548465456',
                    page: 1,
                    rows: 10
                };
                axios.post('promotion/getByShopId', param)
                    .then((response) => {
                        this.activeInfo = response.data.data.data;
                    })
            },
            handleScroll: function(){
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                let offsetTop = document.querySelector('.items').offsetTop;
                this.searchBarFixed = scrollTop > offsetTop;
            },
            changed: function (val) {
                this.isOpera = val;
            },
            selectStore: function (index, id) {
                this.whichStore = index;
                this.getShop(id);
            }
        }
    }
</script>

<style scoped lang="scss">
  .details{
    width: 100%;
    display: inline-block;
    background-color: #f5f6f7;
  }
  .searchNav {
    position: fixed;
    top: 8px;
    background-color: transparent;
    z-index: 100;
  }

  .menuNav{
    float: left;
    width: 80px;
    height: 100%;
    overflow: scroll;
    background-color: #f5f6f7;
    top: 0;
  }
  .menuNavDiv{
    div{
      padding: 14px 0;
      font-size: 14px;
    }
  }
  .items {
    float: right;
    width: calc(100% - 80px);
    padding-top: 4px;
  }

  .backgroundNav{
    width: 100%;
    max-height: 240px;
      img{
        width: 100%;
        height: 100%;
      }
  }
</style>