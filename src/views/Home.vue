<template>
  <div class="page home frame">
    <h1 class="heading" :class="{'show': show}">Taylor Tobin</h1>
    <h3 class="heading-sub" :class="{'show': show}">Developer</h3>
    <!-- <button class="first-transition"
      @touchstart="start"
      :class="{'transition': expand}">
    </button> -->
    <router-link class="item view-work" to="/featured" :style="{
      'cursor': 'url(' + require('@/assets/images/cursor.svg') + ')'
    }">View Work</router-link>
  </div>
</template>

<script>
export default {
  name: 'home',

  mounted() {
    setTimeout(()=> {
      this.show = true
    }, 3000)
  },

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
    opacity: 0;

    @media #{$small} {
      font-size: 5rem;
    }

    &-sub {
      opacity: 0;
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

  .first-transition {
    position: absolute;
    top: calc(50% - 20px);
    left: 0;
    right: 0;
    border: 2px solid $gold;
    border-radius: 50%;
    background: transparent;
    width: 40px;
    height: 40px;
    margin: 0 auto;

    &:before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: 0;
      margin: 0 auto;
      border: 2px solid $white;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      transform: scale(0);
      transition: all ease 2.5s;
    }
  }

  .transition {
    &:before {
      transform: scale(3);
    }
  }

  .show {
    opacity: 1;
  }
}

</style>
