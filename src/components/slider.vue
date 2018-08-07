<template>
    <div class="swiper-container" @touchend="reStart">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(str, index) in listImg" :key="index"
                 :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.css';

    export default {
        props: ['listImg'],
        data: function () {
            return {
                swiper: null
            }
        },
        watch: {
            listImg: function () {
                this.$nextTick(function () {
                    this.reStart();
                })
            }
        },
        methods: {
            reStart: function () {
                if (this.swiper) this.swiper.destroy(true, false);
                this.swiper = new Swiper('.swiper-container', {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    loop: true,
                    speed: 600,
                    autoplay: {
                        delay: 1000
                    },
                    on: {}
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .swiper-container {
        width: 100%;
        height: 10rem;

    .swiper-wrapper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;

    img {
        width: 100%;
        height: 100%;
    }

    }
    .swiper-pagination-bullet {
        width: 0.833rem;
        height: 0.833rem;
        display: inline-block;
        background: #7c5e53;
    }

    }
</style>