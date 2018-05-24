<template>
    <div class="loading">
        <img src="/static/img/wy.png" alt="" />
    </div>
</template>

<script>

export default {
    name: 'skeleton'
};
</script>

<style lang="stylus" scoped>
.loading
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    img 
        width  100%
        height 100%
</style>
