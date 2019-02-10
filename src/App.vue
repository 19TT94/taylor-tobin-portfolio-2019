<template>
  <div id="app" class="palm" :style="{ 'background-image': 'url(' + require('@/assets/images/palm.jpg') + ')' }">
		<!-- Noise -->
		<div class="noise" :style="{'background-image': 'url(' + require('@/assets/images/film.gif') + ')'}"></div>
		<!-- Global Nav Component -->
		<navigation v-if="!down"/>
		<!-- Pages -->
    <router-view :down="down"/>
  </div>
</template>

<script>
	import navigation from '@/components/navigation.vue';

	export default {
		components: {
			navigation
		},

		data() {
			return {
				down: false
			};
		}
	}
</script>

<style lang="scss">

@import '@/assets/scss/app.scss';

</style>
