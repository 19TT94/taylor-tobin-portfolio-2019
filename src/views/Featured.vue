<template>
  <div class="featured">
    <div class="section"></div>

    <h1>{{projects[0].name}}</h1>

    <div class="featured-slider">

    </div>

    <div class="featured-info">
      <p v-if="projects[0].type">{{projects[0].type}}</p>
      <p v-if="projects[0].name">{{projects[0].name}}</p>
      <a :href="projects[0].link" v-if="projects[0].link">Visit</a>
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
          "type": "Vue/Laravel"
        },
        {
          "name": "ReplaceHate.com",
          "link": "https://replacehate.com",
          "type": "Ember"
        },
        {
          "name": "PXL White Elephant",
          "link": "https://pxl-holiday.com",
          "type": "Ember/Laravel"
        },
        {
          "name": "Global Road",
          "link": "",
          "type": "Vue/Laravel"
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

  h1 {
    padding: 4.5rem 2rem 1rem;
    text-align: center;
  }

  &-info {
    width: 100%;
    height: 50%;
    padding: 0 2rem;
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
