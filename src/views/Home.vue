<template>
  <div class="page home frame">
		<h1 class="heading">TT</h1>
		<h3 class="heading">Developer</h3>
		<button @click="firstTransition" class="first-transition"></button>
  </div>
</template>

<script>

export default {
  name: 'home',

	methods: {
		firstTransition() {
			console.log("hi");
			
			// animate button before transition
			setTimeout(() => {
				this.$route.router.go('/featured');
			}, 100);
		}
	}
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.home {
	.heading {
		color: $gold;
	}

	.first-transition {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		&:before {
			content: '';
			width: 40px;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			border: 2px solid $gold;
			border-radius: 50%;
			margin: 0 auto;
		}
	}
}

</style>
