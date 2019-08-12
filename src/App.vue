<template>
  <div id="app" class="palm" :style="{ 'background-image': 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + require('@/assets/images/palm.jpg') + ')' }">
    <!-- Noise -->
    <div class="noise" :style="{'background-image': 'url(' + require('@/assets/images/film.gif') + ')'}"></div>
    <!-- preloader -->
    <preloader :class="{
      'hide'   : hide,
      'remove' : remove
    }" v-if="!down && !preload && currentPage === 'home' || currentPage === 'featured'" />
    <!-- Global Nav Component -->
    <navigation v-if="!down && !landscape"/>
    <!-- Pages -->
    <router-view :preloaded="preload" v-if="!down && !landscape"/>
    <!-- Maintenance -->
    <maintenance v-if="down"/>
    <!-- Landscape Device -->
    <card v-if="landscape"/>
  </div>
</template>

<script>

import navigation from '@/components/navigation.vue'
import maintenance from '@/components/maintenance.vue'
import preloader from '@/components/preloader.vue'
import card from '@/components/card.vue'
import Utils from '@/utils/index.js'

export default {
  components: {
    preloader,
    navigation,
    maintenance,
    card
  },

  mounted() {
    setTimeout(()=> {
      this.hide = true
      setTimeout(()=> {
        this.remove = true
        this.$store.state.preloaded = true
      }, 500)
    }, 2500)

    // intial orientation check
    if (Utils.isMobileDevice() && Utils.isMobileSize() && window.orientation === 90 || window.orientation === -90) {
      this.landscape = true
    }

    // set landscape state on orientation change
    let self = this
    window.addEventListener('orientationchange', function() {
      if (Utils.isMobileDevice() && Utils.isMobileSize() && window.orientation === 90 || window.orientation === -90) {
        self.landscape = true
      } else {
        self.landscape = false
      }
    })
  },

  data() {
    return {
      // current page reference
      currentPage: this.$router.currentRoute.name,
      // reference state from store
      preload: this.$store.state.preloaded,
      down: this.$store.state.down,
      hide: false,
      remove: false,
      landscape: false
    }
  }
}

</script>

<style lang="scss">

@import '@/assets/scss/app.scss';

</style>
