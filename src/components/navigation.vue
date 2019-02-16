<template>
	<div id="menu">
		<div class="toggle" @click="toggleNav">
			<div class="bar" :class="{ 'rotate': unlock }"></div>
			<div class="bar" :class="{ 'rotate': unlock }"></div>
		</div>

		<div class="menu-wrap" :class="{ 'show': open }">
			<router-link class="item" to="/">Home</router-link>
			<router-link class="item" to="/featured">Featured</router-link>
			<router-link class="item" to="/projects">Projects</router-link>
			<router-link class="item" to="/about">About</router-link>
			<router-link class="item" to="/contact">Contact</router-link>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Menu',

  props: {
    msg: String
	},

	data() {
		return {
			unlock: false,
			open: false
		}
	},
	
	methods: {
		toggleNav() {
			this.unlock = !this.unlock;			
			setTimeout(()=> {
				this.open = !this.open;			
			}, 500)
		}
	}
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

#menu {
	position: fixed;
	width: 100%;
	height: 100%;
	text-align: center;
	z-index: $front;

	.toggle {
		position: absolute;
		top: 0;
		right: 0;
		width: 35px;
		height: 35px;
		margin: 3rem 3rem;

		.bar {
			width: 100%;
			height: 3px;
			background: $gold;
			margin-top: 6px;
			transition: all ease-in-out 0.5s;
		}

		.rotate {
			&:first-child {
				transform: rotate(45deg) translateX(6px);
				// transform: rotate(45deg);
				// margin-top: 0;
				// transform-origin: 0 0;
			}

			&:last-child {
				transform: rotate(-405deg) translateX(6px);
				// transform: rotate(-45deg);
				// margin-top: 0;
				// transform-origin: 100% 100%;
			}
		}
	}

	.menu-wrap {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: $white;
		opacity: 0;
		visibility: hidden;
		transition: all 1s ease;

		.item {
			font-family: $title-font;
			font-weight: 600;
			padding: 1rem 0;
			color: $black;
			font-size: 2rem;
		}
	}
}
</style>
