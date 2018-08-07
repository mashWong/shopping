<template>
  <div class="details">
    <div class="searchNav">
      <GoBack></GoBack>
    </div>
    <div class="backgroundNav">
      <slider :listImg="sliders"></slider>
    </div>
    <div class="menuNav" :style="{'position': searchBarFixed?'fixed':''}">
      <div v-for="(item, index) in info.myFollow" :key="index" @click="selectStore(index)"
           :style="{'background': whichStore==index?'#fff':'#f5f6f7'}">
        <span v-text="item.shopName"></span>
      </div>
    </div>
    <div class="items">
      <ItemInfo v-for="(item, index) in 7" :key="index" @changed="changed"
                :index="index" :isOpera=isOpera></ItemInfo>
    </div>
  </div>
</template>

<script>
    import GoBack from '../components/GoBack'
    import ItemInfo from '../components/ItemInfo'
    import slider from '../components/slider'
    import axios from 'axios'

    export default {
        data: function () {
            return {
                context: null,
                isOpera: false,
                whichStore: 0,
                searchBarFixed: false,
                info: [],
                sliders: []
            };
        },
        components: {
            GoBack,
            ItemInfo,
            slider
        },
        created: function(){
            axios.post('promotion/selectMyfollow',{uid: '546548465456'})
                .then((response) => {
                    this.info = response.data.data;
                    for(const i in this.info){
                        this.sliders.push({'url': this.info[i]});
                    }
                })
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll: function(){
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                let offsetTop = document.querySelector('.items').offsetTop;
                if (scrollTop > offsetTop) {
                    this.searchBarFixed = true
                } else {
                    this.searchBarFixed = false
                }
            },
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
    background-color: #f5f6f7;
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
    float: right;
    width: calc(100% - 80px);
    padding-top: 4px;
  }

  .backgroundNav{
    width: 100%;
    height: 240px;
  img{
    width: 100%;
    height: 100%;
  }
  }
</style>