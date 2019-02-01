<template>
	<div id="menu">
		<router-link to="/">Home</router-link> |
		<router-link to="/featured">Featured</router-link> |
		<router-link to="/projects">Projects</router-link> |
		<router-link to="/about">About</router-link> |
		<router-link to="/contact">Contact</router-link>
	</div>
</template>

<script>
export default {
  name: 'Menu',

  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

#menu {
	position: absolute;
	width: 100%;
	height: $menuHeight;
	text-align: center;
}

</style>
