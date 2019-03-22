<template>
    <section
      class="wrapper"
      ref='theater'
      :class='{"loading": !setupFinished}'
      >

      <ul class="slider">
        <li class="slide"
          v-for='(item, index) in slides'
          :class='[item.name, {active: currentIndex === index}]'
          :key='`x-${index}`'
          >
          <div class="content">
            <img :src="item">
          </div>
        </li>
      </ul>

      <!-- optional stuff -->
      <div class="button backward" v-if='navigation'>
        <button class="next" @click='backward'>←</button>
      </div>

      <div class="button forward" v-if='navigation'>
        <button class="next" @click='forward'>→</button>
      </div>

      <div class="pagination" v-if='dots'>
        <ul class="item-list">
          <li class="item"
            v-for='(item, index) in slides'
            :class='[item.slug, {active: currentIndex === index}]'
            :key='`y-${index}`'
            >
            <button @click='setItem(index)'>
              <span v-if='dotText'>
                {{item.title}}
              </span>
              <span else>
                &times;
              </span>
            </button>
          </li>
        </ul>
      </div>

    </section>
</template>

<script>
export default {
  name: 'Slider',

  props: {
    slides: Array
  },

  mounted() {
    this.initialize();
  },

  data() {
    return {
      // the 'reactive' properties in this scope
      currentIndex: null,
      navigation: true, // what is this type of 'nav' called?
      dots: true, // better name for this? - yes...
      dotText: false,
      setupFinished: false,
    };
  },

  computed: {
    itemsLength() {
      // [...{variable}] builds an array and fills it in with 'whatever'
      return [...this.slides].length - 1;
      // 'spreads' the items into and array: "spread syntax"
    },
    previousIndex() {
      return (this.currentIndex - 1) < 0 ? this.itemsLength : this.currentIndex - 1;
    },
    nextIndex() {
      return (this.currentIndex + 1) > this.itemsLength ? 0 : this.currentIndex + 1;
    },
    currentItem() {
      return (this.currentIndex > this.itemsLength) ? [...this.slides][0] : [...this.slides][this.currentIndex];
    },
    visualIndex() {
      return this.currentIndex + 1;
    },
    visualTotal() {
      return this.itemsLength + 1;
    },
  },

  methods: {
    initialize() {
      setTimeout( ()=> {
        this.currentIndex = 0;
        this.setupFinished = true;
      }, 0);
    },
    setItem(index) {
      this.currentIndex = index;
    },
    forward() {
      this.currentIndex = this.nextIndex;
    },
    backward() {
      this.currentIndex = this.previousIndex;
    },
  },
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  .slide {
    @include absolute-cover();
    pointer-events: none; // stop the layer from interaction
    opacity: 0; // opacity - to visually hide it ^ (it can't be touched)
    transition: 0.5s ease; // general transition for now
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .content {
      opacity: 0; // also hide this -
      transform: translate(0, 10px); // and move it up a bit for fun
      transition: 0.5s; // animation duration
      margin: 0 auto;

      img {
        max-width: 200px;
      }
    }

    &.active { // when the frame that is chosen appears...
      opacity: 1;
      z-index: $base;
      pointer-events: initial; // let users interact with buttons etc.
      .content {
        opacity: 1; // setup additional CSS animations
        //
        // delays are brittle compared to gsap -
        // but also fun / and sometimes do the trick
        transition-delay: 0.5s;
        transform: translate(0, 0); // set it back to 'normal' layout
      }
    }
  }

  .pagination {
    z-index: $base;
  }

  .button, .menu {
    // menu/buttons etc. - rendering could be based on an optional parameter
    // - but the style rules to be written and ready
    opacity: 1;
    transition: opacity 2s;
    transition-delay: 1s;
  }

  .button {
    position: absolute;
    top: 50%;
    border: 0;
    transform: translate(0, -50%); // (half it's own height up)

    .next {
      color: $gold;
    }

    &.forward {
      right: 1rem;
    }

    &.backward {
      left: 1rem;
    }
  }

  .pagination {
    position: absolute;
    bottom: 1rem;
    width: 100%;

    @media #{$small} {
      bottom: 4rem;
    }

    .item-list {
      margin: 0;
      padding: 0; // should be in a css reset to start with
      list-style: none;
      display: flex;
      justify-content: center;
    }

    .item {
      display: block;
      padding: 0 1rem;

      button {
        color: $white;
      }

      &.active {
        button {
          color: $gold;
        }
      }
    }
  }

  &.loading {
    .button, .menu {
      // start these hidden, so they can fade in with some style
      opacity: 0;
      transition: 2s;
    }
  }
}

</style>