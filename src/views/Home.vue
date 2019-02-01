<template>
  <div class="page home">
		<maintenance msg="Welcome to Your Vue.js App" v-if="maintenance"/>
		<div v-else>
			<h1>Home</h1>
		</div>
  </div>
</template>

<script>
import maintenance from '@/components/maintenance.vue'

export default {
  name: 'home',

	props: {
		maintenance: Boolean
	},

  components: {
    maintenance
  }
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.home {
	background: goldenrod;
}

</style>
