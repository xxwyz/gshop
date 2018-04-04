<template>
    <div id="app">
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {reqAddress} from './api'
export default {
  mounted () {
      // 通知vuex的getAddress异步获取 address数据
    this.$store.dispatch('getAddress')
  },

  components: {
      FooterGuide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
