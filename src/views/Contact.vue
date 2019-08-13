<template>
  <div class="page contact">
    <section class="section" :class="{ 'move': show }">
      <div class="info">
        <h2>What I can do for you</h2>
        <h3 class="subtitle">I'm a full stack developer with an interest in great visual design and quality responsive user experiences. You can find me online or in the ocean most mornings. Contact me for inquieries. Cheers!</h3>
        <div class="services">
          <ul>
            <li>
              Websites
            </li>
            <li>
              Web Apps
            </li>
            <li>
              UI / UX
            </li>
            <li>
              Mobile Apps
            </li>
          </ul>
        </div>

        <h2>Get In Touch</h2>

        <ul id="form">
          <li>
            <input placeholder="name" />
          </li>
          <li>
            <input placeholder="inquiry" />
          </li>
          <li>
            <button type="submit" @click="submit()">Submit</button>
          </li>
        </ul>

      </div>
    </section>

    <section class="clients">
      <ul>
        <li>
          Paramount Pictures
        </li>
        <li>
          Fox Movies
        </li>
        <li>
          Universal
        </li>
        <li>
          Fathom Events
        </li>
      </ul>
    </section>

    <section class="footer">
      <ul>
        <li><span>Email:</span> <a href="mailto:19tt94@gmail.com">19tt94@gmail.com</a></li>
        <li>
          <span>Phone:</span> <a class="mobile" href="tel:805-434-7559">(805) 434-7559</a> <span class="desktop">(805) 434-7559</span>
        </li>
        <li>
          <button><a class="button resume" :href="require('@/assets/TTResume.pdf')" download="resume.pdf">Resume</a></button>
        </li>
      </ul>
      <ul class="links">
        <li>
          <a href="https://github.com/19TT94"><font-awesome-icon :icon="['fab', 'github-square']" /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/taylor-tobin/"><font-awesome-icon :icon="['fab', 'linkedin']" />  </a>
        </li>
        <li>
          <a href="https://www.instagram.com/19tt94/"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        </li>
      </ul>
    </section>

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
  },

  methods: {
    submit() {
      console.log("submit");
    }
  }
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.contact {
  color: $white;

  .section {
    width: 100%;
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
      text-align: center;
      padding: 25% 1rem 0;

      @media #{$small} {
        text-align: center;
        padding: 0;
        width: 80%;
      }

      .subtitle {
        text-align: center;

        @media #{$small} {
          text-align: left;
        }
      }
    }
  }

  .clients {

  }

  .footer {
    background: $black;
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
