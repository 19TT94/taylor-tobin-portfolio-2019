<template>
  <div class="page featured">
    <div class="section"></div>

    <h1>Featured Projects</h1>

    <div class="featured-slider">

    </div>

    <div class="featured-info">
      <p>test</p>
    </div>
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
  color: $black;
  padding-left: 0;
  
  &-info {
    width: 100%;
    height: 50%;
  }

  .section {
    position: absolute;
    width: 100%;
    height: 50%;
    background: $white;
    z-index: -1;
  }
}

</style>
