<template>
  <div class="page contact">
    <section class="section" :class="{ 'move': show }">
      <div class="info">
        <h2>Get In Touch</h2>
        <ul>
          <li><span>Email:</span> <a href="mailto:19tt94@gmail.com">19tt94@gmail.com</a></li>
          <li>
            <span>Phone:</span> <a class="mobile" href="tel:805-434-7559">(805) 434-7559</a> <span class="desktop">(805) 434-7559</span>
          </li>
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

        <button><a class="button resume" :href="require('@/assets/images/TTresume-2019.pdf')" download="resume.pdf">Resume</a></button>
      </div>
    </section>

    <customMap class="map" :class="{ 'move': show }" />
  </div>
</template>

<script>

export default {
  name: 'Contact',

  data() {
    return {
      show: false
    }
  },

  mounted() {
    setTimeout(()=> {
      this.show = true
    }, 500)
  }
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.contact {
  color: $white;

  .section {
    position: absolute;
    width: 100%;
    height: 65%;
    background: $black;
    z-index: $default;
    transform: translateY(-100%);
    box-shadow: 15px 15px 15px rgba(0,0,0,0.6);

    @media #{$small} {
      transform: translateX(-100%);
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .info {
      padding: 25% 1rem 0;

      @media #{$small} {
        padding: 0;
        width: 50%;
      }
    }
  }

	.map {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 35%;
    transform: translateY(100%);
    transition: all ease 0.5s;

    @media #{$small} {
      transform: translateX(100%);
      width: 50%;
      height: 100%;
      left: auto;
      right: 0;
    }
  }

  .move {
    transform: translateY(0%);
    transition: all 1s ease;

    @media #{$small} {
      transform: translateX(0%);
    }
  }

  .amp {
    padding-left: 0.5rem;
  }
}

.mobile {
  @media #{$small} {
    display: none;
  }
}

.desktop {
  display: none;

  @media #{$small} {
    display: inline-block;
  }
}

</style>
