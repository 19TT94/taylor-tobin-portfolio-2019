<template>
  <div id="bolt">
    <div id="dot"></div>
    <div id="box"></div>
    <div id="diamond"></div>
  </div>
</template>

<script>

import Utils from '@/utils/index.js'

export default {
  name: 'bolt',

  data() {
    return {
      selectors: null
    }
  },

  methods: {
    setCursor() {
      let dot = document.getElementById('dot')
      let box = document.getElementById('box')
      let diamond = document.getElementById('diamond')

      // get mouse move events to set custom cursor
      window.addEventListener('mousemove', (e)=> {
        dot.style.top = e.clientY + 'px'
        dot.style.left = e.clientX + 'px'
        setTimeout(()=> {
          box.style.top = e.clientY + 'px'
          box.style.left = e.clientX + 'px'
        }, 100)
        setTimeout(()=> {
          diamond.style.top = e.clientY + 'px'
          diamond.style.left = e.clientX + 'px'
        }, 150)
      })

      // get all anchors and buttons
      this.selectors = document.querySelectorAll('a,button')
      // iterate over elements to hijack mouse events
      for (var i = 0; i < this.selectors.length; i++) {
        // add classes on mouse enter
        this.selectors[i].onmouseenter = ()=> {
          dot.classList.add('grow')
          box.classList.add('hide')
          diamond.classList.add('hide')
        }
        // remove classes on mouse leave
        this.selectors[i].onmouseleave = ()=> {
          dot.classList.remove('grow')
          box.classList.remove('hide')
          diamond.classList.remove('hide')
        }
        // remove classes on mouse click
        this.selectors[i].onmousedown = ()=> {
          dot.classList.remove('grow')
          box.classList.remove('hide')
          diamond.classList.remove('hide')
        }
      }
    }
  },

  mounted() {
    // intial cursor state
    if (!Utils.isMobileDevice()) {
      this.setCursor()
    }
  },

  watch: {
    '$route' (to, from) {
      // react to route changes...
      if (!Utils.isMobileDevice()) {
        this.setCursor()
      }
    }
  }
}

</script>

<style scoped lang="scss">

@import '@/assets/scss/app.scss'; // global styles

#bolt {
  display: none;

  @media #{$small} {
    display: block;
  }

  #dot {
    position: absolute;
    height: 10px;
    width:10px;
    border-radius: 50%;
    transition: all 0.3s, top 0s, left 0s;
    transform: translate(-50%, -50%);
    pointer-events: none;
    background-color: $white;
    mix-blend-mode: difference;
    z-index: 10;
  }

  #box {
    position: absolute;
    height: 20px;
    width: 20px;
    border: 1px solid $gold;
    transform: translate(-50%, -50%);
    transition: all 0.3s, top 0s, left 0s;
    pointer-events: none;
    animation: spin 5s linear reverse infinite;
    z-index: 10;
  }

  #diamond {
    position: absolute;
    height: 20px;
    width: 20px;
    border: 1px solid $white;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all 0.3s, top 0s, left 0s;
    pointer-events: none;
    animation: spin 5s linear infinite;
    mix-blend-mode: difference;
    z-index: 10;
  }
}

.grow {
  transform: translate(-50%, -50%) scale(4) !important;
}

.hide {
  opacity: 0;
}

@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
</style>
