<template>
  <div class="featured">
    <div class="section"></div>
    <div class="featured-wrapper">
      <button class="next-project" @click="next()">Next</button>
      
      <div class="featured-info">
        <h1>{{current_project.name}}</h1>
        <p v-if="current_project.type">{{current_project.type}}</p>
        <p v-if="current_project.name">{{current_project.name}}</p>
        <a :href="current_project.link" v-if="current_project.link">Visit</a>
      </div>     

      <div class="featured-slider">
        <img :src="projects[0].slides[0]">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Featured',

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
      if(this.project_index === (this.length - 1)) {
        // reset index
        this.project_index = 0;
      } else {
        this.project_index = this.project_index + 1;
      }
    }
  },
  
  data() {
    return {
      show: false,
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
    position: absolute;
    top: 0;
    left: 0;

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
