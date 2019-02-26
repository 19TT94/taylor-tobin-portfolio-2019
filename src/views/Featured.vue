<template>
  <div class="featured">
    <div class="section" :class="{'move-down' : down}"></div>
    <div class="featured-wrapper">
      <button class="next-project" @click="next()">Next</button>

      <section class="featured-info hide" :class="{'show' : show}">
        <div class="content">
          <h1>{{current_project.name}}</h1>
          <p v-if="current_project.type">
            {{current_project.type}}
          </p>
          <p v-if="current_project.name">
            {{current_project.name}}
          </p>
          <a :href="current_project.link" v-if="current_project.link">Visit</a>
        </div>
      </section>

      <slider class="featured-slider hide" :class="{'show' : show}" :slides=current_project.slides />
    </div>
  </div>
</template>

<script>
import slider from '@/components/slider.vue'

export default {
  name: 'Featured',

  components: {
    slider
  },

  mounted() {
    setTimeout(()=> {
      this.down = true;
    }, 500);
    setTimeout(()=> {
      this.show = true;
    }, 1000);
  },

  computed: {
    /** @returns index of selected project if it doesn't exceed the length */
    current_project() {
      return this.projects[this.project_index];
    },
    /** @returns length of projects */
    length() {
      return this.projects.length;
    }
  },

  methods: {
    /** @increments current project */
    next() {
      this.show = false;
      setTimeout(()=> {
        this.show = true;
        if(this.project_index === (this.length - 1)) {
          // reset index
          this.project_index = 0;
        } else {
          this.project_index = this.project_index + 1;
        }
      }, 500);
    }
  },

  data() {
    return {
      show: false,
      down: false,
      project_index: 0,
      projects: [
        {
          "name": "Dreamworks Animation",
          "link": "https://dreamworks.com",
          "description": "",
          "type": "Vue/Laravel",
          "slides": [
            "http://placehold.it/200x200",
            "http://placehold.it/200x200",
            "http://placehold.it/200x200"

          ]
        },
        {
          "name": "ReplaceHate.com",
          "link": "https://replacehate.com",
          "description": "",
          "type": "Ember",
          "slides": [
            "http://placehold.it/200x200",
            "http://placehold.it/200x200",
            "http://placehold.it/200x200"
          ]
        },
        {
          "name": "PXL White Elephant",
          "link": "https://pxl-holiday.com",
          "description": "",
          "type": "Ember/Laravel",
          "slides": [
            "http://placehold.it/200x200",
            "http://placehold.it/200x200",
            "http://placehold.it/200x200"
          ]
        },
        {
          "name": "Global Road Entertainment",
          "description": "",
          "type": "Vue/Laravel",
          "slides": [
            "http://placehold.it/200x200",
            "http://placehold.it/200x200",
            "http://placehold.it/200x200"
          ]
        },
        {
          "name": "Paramount Sticker Packs",
          "link": "",
          "description": "",
          "type": "Android/IOS",
          "slides": [
            "http://placehold.it/200x200",
            "http://placehold.it/200x200",
            "http://placehold.it/200x200"
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.featured {
  color: $white;
  position: relative;
  width: 100%;
  height: 100%;

  &-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .next-project {
    color: $black;
    background: $gold;
    padding: 0 1rem;
    position: absolute;
    width: 100%;
    z-index: $default;
  }

  &-info {
    width: 100%;
    height: 50%;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;

    .content {
      max-width: 90%;
      margin: 0 auto;
    }

    h1 {
      padding: 4.5rem 0 1rem;
      text-align: center;
    }

    p {
      padding: 0 1rem;
    }

    a {
      margin: 1rem;
    }
  }

  &-slider {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: $base;
    transition-delay: 0.5s;
  }

  .section {
    position: absolute;
    width: 100%;
    height: 50%;
    background: $black;
    z-index: -1;
    transform: translateY(-100%);
  }

  .move-down {
    transform: translateY(0);
    transition: all ease 0.5s;
  }
}
</style>
