<template>
  <div class="featured">
    <div class="section" :class="{'move' : down}"></div>
    <div class="featured-wrapper">
      <button class="next-project" @click="next()">Next</button>

      <section class="featured-info hide" :class="{'show' : show}">
        <div class="content">
          <h1>{{current_project.name}}</h1>
          <p v-if="current_project.type">
            {{current_project.type}}
          </p>
          <p v-if="current_project.name">
            {{current_project.description}}
          </p>
          <a :href="current_project.link" target="_blank" v-if="current_project.link">Visit</a>
        </div>
      </section>

      <slider class="featured-slider hide" :class="{'show' : show}" :slides="current_project.slides" />
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
          "description": "Frontend Development on Dreamworks Animation's new website.",
          "type": "Vue/Laravel",
          "slides": [
            require("@/assets/images/projects/replace-hate.png"),
            "http://placehold.it/200x200",
            "http://placehold.it/200x200"

          ]
        },
        {
          "name": "ReplaceHate.com",
          "link": "https://replacehate.com",
          "description": "Frontend developement on #ReplaceHate social campaign site that genrates share assets to promote the film.",
          "type": "Ember",
          "slides": [
            require("@/assets/images/projects/replace-hate.png"),
            "http://placehold.it/200x200",
            "http://placehold.it/200x200"
          ]
        },
        {
          "name": "PXL White Elephant",
          "link": "https://pxl-holiday.com",
          "description": "Lead Developer on White Elephant website given to PXL's Clients along with thier Holiday Cards. The site allowed users to randomly select a gift, then we were notified of their choice and the gift was sent to them. This project was featured in Adweek.",
          "type": "Ember/Laravel",
          "slides": [
            require("@/assets/images/projects/white-elephant.png"),
            "http://placehold.it/200x200",
            "http://placehold.it/200x200"
          ]
        },
        {
          "name": "Global Road Entertainment",
          "description": "Frontend Development on new site for the Rebranded Open Road, i.e. Global Road that went live right before they went out of business.",
          "type": "Vue/Laravel",
          "slides": [
            require("@/assets/images/projects/global-road.png"),
            "http://placehold.it/200x200",
            "http://placehold.it/200x200"
          ]
        },
        {
          "name": "Paramount Sticker Packs",
          "link": "https://www.pxlagency.com/our-work/bumblebee-sticker-pack",
          "description": "Developed an Android App for Paramount Sticker Packs that made thier stickers designed by PXL available for Gboard through Google Play.",
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
    z-index: $front;

    @media #{$small} {
      bottom: 0;
    }
  }

  &-info {
    width: 100%;
    height: 50%;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;

    @media #{$small} {
      width: 50%;
      height: 100%;
    }

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

    @media #{$small} {
      width: 50%;
      height: 100%;
      right: 0;
      left: auto;
    }
  }

  .section {
    position: absolute;
    width: 100%;
    height: 50%;
    background: $black;
    z-index: -1;
    transform: translateY(-100%);

    @media #{$small} {
      width: 50%;
      height: 100%;
      transform: translateX(-100%);
    }
  }

  .move {
    transform: translateY(0);
    transition: all ease 0.5s;

    @media #{$small} {
      transform: translateX(0);
      transition: all ease 0.5s;
    }
  }
}
</style>
