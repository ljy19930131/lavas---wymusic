<template>
    <div class="content">
        radio
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'recom',
    metaInfo: {
        title: 'Recom',
        titleTemplate: '%s - Lavas',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
        ]
    },
    data () {
        return {
            
        }
    },
    async asyncData({store, route}) {
        setState(store);
    },
    activated () {
        setState(this.$store);
    },
    mounted () {
        console.log('radio');
    },
    methods: {
        
    },
    computed: {
        
    }
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/variable'
.content
    height 100%
</style>
