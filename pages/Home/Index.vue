<template>
    <div id="home">
        <nav-bar :title="title" :active="active" ref="son"></nav-bar>
        <div class="main">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide><home-recom></home-recom></swiper-slide>
                <swiper-slide><home-mine></home-mine></swiper-slide>
                <swiper-slide><home-radio></home-radio></swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import NavBar from '@/components/NavBar';
import HomeRecom from '@/components/HomeRecom';
import HomeMine from '@/components/HomeMine';
import HomeRadio from '@/components/HomeRadio';

const title = ['推荐', '朋友', '电台']

function setState(store) {
    store.dispatch('appShell/appHeader/setAppHeader', {
        show: true,
        title: '',
        showMenu: true,
        showBack: false,
        showLogo: false,        
        actions: [
            {
                icon: 'search',
                route: '/search'
            }
        ]
    });
    store.dispatch('wyMusic/getBanner');
    store.dispatch('wyMusic/getPersonalizedMv');
    store.dispatch('wyMusic/getPersonalized');

    store.dispatch('wyMusic/getNewSongList');
    // store.dispatch('wyMusic/getPlayListStart');
}

export default {
    name: 'Home',
    metaInfo: {
        title: 'Home',
        titleTemplate: '%s - Lavas',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
        ]
    },
    components: {
        HomeRecom,
        HomeMine,
        HomeRadio,
        NavBar
    },
    data () {
        let that = this;
        return {
            swiperOption: { 
                pagination: '.swiper-pagination',
                on: {
                    transitionEnd: function(){
                        that.$refs.son.act(this.activeIndex)
                    },
                }
            },
            title: title,
            active: (type) => {
                this.swiper.slideTo(type, 300, false);
            }
        }
    },
    async asyncData({store, route}) {
        setState(store);
    },
    activated () {
        setState(this.$store);
    },
    mounted () {
        console.log('home');
    },
    methods: {
        
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    }
};
</script>

<style lang="stylus" scoped>
#home
    display flex
    flex-direction column
    .main
        flex 1
        overflow-y scroll
        & .swiper-container
            height 100%
</style>
