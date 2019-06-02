<template>
  <div id="app" class="palm" :style="{ 'background-image': 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + require('@/assets/images/palm.jpg') + ')' }">
    <!-- Noise -->
    <div class="noise" :style="{'background-image': 'url(' + require('@/assets/images/film.gif') + ')'}"></div>
    <!-- preloader -->
    <preloader :class="{
      'hide'   : hide,
      'remove' : remove
    }" v-if="!down && currentPage === 'home' || currentPage === 'featured'" />
    <!-- Global Nav Component -->
    <navigation v-if="!down"/>
    <!-- Pages -->
    <router-view v-if="!down"/>
    <!-- Maintenance -->
    <maintenance v-if="down"/>
  </div>
</template>

<script>

import navigation from '@/components/navigation.vue'
import maintenance from '@/components/maintenance.vue'
import preloader from '@/components/preloader.vue'

export default {
  components: {
    preloader,
    navigation,
    maintenance
  },

  mounted() {
    setTimeout(()=> {
      this.hide = true
      setTimeout(()=> {
        this.remove = true
      }, 500)
    }, 2500)
  },

  data() {
    return {
      // current page reference
      currentPage: this.$router.currentRoute.name,
      // reference state from store
      down: this.$store.state.down,
      hide: false,
      remove: false
    }
  }
}

</script>

<style lang="scss">

@import '@/assets/scss/app.scss';

</style>
