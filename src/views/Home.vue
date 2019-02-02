<template>
  <div class="page home">
		<maintenance v-if="down"/>
		<h1>Home</h1>
  </div>
</template>

<script>
import maintenance from '@/components/maintenance.vue'

export default {
  name: 'home',

	props: {
		down: Boolean
	},

  components: {
    maintenance
  }
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.home {
	// background: goldenrod;
}

</style>
