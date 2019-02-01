<template>
  <div class="page about">
    <h1>About</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.about {
	background: darkslateblue;
}

</style>
