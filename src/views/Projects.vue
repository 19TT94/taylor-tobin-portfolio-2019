<template>
  <div class="projects">
    <div class="bar"></div>
    <div class="grid">
      <div class="block" v-for="item in items" :key="item">
        <img :src="item">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      items : [
        "http://placehold.it/200x200",
        "http://placehold.it/200x200",
        "http://placehold.it/200x200",
        "http://placehold.it/200x200",
        "http://placehold.it/200x200",
        "http://placehold.it/200x200"
      ]
    }
  }
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.projects {
  background: transparent;
  color: $white;
  width: 100%;
  height: 100%;

  .bar {
    width: 100%;
    height: 80px;
    background: $black;
    z-index: $back;
  }

  .grid {
    width: 100%;
    height: calc(100% - 80px);
    background: slategray;
    display: flex;
    flex-wrap: wrap;

    .block {
      width: 50%;
      line-height: 0;

      img {
        border: 1px solid $gold;
      }
    }
  }
}

</style>
