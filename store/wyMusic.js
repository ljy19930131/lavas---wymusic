/**
 * @file appShell/appSidebar module
 * @author lavas
 */
import axios from 'axios';
import {
    LOGIN_CELLPHONE,
    LOGIN_EMAIL,
    USER_DETAIL, 
    USER_FOLLOW,
    PERSONALIZED,
    PLAYLIST_DETAIL,
    SONG_DETAIL,
    BANNER,
    PERSONALIZED_NEWSONG,
    PLAYLIST_HIGHQUALITY,
    PERSONALIZED_MV,
    MUSIC_URL
} from '../api';
// 个人相关
const GET_LOGIN_CELLPHONE = 'getLoginPhone';
const GET_LOGIN_EMAIL = 'getLoginEmail';
const GET_USERINFO = 'getUserInfo';
const GET_OWNERINFO = 'getOwnerInfo';
const GET_FOLLOWLIST = 'getFollowList';

// 歌曲相关
const GET_PERSONALIZED = 'getPersonalized';
const GET_PLAYLISTINFO = 'getPlayListInfo';
const GET_MUSICINFO = 'getMusicInfo';
const GET_NEWSONGLIST = 'getNewSongList';
const GET_PLAYLIST_HIGHQUALITY = 'getPlayListStart';
const GET_MUSIC_URL = 'getMusicUrl';

// 推荐
const GET_PERSONALIZED_MV = 'getPersonalizedMv';

// 公共部分
const GET_BANNER = 'getBanner';

export const state = () => ({
    userId: '1328283740',
    userInfo: '',
    ownerInfo: '',
    followList: '',
    personalized: '',
    playListInfo: '',
    musicInfo: '',
    banner: '',
    newSong: '',
    playListStart: '',
    personalizedMv: '',
    musicUrl: '',
});

export const mutations = {
    [GET_LOGIN_CELLPHONE](state, {userId}) {
        state.userId = userId
    },
    [GET_LOGIN_EMAIL](state, {userId}) {
        state.userId = userId
    },
    [GET_USERINFO](state, {userInfo}) {
        state.userInfo = userInfo
    },
    [GET_OWNERINFO](state, {ownerInfo}) {
        state.ownerInfo = ownerInfo
    },
    [GET_PERSONALIZED](state, {personalized}) {
        state.personalized = personalized
    },
    [GET_FOLLOWLIST](state, {followList}) {
        state.followList = followList
    },
    [GET_PLAYLISTINFO](state, {playListInfo}) {
        state.playListInfo = playListInfo
    },
    [GET_MUSICINFO](state, {musicInfo}) {
        state.musicInfo = musicInfo
    },
    [GET_BANNER](state, {banner}) {
        state.banner = banner
    },
    [GET_NEWSONGLIST](state, {newSong}) {
        state.newSong = newSong
    },
    [GET_PLAYLIST_HIGHQUALITY](state, {playListStart}) {
        state.playListStart = playListStart
    },
    [GET_PERSONALIZED_MV](state, {personalizedMv}) {
        state.personalizedMv = personalizedMv
    },
    [GET_MUSIC_URL](state, {musicUrl}) {
        state.musicUrl = musicUrl
    },
};

export const actions = {
    /**
     * 手机登录
     */
    async getLoginPhone({commit}, params) {
        console.log('-- getLoginPhone --')
        try {
            let url = `${LOGIN_CELLPHONE}?phone=${params.userName}&password=${params.password}`;
            let result = await axios(url);
            let condition = result.data.account.id;
            commit(GET_LOGIN_CELLPHONE, {
                userId: condition
            })
            params.cb(condition);
        }
        catch (e) {
            // TODO with error
            console.log(`error !!`);
            console.log(e);
            params.cb(false);
        }
    },
    /**
     * 邮箱登录
     */
    async getLoginEmail({commit}, params) {
        console.log('-- getLoginEmail --')
        try {
            let url = `${LOGIN_EMAIL}?email=${params.userName}&password=${params.password}`;
            let result = await axios(url);
            let condition = result.data.account.id;
            commit(LOGIN_EMAIL, {
                userId: condition
            })
            params.cb(condition);
        }
        catch (e) {
            params.cb(false);
            // TODO with error
            console.log(`error !!`);
            console.log(e);
        }
    },
    /**
     * 获取用户信息
     */
    async getUserInfo({commit}, params) {
        console.log('-- getUserInfo --')
        try {
            let url = USER_DETAIL + params.id;
            let result = await axios(url);
            let condition = result.data.profile;
            commit(GET_USERINFO, {
                userInfo: condition
            })
        }
        catch (e) {
            // TODO with error
            console.log(`error !!`);
            console.log(e);
        }
    },
    /**
     * 获取主人信息
     */
    async getOwnerInfo({commit}, params) {
        console.log('-- getOwnerInfo --')
        try {
            let url = USER_DETAIL + params.id;
            let result = await axios(url);
            let condition = result.data.profile;
            commit(GET_OWNERINFO, {
                ownerInfo: condition
            })
        }
        catch (e) {
            // TODO with error
            console.log(`error !!`);
            console.log(e);
        }
    },
    /**
     * 获取推荐歌单
     */
    async getPersonalized({commit}) {
        console.log('-- getPersonalized --')
        try {
            let url = PERSONALIZED;
            let result = await axios(url);
            let condition = result.data.result;
            commit(GET_PERSONALIZED, {
                personalized: condition
            })
            // console.log(condition)
        }
        catch (e) {
            // TODO with error
            console.log(`error !!`);
            console.log(e);
        }
    },
    /**
     * 获取歌单详情
     */
    async getPlayListInfo({commit}, params) {
        console.log('-- playListInfo --')
        try {
            let url = PLAYLIST_DETAIL + params.id;
            let result = await axios(url);
            let condition = result.data.playlist;
            commit(GET_PLAYLISTINFO, {
                playListInfo: condition
            })
        }
        catch (e) {
            // TODO with error
            console.log(`error !!`);
            console.log(e);
        }
    },
    /**
     * 获取歌曲详情
     */
    async getMusicInfo({commit}, params) {
        console.log('-- getMusicInfo --')
        try {
            let url = SONG_DETAIL + params.id;
            let result = await axios(url);
            let condition = result.data;
            commit(GET_MUSICINFO, {
                musicInfo: condition
            })
        }
        catch (e) {
            // TODO with error
            console.log(`error !!`);
            console.log(e);
        }
    },
    /**
     * 获取用户关注列表
     */
    async getFollowList({commit}, params) {
        console.log('-- getFollowList --')
        try {
            let url = USER_FOLLOW + params.id;
            let result = await axios(url);
            let condition = result.data.follow;
            commit(GET_FOLLOWLIST, {
                followList: condition
            })
        }
        catch (e) {
            // TODO with error
            console.log(`error !!`);
            console.log(e);
        }
    },
    /**
     * 获取轮播图
     */
    async getBanner({commit}, params) {
        console.log('-- getBanner --')
        try {
            let url = BANNER;
            let result = await axios(url);
            let condition = result.data.banners;
            commit(GET_BANNER, {
                banner: condition
            })
        }
        catch (e) {
            // TODO with error
            console.log(`error !!`);
            console.log(e);
        }
    },
    /**
     * 获取最新音乐
     */
    async getNewSongList({commit}, params) {
        console.log('-- getNewSongList --')
        try {
            let url = PERSONALIZED_NEWSONG;
            let result = await axios(url);
            let condition = result.data.result;
            // console.log(condition)
            commit(GET_NEWSONGLIST, {
                newSong: condition
            })
        }
        catch (e) {
            // TODO with error
            console.log(`error !!`);
            console.log(e);
        }
    },
    /**
     * 获取精品歌单
     */
    async getPlayListStart({commit}, params) {
        console.log('-- getPlayListStart --')
        try {
            let url = PLAYLIST_HIGHQUALITY;
            let result = await axios(url);
            let condition = result.data.playlists;
            // console.log(condition)
            commit(GET_PLAYLIST_HIGHQUALITY, {
                playListStart: condition
            })
        }
        catch (e) {
            // TODO with error
            console.log(`error !!`);
            console.log(e);
        }
    },
    /**
     * 获取推荐mv
     */
    async getPersonalizedMv({commit}, params) {
        console.log('-- getPersonalizedMv --')
        try {
            let url = PERSONALIZED_MV;
            let result = await axios(url);
            let condition = result.data.result;
            // console.log(condition)
            commit(GET_PERSONALIZED_MV, {
                personalizedMv: condition
            })
        }
        catch (e) {
            // TODO with error
            console.log(`error !!`);
            console.log(e);
        }
    },
    /**
     * 获取音乐播放地址
     */
    async getMusicUrl({commit}, params) {
        console.log('-- getMusicUrl --')
        try {
            let url = MUSIC_URL + params.id;
            let result = await axios(url);
            let condition = result.data.data[0].url;
            // console.log(condition)
            commit(GET_MUSIC_URL, {
                musicUrl: condition
            })
        }
        catch (e) {
            // TODO with error
            console.log(`error !!`);
            console.log(e);
        }
    },
};