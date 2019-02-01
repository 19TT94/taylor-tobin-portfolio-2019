<template>
  <div id="app">
		<!-- Global Nav Component -->
		<navigation v-if="!maintenance"/>
		<!-- Pages -->
		<fade>
        <router-view/>
    </fade>
    <router-view :maintenance="maintenance"/>
  </div>
</template>

<script>
	import navigation from '@/components/navigation.vue';
	import fade from '@/components/transitions/fade.vue';

	export default {
		components: {
			navigation,
			fade
		},

		data() {
			return {
				maintenance: false
			};
		}
	}
</script>

<style lang="scss">

	@import '@/assets/scss/app.scss';

</style>
