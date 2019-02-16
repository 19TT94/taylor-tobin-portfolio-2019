<template>
  <div class="featured">
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
  
  data() {
    return {
      projects: [
        ""
      ]
    }
  }
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.featured {
  color: $white;

  h1 {
    padding: 4.5rem 2rem 1rem;
    text-align: center;
  }

  &-info {
    width: 100%;
    height: 50%;
    padding: 0 2rem;
  }

  .section {
    position: absolute;
    width: 100%;
    height: 50%;
    background: $black;
    z-index: -1;
  }
}

</style>
