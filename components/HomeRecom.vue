<template>
    <div id="recom">
        <div class="space"></div>
        <div class="banner">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="item in banner" :key="item.targetId">
                    <img :src="item.pic" alt="" />
                </swiper-slide>
            </swiper>
        </div>
        <ul class="select">
            <router-link class="item" v-for="(tit, i) in title" :key="i" :to="{
                name: 'detailId',
                params: {
                    id: 100 + i
                }
            }">
                <b></b>
                <span v-html="tit"></span>
            </router-link>
        </ul>
        <div class="hr"></div>
        <card-item :mlist="personalized" :title="'推荐歌单'" :type="'playListInfoId'"></card-item>
        <card-item :mlist="newSong" :title="'最新音乐'" :type="'musicInfoId'"></card-item>
        <card-mv-item :mlist="personalizedMv" :title="'推荐MV'"></card-mv-item>
    </div>
</template>

<script>
import CardItem from '@/components/CardItem';
import CardMvItem from '@/components/CardMvItem';
import {mapState} from 'vuex';

const title =['私人FM', '每日推荐', '歌单', '排行榜']

function setState(store) {
    store.dispatch('wyMusic/getPersonalized');
}

export default {
    name: 'recom',
    metaInfo: {
        title: 'Recom',
        titleTemplate: '%s - Lavas',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
        ]
    },
    components: {
        CardItem,
        CardMvItem,
    },
    data () {
        return {
            title: title,
            list: '',
            swiperOption: { 
                pagination: '.swiper-pagination',
                loop : true,
                autoplay:true,
            }
        }
    },
    async asyncData({store, route}) {
        setState(store);
    },
    activated () {
        setState(this.$store);
    },
    methods: {
        
    },
    mounted () {
        console.log('recom');
    },
    computed: {
        ...mapState('wyMusic', [
            'personalized',
            'banner',
            'newSong',
            'playListStart',
            'personalizedMv',
        ]),
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    }
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/variable'
#recom
    height 100%
    position relative
    overflow-y scroll
    background #efefef
    .space
        height 90*$rem
        background $colorMain
    .banner 
        position absolute 
        top: 0
        left 0
        width 100%
        overflow hidden
        .swiper-container
            margin 7*$rem
            border-radius 5*$rem
        img 
            width 100%
            float left
    .select 
        padding 70*$rem 0 10*$rem
        width 100%
        height 90*$rem
        background #fff
        .item
            width 25%
            float left
            font-size 10*$rem
            display flex
            flex-direction column
            justify-content center
            align-items center
            padding 10*$rem 0
            opacity .7
            b
                display inline-block
                width 40*$rem
                height 40*$rem
                margin 15*$rem 0 5*$rem
                border 1*$rem solid $colorMain
                border-radius 50%
    .hr 
        height 1*$rem
        background linear-gradient(0deg, #fff 50%, #999)
</style>
