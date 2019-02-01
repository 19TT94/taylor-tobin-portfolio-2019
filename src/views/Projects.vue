<template>
  <div class="page projects">
    <h1>Projects</h1>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.projects {
	background: slategray;
}

</style>
