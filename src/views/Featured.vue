<template>
  <div class="featured">
    <div class="section"></div>

    <div class="featured-info">
      <h1>{{projects[0].name}}</h1>
      <p v-if="projects[0].type">{{projects[0].type}}</p>
      <p v-if="projects[0].name">{{projects[0].name}}</p>
      <a :href="projects[0].link" v-if="projects[0].link">Visit</a>
    </div>

    <div class="featured-slider">
      <img :src="projects[0].slides[0]">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Featured',
  
  data() {
    return {
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
          "name": "Global Road",
          "link": "",
          "description": "",
          "type": "Vue/Laravel",
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
