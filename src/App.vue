<template>
    <div id="app" class="palm" :style="{ 'background-image': 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + require('@/assets/images/palm.jpg') + ')' }">
		<!-- Noise -->
		<div class="noise" :style="{'background-image': 'url(' + require('@/assets/images/film.gif') + ')'}"></div>
		<!-- Global Nav Component -->
		<navigation v-if="!down"/>
		<!-- Pages -->
    <router-view />
		<!-- Maintenance -->
		<maintenance v-if="down"/>
  </div>
</template>

<script>
	import navigation from '@/components/navigation.vue';
	import maintenance from '@/components/maintenance.vue';

	export default {
		components: {
			navigation,
			maintenance
		},

		data() {
			return {
				down: true
			};
		}
	}
</script>

<style lang="scss">

@import '@/assets/scss/app.scss';

</style>
