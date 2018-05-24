<template>
    <div id="user-info">
        <div v-if="playListInfo" class="head">
            <img class="bg" :src="playListInfo.coverImgUrl"/>
            <ul class="use-info">
                <v-icon color="white" class="app-header-icon back" @click="goBack()">arrow_back</v-icon>
                <li><b v-html="playListInfo.name"></b></li>
                <li v-show="playListInfo.description" v-html="textInit(playListInfo.description)"></li>
                <li>
                    <span v-html="`播放：${playListInfo.playCount}`"></span>
                    <span v-html="`分享：${playListInfo.shareCount}`"></span>
                </li>
                <li>
                    <span class="tit" v-for="(tit, ti) in playListInfo.tags" :key="ti" v-html="tit"></span>
                </li>
            </ul>
        </div>
        <div v-if="playListInfo" class="scroll-box">
            <p class="title">播放全部  收藏</p>
            <div class="hr"></div>
            <div class="scroll" @mousewheel="handleScroll">
                <music-list-item v-if="i < pull" v-for="(item,i) in playListInfo.tracks" :item="item" :index="i" :key ="item.id" :getUrl="getMusicUrl"></music-list-item>
            </div>
            <ul :class="musicUrl?'player act':'player'" v-if="musicUrl">
                <i><img :src="playListInfo.tracks[index].al.picUrl" alt=""></i>
                <li>
                    <span class="tit"><b v-html="playListInfo.tracks[index].name"></b></span>
                    <span class="tit" v-html="`${playListInfo.tracks[index].ar[0].name} - ${playListInfo.tracks[index].name}`"></span>
                    <span class="hr"></span>
                    <span class="play" @click="pp"></span>
                    <span class="more">...</span>
                </li>
                <audio v-if="musicUrl" :src="musicUrl" class="audio" :autoplay="autoplay"></audio>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import MusicListItem from '@/components/MusicListItem';

let state = {
    appHeaderState: {
        show: false,
    }
};

function setState(store, route) {
    store.dispatch('appShell/appHeader/setAppHeader', state.appHeaderState);
    store.dispatch('wyMusic/getPlayListInfo', {id: route.params.id});
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
    components: {
        MusicListItem,
    },
    data () {
        return {
            iscroll: false,
            pull: 20,
            play: true,
            index: 0,
            autoplay: false
        }
    },
    computed: {
        ...mapState('wyMusic', [
            'playListInfo',
            'musicUrl'
        ])
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        },
        textInit(txt){
            if (txt.length > 75) {
                txt = txt.slice(0, 75) + '...';
            }
            return txt
        },
        handleScroll () {
            const bl = document.getElementsByClassName('scroll-box')[0];
            const el = document.getElementsByClassName('scroll')[0];
            const s = el.clientHeight - bl.clientHeight;
            if (this.pull >= this.playListInfo.tracks.length) return;
            if (bl.scrollTop >= s - 50) {
                this.pull += 10;
            }
        },
        pp() {
            const bl = document.getElementsByClassName('audio')[0];
            if(this.play) {
                bl.play()
            } else {
                bl.pause()
            }
            this.play = !this.play;
        },
        getMusicUrl(id, index) {
            this.index = index;
            this.autoplay = true;
            this.play = false;
            this.$store.dispatch('wyMusic/getMusicUrl', { id: id });
        }
    },
    asyncData({store, route}) {
        setState(store, route);
    },
    updated() {
        // console.dir(this.playListInfo.tracks[0])
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
            font-size 16*$rem
        img.bg
            width 100%
        .use-info
            position absolute
            top 0
            width 100%
            height 100%
            background rgba(0,0,0,.5)
            padding 15*$rem 10*$rem
            .back
                padding-bottom 16*$rem
        span.tit 
            background  $colorMain
            color #fff
            padding 0 5*$rem
            border-radius 8*$rem
            margin 0 3*$rem
    .scroll-box
        z-index 1
        flex 1
        margin-top -80*$rem
        border-top-left-radius 10*$rem
        border-top-right-radius 10*$rem
        background #fff
        overflow scroll
        background #eee 
        p
            margin 0
        .hr
            height 1px
            margin-top 33*$rem
            background linear-gradient(0deg, #fff 50%, #666)
        .title 
            width 100%
            padding 5*$rem
            background #eee 
            position fixed
            border-top-left-radius 10*$rem
            border-top-right-radius 10*$rem
            z-index 1
        .player 
            position fixed
            bottom 0
            width 100%
            height 0
            background #fff
            overflow hidden
            display flex
            line-height 20*$rem
            transition all 1s
            &.act 
                height 45*$rem
            li
                position relative
                color #999
                flex 1
            i
                padding 0 10*$rem
                img 
                    height 100%
            .tit
                display inline-block
                overflow hidden
                width 100%
                text-align start
                font-size 10*$rem
                b 
                    font-size 14*$rem
                    color #333
            .hr
                display block
                height 1px
                background linear-gradient(0deg, #fff 50%, #666)
            .play, .more 
                position absolute
            .play 
                right 45*$rem
                top 7*$rem
                display inline-block
                width 30*$rem
                height 30*$rem
                border-radius 50%
                border 1px solid #999
                line-height 30*$rem
                text-align center
            .more 
                right 15*$rem
                top 7*$rem
            .audio 
                display none
</style>
