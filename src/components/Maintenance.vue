<template>
  <div class="maintenance">
    <h1>Taylor Tobin</h1>
		<h2>Developer</h2>

		<ul class="contact">
			<li>Email: 19tt94@gmail.com</li>
			<li>Phone: (805) 434-7559</li>
		</ul>

		<ul class="links">
			<li>
				<a href="#">
					<font-awesome-icon :icon="['fab', 'github-square']" />
					@19tt94
				</a>
			</li>
			<li>
				<a href="#">
					<font-awesome-icon :icon="['fab', 'linkedin']" />
					@19tt94
				</a>
			</li>
			<li>
				<a href="#">
					<font-awesome-icon :icon="['fab', 'instagram']" />
					@19tt94
				</a>
			</li>
		</ul>

		<p>New Site Comming Soon!</p>
  </div>
</template>

<script>
export default {
  name: 'Maintenance'
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
	padding: 1rem;
	background: $black;
	color: $white;

	&--title {
	}
}

</style>
