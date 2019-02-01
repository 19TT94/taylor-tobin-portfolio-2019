<template>
  <div class="home">
    <Maintenance msg="Welcome to Your Vue.js App" v-if="maintenance"/>
  </div>
</template>

<script>
import Maintenance from '@/components/Maintenance.vue'

export default {
  name: 'home',

  components: {
    Maintenance
  },

	data() {
		return {
			maintenance: true
		};
	}
}
</script>
