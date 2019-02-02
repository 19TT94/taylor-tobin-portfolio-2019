<template>
  <div id="app">
		<!-- TODO: possible make into a partial component if reused -->
		<div class="palm">
			<div class="palm--overlay"></div>
			<img class="palm--img" src="@/assets/images/palm.jpg">
		</div>
		<!-- Noise -->
		<div class="noise" :style="{'background-image': 'url(' + require('@/assets/images/film.gif') + ')'}"></div>
		<!-- Global Nav Component -->
		<navigation v-if="!down"/>
		<!-- Pages -->
		<fade>
        <router-view/>
    </fade>
    <router-view :down="down"/>
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
				down: true
			};
		}
	}
</script>

<style lang="scss">

@import '@/assets/scss/app.scss';

</style>
