<template>
    <div id="card-item">
        <p class="tit">
            <b v-html="title"></b>
            <span>>></span>
        </p>
        <ul class="card-box">
            <li class="item" v-for="(item, index) in mlist" v-show="index < 6" :key ="item.id">
                <router-link class="detail-item"  :to="{
                    // name: 'playListInfoId',
                    name: type,
                    params: {
                        id: item.id
                    }
                }">
                    <img :src="item.picUrl?item.picUrl:item.song.album.blurPicUrl" alt="" />
                    <span class="tit" ><b v-html="item.name"></b></span>
                    <span class="count" v-show="item.playCount" v-html="numInit(item.playCount)"></span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        mlist: undefined, //这样可以指定传入的类型，如果类型不对，会警告
        title: String, 
        type: String
    },
    data () {
        return {
            
        }
    },
    methods: {
        numInit(num) {
            return Math.round( num / 10000 ) + '万';
        }
    }
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/variable'
#card-item 
    padding 7*$rem
    margin-bottom 6*$rem
    background #fff
    .tit
        margin 5*$rem 0 0
        display flex 
        justify-content space-between
        span 
            transform scale(.8)
            opacity .8
    .card-box
        width 100%
        height 50%
        display flex
        flex-wrap wrap
        justify-content space-around
        .item
            height 50%
            width 30%
            position relative
            font-size 10*$rem
            padding 5*$rem 0 
            img 
                width 100%
                heigt 100%
                border-radius 10*$rem
            .tit 
                display inline-block
            .count 
                position absolute
                top 10*$rem
                right 10*$rem
                color #fff
</style>
