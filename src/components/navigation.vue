<template>
	<div id="menu">
		<div class="toggle" @click="toggleNav">
			<div class="bar" :class="{ 'rotate': unlock }"></div>
			<div class="bar" :class="{ 'rotate': unlock }"></div>
		</div>

		<div class="menu-wrap" :class="{ 'visible': unlock, 'show': open }">
			<router-link @click.native="pageChange" class="item" to="/">Home</router-link>
			<router-link @click.native="pageChange" class="item" to="/featured">Featured</router-link>
			<router-link @click.native="pageChange" class="item" to="/projects">Projects</router-link>
			<router-link @click.native="pageChange" class="item" to="/about">About</router-link>
			<router-link @click.native="pageChange" class="item" to="/contact">Contact</router-link>
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
		/* toggles events for opening and closing the nav */
		toggleNav() {
			this.unlock = !this.unlock;
			setTimeout(()=> {
				this.open = !this.open;
			}, 200)
		},
		/* handles route change event, resets data */
		pageChange() {
			this.unlock = false;
			this.open = false;
		}
	}
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

#menu {
	.toggle {
		position: absolute;
		top: 0;
		right: 0;
		width: 35px;
		height: 35px;
		margin: 2rem 2.4rem;
		z-index: 99;

		.bar {
			width: 100%;
			height: 3px;
			background: $gold;
			margin-top: 6px;
			transition: all ease-in-out 0.5s;
		}

		.rotate {
			background: $black;

			&:first-child {
				transform: rotate(45deg) translateX(6px);
			}

			&:last-child {
				transform: rotate(-405deg) translateX(6px);
			}
		}
	}

	.menu-wrap {
		position: fixed;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: $white;
		opacity: 0;
		visibility: hidden;
		z-index: $back;
		transition: all 0.5s ease;

		.item {
			font-family: $title-font;
			font-weight: 600;
			padding: 1rem 0;
			color: $black;
			font-size: 2rem;
		}
	}

	.visible {
		visibility: visible;
		z-index: $front;
	}

	.show {
		opacity: 1;
	}
}
</style>
