<template>
  <div id="app">
		<!-- Global Nav Component -->
		<navigation/>
		<!-- Pages -->
		<fade>
        <router-view/>
    </fade>
    <router-view/>
  </div>
</template>

<script>
	import navigation from '@/components/navigation.vue';
	import fade from '@/components/transitions/fade.vue';

	export default {
		components: {
			navigation,
			fade
		}
	}
</script>

<style lang="scss">

	@import '@/assets/scss/app.scss';

</style>
