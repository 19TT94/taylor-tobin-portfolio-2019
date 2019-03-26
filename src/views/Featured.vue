<template>
  <div class="featured">
    <div class="section" :class="{'move' : down}"></div>
    <div class="featured-wrapper">

      <section class="featured-info hide" :class="{'show' : show}">
        <div class="content">
          <h1>{{current_project.name}}</h1>
          <p v-if="current_project.type">
            {{current_project.type}}
          </p>
          <p class="description" v-if="current_project.name" v-html="current_project.description"></p>
          <a :href="current_project.link" target="_blank" v-if="current_project.link">Visit</a>
        </div>
        <button class="next-project hide" :class="{'show' : down}" @click="next()">Next Project</button>
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
      }, 900);
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
            require("@/assets/images/projects/dreamworks/dreamworks-1.png"),
            require("@/assets/images/projects/dreamworks/dreamworks-2.png"),
            require("@/assets/images/projects/dreamworks/dreamworks-3.png")
          ]
        },
        {
          "name": "ReplaceHate.com",
          "link": "https://replacehate.com",
          "description": "Frontend developement on #ReplaceHate social campaign site that genrates share assets to promote the film.",
          "type": "Ember",
          "slides": [
            require("@/assets/images/projects/replace-hate/replace-1.jpg"),
            require("@/assets/images/projects/replace-hate/replace-2.jpg"),
            require("@/assets/images/projects/replace-hate/replace-3.jpg"),
            require("@/assets/images/projects/replace-hate/replace-4.png")
          ]
        },
        {
          "name": "PXL White Elephant",
          "link": "https://pxl-holiday.com",
          "description": "Lead Developer on White Elephant website given to PXL's Clients along with thier Holiday Cards. The site allowed users to randomly select a gift, then we were notified of their choice and the gift was sent to them. Not only was this a fun way to wish our clients a happy holiday, but the project was featured in <a href=\"https://www.adweek.com/agencies/agency-holiday-cards-2018-inventive-and-creative-send-offs-to-the-year/?utm_content=position_4&utm_source=sailthru&utm_medium=email&utm_term=AWK_Agencies&utm_campaign=Agencies_Newsletter_2018122114&s_id=5b75d55320122e18f4031361\">Adweek</a>.",
          "type": "Ember/Laravel",
          "slides": [
            require("@/assets/images/projects/white-elephant/white-elephant-1.png"),
            require("@/assets/images/projects/white-elephant/white-elephant-2.png"),
            require("@/assets/images/projects/white-elephant/white-elephant-3.png"),
            require("@/assets/images/projects/white-elephant/white-elephant-4.png"),
            require("@/assets/images/projects/white-elephant/white-elephant-5.png")
          ]
        },
        // {
        //   "name": "Global Road Entertainment",
        //   "description": "Frontend Development on new site for the Rebranded Open Road, i.e. Global Road that went live right before they went out of business.",
        //   "type": "Vue/Laravel",
        //   "slides": [
        //     require("@/assets/images/projects/global-road.png"),
        //     "http://placehold.it/200x200",
        //     "http://placehold.it/200x200"
        //   ]
        // },
        // {
        //   "name": "Paramount Sticker Packs",
        //   "link": "https://www.pxlagency.com/our-work/bumblebee-sticker-pack",
        //   "description": "Developed an Android App for Paramount Sticker Packs that made thier stickers designed by PXL available for Gboard through Google Play.",
        //   "type": "Android/IOS",
        //   "slides": [
        //     "http://placehold.it/200x200",
        //     "http://placehold.it/200x200",
        //     "http://placehold.it/200x200"
        //   ]
        // }
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
    bottom: 0;

    @media #{$small} {
      bottom: 0;
    }
  }

  &-info {
    width: 100%;
    height: 45%;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;

    @media #{$small} {
      width: 35%;
      height: 100%;
    }

    .content {
      margin: 0 auto;
      bottom: 0;
      position: absolute;
      width: 100%;
      height: 80%;

      h1 {
        padding: 2rem 2rem 1rem;
      }

      p {
        padding: 0 2rem 1rem;
      }

      .description {
        display: none;

        @media #{$small} {
          display: block;
        }
      }

      a {
        padding: 0 2rem;;
      }
    }
  }

  .section {
    position: absolute;
    width: 100%;
    height: 45%;
    background: $black;
    z-index: -1;
    transform: translateY(-100%);
    box-shadow: 15px 15px 15px rgba(0,0,0,0.8);

    @media #{$small} {
      width: 35%;
      height: 100%;
      transform: translateX(-100%);
    }
  }

  &-slider {
    width: 100%;
    height: 55%;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: $base;
    transition-delay: 0.5s;

    @media #{$small} {
      width: 65%;
      height: 100%;
      right: 0;
      left: auto;
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
