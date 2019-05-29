<template>
  <div class="maintenance">

    <section class="container info hide" :class="{ 'show': show }">
      <h1>Taylor Tobin</h1>
      <h3>Developer</h3>

      <ul class="contact">
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

    <p class="note special" :class="{ 'hide': !intro }">New Site Coming Soon! Here's the basics for now.</p>

    <customMap class="map" :class="{ 'move-up': show }" />

  </div>
</template>

<script>

export default {
  name: 'maintenance',

  data() {
    return {
      intro: true,
      show: false
    }
  },

  mounted() {
    setTimeout(()=> {
      this.intro = false
      setTimeout(()=> {
        this.show = true
      }, 500)
    }, 2500)
  }
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.maintenance {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: $black;
  color: $white;
}

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

.note {
  position: absolute;
  bottom: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  color: $gold;
  max-width: 75%;
}

.amp {
  padding-left: 0.5rem;
}

</style>
