<template>
  <div class="featured">
    <div class="section" :class="{'move' : down}"></div>
    <div class="featured-wrapper">

      <section class="featured-info hide" :class="{'show' : show}">
        <button class="next-project hide" :class="{'show' : down}" @click="next()">Next</button>

        <div class="content">
          <h1>{{current_project.name}}</h1>
          <p v-if="current_project.type">
            {{current_project.type}}
          </p>
          <p class="description" v-if="current_project.name" v-html="current_project.description"></p>
          <a class="project-link" :href="current_project.link" target="_blank" v-if="current_project.link">Visit</a>
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
      this.down = true
    }, 500)
    setTimeout(()=> {
      this.show = true
    }, 1000)
  },

  computed: {
    /** @returns index of selected project if it doesn't exceed the length */
    current_project() {
      return this.projects[this.project_index]
    },
    /** @returns length of projects */
    length() {
      return this.projects.length
    }
  },

  methods: {
    /** @increments current project */
    next() {
      this.show = false
      setTimeout(()=> {
        this.show = true
        if (this.project_index === (this.length - 1)) {
          // reset index
          this.project_index = 0
        } else {
          this.project_index = this.project_index + 1
        }
      }, 900)
    }
  },

  data() {
    return {
      show: false,
      down: false,
      project_index: 0,
      projects: [
        {
          'name': 'New Regency',
          'link': 'http://newregency.com',
          'description': 'I lead development on the relaunch and revamp of <a href=\"http://newregency.com\">newregency.com</a>. It involved some visual upgrades, new content, and new functionality for internationalization. New Regency was looking for a way to promote their new international team. I was in charge of implementing a solution that allowed for custom pages and analytics for their international teams. In the cms international team members could generate pages for their clients with specific movies for their region.',
          'type': 'Laravel',
          'slides': [
            require('@/assets/images/projects/new-regency/new-regency-1.png'),
            require('@/assets/images/projects/new-regency/new-regency-2.png'),
            require('@/assets/images/projects/new-regency/new-regency-3.png'),
            require('@/assets/images/projects/new-regency/new-regency-4.png')
          ]
        },
        // {
        //   'name': 'Dreamworks Animation',
        //   'link': 'https://dreamworks.com',
        //   'description': 'Frontend Development on Dreamworks Animation's new website. The biggest challenge during my work on this site was working to build a slider that had performant fullpage background videos for each slide. These needed to be responsive and hide on mobile devices that didn't allow for autoplay. They also had to work with slide transitions and respond to changes of status in the viewport. Each slide also contained a iframe with the full video that added an aditional state that could cause overhead in the background.',
        //   'type': 'Vue/Laravel',
        //   'slides': [
        //     require('@/assets/images/projects/dreamworks/dreamworks-1.png'),
        //     require('@/assets/images/projects/dreamworks/dreamworks-2.png'),
        //     require('@/assets/images/projects/dreamworks/dreamworks-3.png')
        //   ]
        // },
        // {
        //   'name': 'Global Road Entertainment',
        //   'description': 'Frontend Development on new site for the Rebranded Open Road, i.e. Global Road that went live right before they went out of business.',
        //   'type': 'Vue/Laravel',
        //   'slides': [
        //     require('@/assets/images/projects/global-road.png'),
        //     'http://placehold.it/200x200',
        //     'http://placehold.it/200x200'
        //   ]
        // },
        {
          'name': 'ReplaceHate.com',
          'link': 'https://replacehate.com',
          'description': 'Frontend developement on <a href=\"https://www.instagram.com/explore/tags/replacehate/\">#ReplaceHate</a> social campaign site. This site was built for Fox Movies and allows users to generate #replacehate posters to share on social media. This promotion for the movie lived mostly on Instagram and was a fun way for fans to get involved. The biggest challenge was trying to make the process of creating the share assets as easy in fast as possible for the user. Despite the changing requirements from the client and the challenges of creating the assets in a web app, the app was a success.',
          'type': 'Ember',
          'slides': [
            require('@/assets/images/projects/replace-hate/replace-1.jpg'),
            require('@/assets/images/projects/replace-hate/replace-2.jpg'),
            require('@/assets/images/projects/replace-hate/replace-3.jpg'),
            require('@/assets/images/projects/replace-hate/replace-4.png')
          ]
        },
        {
          'name': 'PXL White Elephant',
          'link': 'https://pxl-holiday.com',
          'description': 'Lead Developer on the White Elephant website. PXL\'s Clients were given Holiday Cards with a code to recieve a gift from PXL and a link to the White Elephant Party. These codes generate a randomly selected gag gift, which is then sent to them for the holidays. Not only was this a fun way to wish our clients a happy holiday, but the project was featured in <a href=\"https://www.adweek.com/agencies/agency-holiday-cards-2018-inventive-and-creative-send-offs-to-the-year/?utm_content=position_4&utm_source=sailthru&utm_medium=email&utm_term=AWK_Agencies&utm_campaign=Agencies_Newsletter_2018122114&s_id=5b75d55320122e18f4031361\">Adweek</a>. It also gave me my first experience leading a project with both a backend and fronted component. This site featured analytics and user generation that made the site a good learning experience.',
          'type': 'Ember/Laravel',
          'slides': [
            require('@/assets/images/projects/white-elephant/white-elephant-1.png'),
            require('@/assets/images/projects/white-elephant/white-elephant-2.png'),
            require('@/assets/images/projects/white-elephant/white-elephant-3.png'),
            require('@/assets/images/projects/white-elephant/white-elephant-4.png'),
            require('@/assets/images/projects/white-elephant/white-elephant-5.png')
          ]
        },
        {
          'name': 'PXL Agency',
          'description': 'Assisted in the development of <a href=\"https://www.pxlagency.com\">pxlagency.com</a> during the brand relaunch at PXL Agency. Then was the lead developer on maintenance updates.',
          'type': 'Ember',
          'slides': [
            require('@/assets/images/projects/pxl-agency/pxl-1.png'),
            require('@/assets/images/projects/pxl-agency/pxl-2.png'),
            require('@/assets/images/projects/pxl-agency/pxl-3.png'),
            require('@/assets/images/projects/pxl-agency/pxl-4.png')
          ]
        }
        // {
        //   'name': 'Paramount Sticker Packs',
        //   'link': 'https://www.pxlagency.com/our-work/bumblebee-sticker-pack',
        //   'description': 'Developed an Android App for Paramount Sticker Packs that made thier stickers designed by PXL available for Gboard through Google Play.',
        //   'type': 'Android/IOS',
        //   'slides': [
        //     'http://placehold.it/200x200',
        //     'http://placehold.it/200x200',
        //     'http://placehold.it/200x200'
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

        @media #{$small} {
          padding: 0 2rem 1rem;
        }
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

      .description {
        display: none;

        @media #{$small} {
          display: block;
        }
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
    width: 100% !important;
    height: 55% !important;
    position: absolute !important;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: $base;
    transition-delay: 0.5s;

    @media #{$small} {
      width: 65% !important;
      height: 100% !important;
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
