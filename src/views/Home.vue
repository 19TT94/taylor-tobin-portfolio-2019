<template>
  <div class="page home frame">
    <h1 class="heading">Taylor Tobin</h1>
    <h3 class="heading-sub">Developer</h3>
    <router-link class="item view-work" to="/featured" :style="{
      'cursor': 'url(' + require('@/assets/images/cursor.svg') + ')'
    }">View Work</router-link>
  </div>
</template>

<script>
export default {
  name: 'home',

  data() {
    return {
      expand: false,
      show: false,
    }
  },

  methods: {
    start() {
      this.expand = true
      // animate button before transition
      setTimeout(() => {
        this.$router.push({ path: 'featured' })
        this.transition = false
      }, 2000)
    },
    go() {
      // animate button before transition
      setTimeout(() => {
        this.$router.push({ path: 'featured' })
        this.transition = false
      }, 2000)
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
    font-size: 2.5rem;

    @media #{$small} {
      font-size: 5rem;
    }

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
}

</style>
