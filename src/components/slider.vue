<template>
    <section
      class="wrapper"
      ref='theater'
      :class='{"loading": !setupFinished}'
      >

      <ul class="slider">
        <li class="slide"
          v-for='(item, index) in items'
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
            v-for='(item, index) in items'
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
      items: this.slides,
      currentIndex: null,
      navigation: true, // what is this type of 'nav' called?
      dots: true, // better name for this? - yes...
      dotText: false,
      setupFinished: false,
    };
  },

  computed: {
    itemsLength() {
      // [...whatever] builds an array and fills it in with 'whatever'
      return [...this.items].length - 1;
      // 'spreads' the items into and array: "spread syntax"
    },
    previousIndex() {
      let previous = this.currentIndex - 1;
      if (previous < 0) {
        return this.itemsLength;
      } else { // I could write this in shorthand - but I don't
        return previous;
      }
    },
    nextIndex() {
      let next = this.currentIndex + 1;
      if (next > this.itemsLength) {
        return 0;
      } else {
        return next;
      }
    },
    currentItem() { // not really using this yet... because our needs are actually more simple than that
      if (this.currentIndex > this.itemsLength) {
        return [...this.items][0];
      } else {
        return [...this.items][this.currentIndex];
      }
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
      transition: .2s; // animation duration
      margin: 0 auto;
    }

    &.active { // when the frame that is chosen appears...
      opacity: 1;
      z-index: 5;
      pointer-events: initial; // let users interact with buttons etc.
      .content {
        opacity: 1; // setup additional CSS animations
        //
        // delays are brittle compared to gsap -
        // but also fun / and sometimes do the trick
        transition-delay: 1s;
        transform: translate(0, 0); // set it back to 'normal' layout
      }
    }
  }

  .pagination { // no class? $shame -or ok?
    z-index: 5;
    // high enough / but given enough room that if you need to set 3 or 4 etc
    // - that you can. 0, 5, 10, 15, 20 should always be enough
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
