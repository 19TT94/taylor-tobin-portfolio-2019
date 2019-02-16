<template>
  <div class="page home frame">
		<h1 class="heading">TT</h1>
		<h3 class="heading">Developer</h3>
		<button class="first-transition"
			@click="firstTransition" 
			:class="{'transition': transition}">
		</button>
  </div>
</template>

<script>

export default {
	name: 'home',
	
	data() {
		return {
			transition: false
		}
	},

	methods: {
		firstTransition() {	
			this.transition = true;		
			// animate button before transition
			setTimeout(() => {
				this.$router.push({ path: 'featured' });
				this.transition = false;		
			}, 2000);
		}
	}
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.home {
	position: relative;

	.heading {
		color: $gold;
	}

	.first-transition {
		position: absolute;
		top: calc(50% - 20px);
		left: calc(50% - 20px);
		border: 2px solid $gold;
		border-radius: 50%;
		background: transparent;
		width: 40px;
		height: 40px;
		margin: 0 auto;
		

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			margin: 0 auto;
			border: 2px solid $white;
			border-radius: 50%;
			width: 80px;
			height: 80px;
			transition: all ease 0.5s;
		}
	}

	.transition {
		&:after {
			transform: scale(0.2);
		}	
	}
}

</style>
