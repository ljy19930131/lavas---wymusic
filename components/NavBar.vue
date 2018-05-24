<template>
    <ul class="nav">
        <li class="list" v-for="(item, index) in title" :key ="index" @click="act(index)">
            <span :class="actIndex == index?'active':''" v-html="item"></span>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        title: Array,
        active: Function
    },
    name: 'nav-bar',
    data () {
        return {
            actIndex: 0
        }
    },
    mounted () {
        console.log('nav-bar');
    },
    methods: {
        act(type) {
            this.actIndex = type;
            this.active(type);
        }
    }
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/variable'
.nav 
    height 40*$rem
    width 100%
    display flex
    .list 
        flex 1
        background $colorMain
        color #fff
        span
            display inline-block
            transition border .5s
            border-bottom 2*$rem solid $colorMain
            &.active 
                border-bottom 2*$rem solid #fff
                font-weight bold
</style>
