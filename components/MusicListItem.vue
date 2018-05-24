<template>
    <ul class="user-item">
        <i v-show="index+1" v-html="index+1"></i>
        <p>
            <span class="tit"><b v-html="item.name"></b></span>
            <span class="tit" v-html="`${item.ar[0].name} - ${item.al.name}`"></span>
            <span class="hr"></span>
            <span class="play" @click="getData"></span>
            <span class="more">...</span>
        </p>
    </ul>
</template>

<script>
export default {
    props: {
        item: Object, //这样可以指定传入的类型，如果类型不对，会警告
        index: Number,
        getUrl: Function
    },
    data () {
        return {
            
        }
    },
    methods: {
        getData() {
            this.getUrl(this.item.id, this.index)
        }
    }
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/variable'
.user-item
    height 50*$rem
    display flex
    width 100%
    color black
    text-decoration none;
    line-height 18*$rem
    p
        margin 0
        flex 1
        position relative
        color #999
    i
        padding 0 24*$rem
        line-height 50*$rem
        font-size 16*$rem
        height 100%
    .tit
        display inline-block
        overflow hidden
        width 100%
        text-overflow ellipsis
        white-space nowrap
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
</style>
