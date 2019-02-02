<template>
  <div class="maintenance">
		<!-- TODO: possible make into a partial component if reused -->
		<div class="palm">
			<div class="palm--overlay"></div>
			<img class="palm--img" src="@/assets/images/palm.jpg">
		</div>

		<section class="container info">
			<h1>Taylor Tobin</h1>
			<h2>Developer</h2>

			<ul class="contact">
				<li>Email: 19tt94@gmail.com</li>
				<li>Phone: (805) 434-7559</li>
			</ul>

			<ul class="links">
				<li>
					<a href="https://github.com/19TT94">
						<font-awesome-icon :icon="['fab', 'github-square']" />
						@19tt94
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/taylor-tobin/">
						<font-awesome-icon :icon="['fab', 'linkedin']" />
						@19tt94
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/19tt94/">
						<font-awesome-icon :icon="['fab', 'instagram']" />
						@19tt94
					</a>
				</li>
			</ul>
		</section>

		<!-- <customMap class="map" /> -->

		<p class="note">New Site Coming Soon!</p>
  </div>
</template>

<script>
import customMap from '@/components/custom-map.vue'

export default {
  name: 'Maintenance',
	components: {
		customMap
	}
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.maintenance {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: $black;
	color: $white;
}

.note {
	position: absolute;
	bottom: 5%;
	left: 0;
	right: 0;
	margin: 0 auto;
	text-align: center;
	color: $gold;
}

.map {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 200px;
}

</style>
