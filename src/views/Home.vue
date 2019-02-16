<template>
  <div class="page home frame">
		<h1 class="heading">TT</h1>
		<h3 class="heading">Developer</h3>
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
	.heading {
		color: $gold;
	}
}

</style>
