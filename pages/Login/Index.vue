<template>
    <div id="login">
        <p class="input">
            <span>
                {{ user }}
                <input class="text" type="text" v-model="userName" required />
            </span>
            x
        </p>
        <div class="hr"></div>
        <p class="input">
            <span>
                pwd
                <input type="password" v-model="password" required />
            </span>
            忘记密码
        </p>
        <div class="hr"></div>
        <p class="s-btn" @click="login" v-html="loading?'登录中...':'邮箱登录'"></p>
        <div :class="isError?'tip':'tip active'">
            登录失败
        </div>
    </div>
</template>

<script>
function setState(store, route) {
    store.dispatch('appShell/appHeader/setAppHeader', {
        show: true,
        title: route.params.type?'手机号登录':'邮箱登录',
        showMenu: false,
        showBack: true,
        actions: []
    });
}

export default {
    name: 'login',
    metaInfo: {
        title: 'Login',
        titleTemplate: '%s - Lavas',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
        ]
    },
    data () {
        return {
            user: this.$route.params.type?'phone':'email',
            loading: false,
            userName: '',
            password: '',
            isError: false,
        }
    },
    methods: {
        login() {
            this.loading = true;
            const action = this.$route.params.type?'getLoginPhone':'getLoginEmail';
            this.$store.dispatch(`wyMusic/${action}`, {
                userName: this.userName,
                password: this.password,
                cb: (userId) => {
                    setTimeout(() => {
                        this.loading = false;
                        if (userId) {
                            this.$router.push({ path:'/home' })
                        } else {
                            this.isError = true
                            setTimeout(() => this.isError = false, 30);
                        }
                    }, 1500);
                }
            });
        }
    },
    async asyncData({store, route}) {
        setState(store, route);
    },
    activated () {
        setState(this.$store, this.$route);
    },
    mounted () {
        console.log('login')
    }
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/variable'
#login 
    padding 0 10*$rem
    p 
        margin 30*$rem 0 10*$rem
        &.input
            display flex
            justify-content space-between
    span 
        display inline-block
        width 80%
    input 
        width 70%
        margin-left 10*$rem
        &:focus 
            outline: none;
    .hr 
        height 1*$rem
        background linear-gradient(0deg, #fff 50%, #666)
    .s-btn 
        color #fff
        border-radius 18*$rem
        line-height 36*$rem
        background $colorMain
        margin 40*$rem auto
    .tip 
        background rgba(0, 0, 0, .2)
        display inline-block
        padding 5*$rem 20*$rem
        border-radius 20*$rem
        position fixed
        bottom 10*$rem
        left 50%
        margin-left -48*$rem
        opacity 1
        &.active 
            opacity 0
            transition opacity .5s 2.5s
</style>
