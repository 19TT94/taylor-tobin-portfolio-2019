<template>
  <div class="page contact">
    <section class="info hide" :class="{ 'show': show }">
      <h2>Get In Touch</h2>
      <ul>
        <li><span>Email:</span> 19tt94@gmail.com</li>
        <li><span>Phone:</span> (805) 434-7559</li>
      </ul>

      <ul class="links">
        <li>
          <a href="https://github.com/19TT94">
            <font-awesome-icon :icon="['fab', 'github-square']" />
            <span class="amp">@</span>19tt94
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/taylor-tobin/">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
            <span class="amp">@</span>taylor-tobin
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/19tt94/">
            <font-awesome-icon :icon="['fab', 'instagram']" />
            <span class="amp">@</span>19tt94
          </a>
        </li>
      </ul>

      <button><a class="button resume" :href="require('@/assets/images/resume.jpg')" download="resume.jpg">Resume</a></button>
    </section>

    <customMap class="map" :class="{ 'move-up': show }" />
  </div>
</template>

<script>
import customMap from '@/components/custom-map.vue'

export default {
  name: 'Contact',

  components: {
		customMap
	},
  
  data() {
    return {
      show: false
    }
  },

  mounted() {
    setTimeout(()=> {
        this.show = true;
      }, 500);
  }
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.contact {
  color: $white;

	.map {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 35%;
    transform: translateY(100%);
    transition: all ease 0.5s;
  }

  .move-up {
    transform: translateY(0%);
    transition: all 1s ease;
  }

  .amp {
    padding-left: 0.5rem;
  }
}

</style>
