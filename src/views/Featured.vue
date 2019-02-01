<template>
  <div class="page featured">
    <h1>Featured Projects</h1>
  </div>
</template>

<script>
export default {
  name: 'Featured',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.featured {
	background: darkslategray;
}

</style>
