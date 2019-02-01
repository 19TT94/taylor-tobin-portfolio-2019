<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <Maintenance msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Maintenance from '@/components/Maintenance.vue'

export default {
  name: 'home',
  components: {
    Maintenance
  }
}
</script>
