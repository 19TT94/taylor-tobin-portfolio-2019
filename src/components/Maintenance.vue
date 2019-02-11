<template>
  <div class="maintenance">

    <div class="palm" :style="{ 'background-image': 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + require('@/assets/images/palm.jpg') + ')' }"></div>

		<section class="container info hide" :class="{ 'show': show }">
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
						@taylor-tobin
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

    <p class="note">New Site Coming Soon!</p>

    <customMap class="map" />

  </div>
</template>

<script>
import customMap from '@/components/custom-map.vue'

export default {
  name: 'maintenance',

	components: {
		customMap
	},

  data() {
    return {
      show: false
    }
  },

  mounted() {
    setTimeout(()=> {
      this.show = true;
    }, 500);
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

.info {
	border: 2rem solid #101216;
	width: calc(100% - 8rem);
	height: calc(100% - 7.5rem);
}

.note {
	position: absolute;
	bottom: 35%;
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
