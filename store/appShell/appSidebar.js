/**
 * @file appShell/appSidebar module
 * @author lavas
 */
export const SET_SIDEBAR_VISIBILITY = 'SET_SIDEBAR_VISIBILITY';

export const state = () => ({
    show: false, // 是否显示sidebar
    // 分块组
    blocks: [
        {
            // 子列表1
            // sublistTitle: 'Sublist',
            list: [
                {
                    text: '我的好友',
                    icon: 'sentiment_satisfied',
                    route: '/myfriend'
                },
                // {
                //     text: 'vip会员',
                //     image: 'https://github.com/google/material-design-icons/blob/master/social/2x_web/ic_mood_bad_black_48dp.png?raw=true',
                //     alt: 'mood-bad',
                //     route: '/detail/2'
                // },
                {
                    text: '商城',
                    icon: 'sentiment_neutral',
                    route: '/detail/3'
                },
                {
                    text: '我的消息',
                    icon: 'sentiment_neutral',
                    route: '/detail/4'
                },
                {
                    text: '附近的人',
                    icon: 'sentiment_neutral',
                    route: '/detail/4'
                },
                {
                    text: '听歌识曲',
                    icon: 'sentiment_neutral',
                    route: '/detail/4'
                }
            ]
        }
    ]
});

export const mutations = {
    [SET_SIDEBAR_VISIBILITY](state, sidebarVisibility) {
        state.show = sidebarVisibility;
    }
};

export const actions = {

    /**
     * 展示侧边栏
     *
     * @param {Function} commit commit
     */
    showSidebar({commit}) {
        commit(SET_SIDEBAR_VISIBILITY, true);
    },

    /**
     * 隐藏侧边栏
     *
     * @param {Function} commit commit
     */
    hideSidebar({commit}) {
        commit(SET_SIDEBAR_VISIBILITY, false);
    },
};