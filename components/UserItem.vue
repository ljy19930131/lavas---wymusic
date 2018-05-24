<template>
    <router-link class="user-item"  :to="{
        name: 'userInfoId',
        params: {
            id: item.userId
        }
    }">
        <i><img :src="item.avatarUrl" alt=""></i>
        <p>
            <span><b v-html="item.nickname"></b></span>
            <span v-html="item.signature"></span>
        </p>
    </router-link>
</template>

<script>
export default {
    props: {
        item: Object //这样可以指定传入的类型，如果类型不对，会警告
    },
    data () {
        return {
            
        }
    },
    methods: {
        
    }
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/variable'
.user-item
    padding 5*$rem
    height 80*$rem
    display flex
    width 100%
    color black
    text-decoration none;
    p
        padding 0
    img
        width 50*$rem
        height 50*$rem
        border-radius 50%
    span
        display inline-block
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        width 300*$rem
        text-align start
</style>
