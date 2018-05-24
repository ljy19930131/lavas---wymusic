<template>
    <sidebar v-model="sidebarStatus"
        :enable="enableSidebar"
    >
        <!-- sidebar 内容部分 -->
        <div class="app-sidebar-content">

            <!-- 用户信息 -->
            <div v-if="ownerInfo" class="app-sidebar-user" @click.stop="closeAndGo({
                name: 'userInfoId',
                params: {
                    id: ownerInfo.userId
                }
            })">
                <img class="user-avatar" :src="ownerInfo.avatarUrl" alt="">
                <div class="user-info">
                    <p class="user-name" v-html="ownerInfo.nickname"></p>
                </div>
            </div>

            <!-- 导航列表分区块 -->
            <div v-if="blocks" class="app-sidebar-blocks">
                <ul>
                    <!-- 单个区块 -->
                    <li v-for="(block, index) in blocks" :key="index" class="app-sidebar-block">
                        <div v-if="block.sublistTitle" class="sub-list-title">{{ block.sublistTitle }}</div>
                        <ul v-if="block.list">
                            <li v-for="item in block.list" :key="item.text" @click.stop="closeAndGo(item.route)">
                                <span v-if="item.icon || item.image" class="app-sidebar-block-left-icon">
                                    <img v-if="item.image" :src="item.image" :alt="item.alt" />
                                    <v-icon v-else-if="item.icon">{{ item.icon }}</v-icon>
                                </span>
                                <span v-if="item.text" class="app-sidebar-block-text">{{ item.text }}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </sidebar>
</template>

<script>
import {mapState} from 'vuex';
import Sidebar from './Sidebar';

export default {
    components: {
        Sidebar
    },
    computed: {
        ...mapState('appShell/appSidebar', [
            'show',
            'title',
            'user',
            'blocks',
            'msg'
        ]),
        ...mapState('wyMusic', [
            'ownerInfo'
        ]),
        sidebarStatus: {
            get() {
                return this.show;
            },
            set(val) {
                if (val) {
                    this.$emit('show-sidebar');
                }
                else {
                    this.$emit('hide-sidebar');
                }
            }
        },
        enableSidebar() {
            return this.$store.state.appShell.appHeader.show
                && this.$store.state.appShell.appHeader.showMenu;
        }
    },
    methods: {
        close() {
            this.sidebarStatus = false;
        },
        closeAndGo(route) {
            this.$router.push(route);
            this.close();
        }
    },
    mounted() {
        console.log('AppSidebar')
    }
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/variable'
// 左侧触发滑动宽度
$swipe-width = 20*$rem

.app-sidebar-content
    .app-sidebar-block-left-icon
        display inline-block
        width ($app-sidebar-left-icon-size + 10)*$rem
        height 100%

        img
            vertical-align middle
            width ($app-sidebar-left-icon-size)*$rem
            height ($app-sidebar-left-icon-size)*$rem

        .material-icons
            font-size ($app-sidebar-left-icon-size)*$rem

    .app-sidebar-block-text
        display inline-block
        height 100%
        vertical-align middle

    .app-sidebar-user
        padding 0 10*$rem
        font-size 16*$rem
        background-image url(https://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg)
        .user-avatar
            margin 30*$rem 0 0
            height 80*$rem
            width 80*$rem
            border-radius 50%
        .user-info
            color #fff
            text-align center
            p 
                padding 10*$rem 0;
    .app-sidebar-blocks
        text-align left

        .app-sidebar-block
            padding 10*$rem 0
            border-bottom 1*$rem solid #e0e0e0
            color #333

            .sub-list-title
                height $app-sidebar-nav-height
                line-height $app-sidebar-nav-height
                text-indent ($app-sidebar-left-icon-size)*$rem
                font-weight bold
            li
                padding-left 15*$rem
                height $app-sidebar-nav-height
                line-height $app-sidebar-nav-height


                &:last-child
                    border none

            &:last-child
                border-bottom none
</style>
    