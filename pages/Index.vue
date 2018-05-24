<template>
    <div id="enter">
        <div class="logo">
            <svg class="topsvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 284 50" data-reactid="6">
                <g fill="#fff" data-reactid="7">
                    <path d="m36.37 14.412c-2.115-1.367-4.707-2.117-7.377-2.251l-.595-2.174.018.021c-.023-.064-.043-.127-.063-.189l-.176-.643c-.406-1.86.333-2.748.713-3.067.064-.048.131-.097.204-.145 1.74-1.154 4.218.695 4.357.804 1.1 1.055 3.112 1.315 4.198.236 1.098-1.091.836-3.132-.261-4.223-1.708-1.698-6.95-4.426-11.41-1.467-4.01 2.659-4.09 6.402-3.431 8.565l.8 2.927c-1.339.383-2.624.933-3.797 1.647-4.391 2.676-6.594 7.192-6.04 12.391.564 5.335 4.575 9.208 9.536 9.208 5.267 0 9.551-4.262 9.551-9.501-.071-1.251-.057-1.236-.226-2.354-.165-1.091-1.783-6.218-1.783-6.218.994.229 1.923.602 2.725 1.12 9.06 5.856 5.289 15.176 5.118 15.583-2.495 5.954-7.934 9.509-14.923 9.754-4.555.16-8.919-1.535-12.289-4.772-3.554-3.41-5.591-8.189-5.591-13.11 0-7.414 4.687-14.14 11.662-16.749 1.453-.542 2.625-2.087 1.822-3.881-.632-1.41-2.344-1.895-3.796-1.352-9.156 3.418-15.307 12.251-15.307 21.981 0 6.43 2.664 12.675 7.308 17.14 4.283 4.111 9.793 6.349 15.595 6.349.264 0 .529-.004.793-.014 9.142-.32 16.585-5.251 19.9-13.164 2.071-4.807 3.225-15.684-7.231-22.445m-9.396 12.139c0 2.157-1.764 3.911-3.933 3.911-2.407 0-3.734-2.179-3.949-4.204-.408-3.861 1.619-5.959 3.392-7.04.719-.438 1.509-.781 2.335-1.029 0 0 1.912 6.05 2.061 6.99.164 1.037.094 1.372.094 1.372" data-reactid="8"></path>
                </g>
            </svg>
        </div>
        <div class="btn-box">
            <router-link :to="{ name: 'login', params: {type: 1} }">
                <p class="s-btn">手机号登录</p>
            </router-link>
            <router-link :to="{ name: 'login', params: {type: 0} }">
                <p class="s-btn">邮箱登录</p>
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import axios from 'axios';

function setState(store) {
    store.dispatch('appShell/appHeader/setAppHeader', { show: false });
}

export default {
    name: 'index',
    metaInfo: {
        title: 'Index',
        titleTemplate: '%s - Lavas',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
        ]
    },
    async asyncData({store, route}) {
        setState(store);
    },
    activated() {
        setState(this.$store);
    },
    mounted() {
        console.log('page-index');
        console.log(this.userId);
        if(this.userId) {
            this.$router.push({ path:'/home' })
        }
    },
    computed: {
        ...mapState('wyMusic', [
            'userId'
        ])
    }
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/variable'
#enter
    height 100%
    .logo
        width 80*$rem
        height 80*$rem
        border-radius 10*$rem
        overflow hidden
        background $colorMain
        margin 120*$rem auto 0
    svg
        width 400*$rem
        height 400*$rem
        margin-top -160*$rem
        margin-left 8*$rem
    .btn-box 
        margin 90*$rem auto 0
    a
        text-decoration: none
    .s-btn 
        width 80%
        border 1*$rem solid $colorMain
        border-radius 18*$rem
        line-height 36*$rem
        color $colorMain
        margin 10*$rem auto
</style>
