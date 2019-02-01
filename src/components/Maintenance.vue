<template>
  <div class="maintenance">
    <h1>Taylor Tobin</h1>
		<h2>Developer</h2>

		<ul class="contact">
			<li>Email: 19tt94@gmail.com</li>
			<li>Phone: (805) 434-7559</li>
		</ul>

		<ul class="links">
			<li>Github: @19tt94</li>
			<li>LinkedIn: @19tt94</li>
			<li>Instagram: @19tt94</li>
		</ul>

		<p>New Site Comming Soon!</p>
  </div>
</template>

<script>
export default {
  name: 'Maintenance',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.maintenance {
	width: 100vw;
	height: 100vh;
	padding: 1rem;
	background: slateblue;
}

</style>
