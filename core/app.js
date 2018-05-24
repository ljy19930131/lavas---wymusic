/**
 * @file entry
 * @author ljy19930131(13161350223@163.com)
 */

import Vue from 'vue';
import Meta from 'vue-meta';
require('swiper/dist/css/swiper.css');

import VueAwesomeSwiper from 'vue-awesome-swiper';
import {createRouter} from '@/.lavas/router';
import {createStore} from '@/.lavas/store';
import AppComponent from './App.vue';
import Vuetify from 'vuetify';

Vue.use(Meta);

Vue.use(Vuetify);

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

export function createApp() {
    let router = createRouter();
    let store = createStore();
    let App = Vue.extend({
        router,
        store,
        ...AppComponent
    });
    return {App, router, store};
}

if (module.hot) {
    module.hot.accept();
}
