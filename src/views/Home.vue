<template>
  <div class="page home frame">
	<h1 class="heading">Taylor Tobin</h1>
	<h3 class="heading-sub">Developer</h3>
	<!-- <button class="first-transition"
		@touchstart="start"
		:class="{'transition': expand}">
	</button> -->
	<router-link class="item view-work" to="/featured">View Work</router-link>
  </div>
</template>

<script>
export default {
	name: 'home',

	data() {
		return {
			expand: false
		}
	},

	methods: {
		start() {
			this.expand = true;
			// animate button before transition
			setTimeout(() => {
				this.$router.push({ path: 'featured' });
				this.transition = false;
			}, 2000);
		},
		go() {
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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  padding: 1rem;

	.heading {
		color: $gold;
		padding-top: 2rem;
		font-size: 3rem;

		&-sub {
			font-size: 2rem;
			color: $white;
		}
	}

	.view-work {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 150px;
		padding: 1rem;
		text-align: center;
	}

	.first-transition {
		position: absolute;
		top: calc(50% - 20px);
		left: 0;
		right: 0;
		border: 2px solid $gold;
		border-radius: 50%;
		background: transparent;
		width: 40px;
		height: 40px;
		margin: 0 auto;


		&:before {
			content: '';
			position: absolute;
			top: -2px;
			left: -2px;
			right: 0;
			margin: 0 auto;
			border: 2px solid $white;
			border-radius: 50%;
			width: 100%;
			height: 100%;
			transform: scale(0);
			transition: all ease 2.5s;
		}
	}

	.transition {
		&:before {
			transform: scale(3);
		}
	}
}

</style>
