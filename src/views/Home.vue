<template>
  <div class="page home frame">
		<h1>Home</h1>
  </div>
</template>

<script>

export default {
  name: 'home',

	props: {
		down: Boolean
	}
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.home {
	// background: goldenrod;
}

</style>
