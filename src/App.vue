<template>
  <div id="app">
		<!-- Global Nav Menu Component -->
		<Menu/>
		<!-- Pages -->
    <router-view/>
  </div>
</template>

<script>
	import Menu from '@/components/Menu.vue'

	export default {
		components: {
			Menu
		}
	}
</script>

<style lang="scss">

	@import '@/assets/scss/app.scss';

</style>
