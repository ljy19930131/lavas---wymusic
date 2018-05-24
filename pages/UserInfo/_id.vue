<template>
    <div id="user-info">
        <div class="head">
            <img class="bg" :src="userInfo.backgroundUrl"/>
            <ul class="use-info">
                <v-icon color="white" class="app-header-icon back" @click="goBack()">arrow_back</v-icon>
                <img class="user" :src="userInfo.avatarUrl" @click="goBack" />
                <li><b v-html="userInfo.nickname"></b></li>
                <li v-show="userInfo.description" v-html="userInfo.description"></li>
                <li>
                    <span v-html="`粉丝：${userInfo.follows}`"></span>
                    <span v-html="`关注：${userInfo.followeds}`"></span>
                </li>
                <li v-html="`城市编号：${userInfo.city}`"></li>
                <li v-html="`VIP：${userInfo.vipType}`"></li>
            </ul>
        </div>
        <div class="scroll-box">
            <p class="title">123</p>
            <div class="scroll">
                {{userInfo}}
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
let state = {
    appHeaderState: {
        show: false,
    }
};

function setState(store, route) {
    store.dispatch('appShell/appHeader/setAppHeader', state.appHeaderState);
    store.dispatch('wyMusic/getUserInfo', {id: route.params.id});
}

export default {
    name: 'detailId',
    metaInfo() {
        return {
            title: `Detail ${this.$route.params.id}`,
            titleTemplate: '%s - Lavas',
            meta: [
                {name: 'keywords', content: 'lavas PWA'},
                {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
            ]
        }
    },
    data () {
        return {
            iscroll: false,
        }
    },
    computed: {
        ...mapState('wyMusic', [
            'userInfo'
        ])
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        }
    },
    asyncData({store, route}) {
        setState(store, route);
    },
    updated() {
        console.log(this.userInfo)
    },
    activated() {
        setState(this.$store, this.$route);
    },
    mounted () {
        
    },
};
</script>

<style lang="stylus" scoped>

@require '~@/assets/stylus/variable'
#user-info
    display flex
    flex-direction column
    overflow hidden
    .head
        height 50%
        margin-top -50*$rem
        overflow hidden
        color #ccc
        font-size 12*$rem
        line-height 24*$rem
        text-align start
        b
            color #fff
            font-size 14*$rem
        img.bg
            width 100%
        img.user
            width 60*$rem
            height 60*$rem
            border-radius 50%
            display block
            margin-bottom 10*$rem
        .use-info
            position absolute
            top 0
            width 100%
            height 100%
            background rgba(0,0,0,.5)
            padding 15*$rem 10*$rem
            .back
                padding-bottom 20*$rem
    .scroll-box
        z-index 1
        flex 1
        margin-top -80*$rem
        border-radius 10*$rem
        background #fff
        overflow scroll
        .title 
            width 100%
            padding 5*$rem
            background #eee 
            position fixed
            border-top-left-radius 10*$rem
            border-top-right-radius 10*$rem
        .scroll
            margin-top 30*$rem
</style>
