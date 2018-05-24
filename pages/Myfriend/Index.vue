<template>
    <div id="friend">
        <nav-bar :title="title" :active="active" ref="son"></nav-bar>
        <div class="main">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide>
                    <ul class="detail">
                        <user-item v-for="item in followList" :item="item" :key ="item.userId"></user-item>
                    </ul>
                </swiper-slide>
                <swiper-slide>123</swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import UserItem from '@/components/UserItem';
import NavBar from '@/components/NavBar';

const title = ['关注', '粉丝']
let state = {
    appHeaderState: {
        show: true,
        title: '我的好友',
        showMenu: false,
        showBack: true,
        showLogo: false,
        actions: [
            {
                icon: 'none'
            }
        ]
    }
};

function setState(store) {
    store.dispatch('appShell/appHeader/setAppHeader', state.appHeaderState);
    store.dispatch('wyMusic/getFollowList', {id: 1328283740});
}

export default {
    name: 'my-friend',
    metaInfo: {
        title: 'MyFriend',
        titleTemplate: '%s - Lavas',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
        ]
    },
    components: {
        UserItem,
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
    activated() {
        setState(this.$store);
    },
    mounted() {
        console.log('myfriend')
    },
    methods: {
        
    },
    computed: {
        ...mapState('wyMusic', [
            'followList'
        ]),
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    }
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/variable'
#friend
    display flex
    flex-direction column
    width 100%
    .main, .swiper-container, .detail
        width 100%
    .main
        flex 1
        overflow scroll
        .swiper-container
            height 100%
            overflow scroll
    .list 
        width 50%
        float left
        background $colorMain
        color #fff
        span
            display inline-block
            border-bottom 2*$rem solid $colorMain
            &.active 
                border-bottom 2*$rem solid #fff
                font-weight bold
</style>