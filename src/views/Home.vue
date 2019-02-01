<template>
  <div class="home">
    <maintenance msg="Welcome to Your Vue.js App" v-if="maintenance"/>
  </div>
</template>

<script>
import maintenance from '@/components/maintenance.vue'

export default {
  name: 'home',

  components: {
    maintenance
  },

	data() {
		return {
			maintenance: true
		};
	}
}
</script>
