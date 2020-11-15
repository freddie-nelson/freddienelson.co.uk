<template>
  <section id="hero">
    <div class="content">
      <h1>Your <span class="highlight" id="role-text">{{ highlight }}</span> developer.</h1>
      <p>I’m Freddie Nelson, I have 3 Years programming experience and I specialise in frontend development.</p>
      <a href="#contact">Get in touch <icon :icon="chevronIcon" /></a>
    </div>
  </section>
</template>

<script lang="ts">
import { Icon } from "@iconify/vue";
import chevronIcon from "@iconify-icons/line-md/chevron-small-right";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Hero",
  components: {
    Icon
  },
  data() {
    return {
      chevronIcon,
      highlight: "JavaScript"
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 700) {
        this.highlight = "Web";
      }  
    })

    if (window.innerWidth <= 700) {
      this.highlight = "Web";
    }
  }
});
</script>

<style lang="scss" scoped>
#hero {
  width: 100%;
  height: 100vh;
  background-color: var(--bg-dark);
  display: flex;

  .content {
    margin-top: 29vh;

    h1 {
      font: var(--page-title);
      color: var(--heading-dark);
      margin-bottom: 1rem;

      .highlight {
        color: var(--accent-dark);

        // @media screen and (max-width: 700px) {
        //   display: none;
        // }
      }
    }

    p {
      font: var(--para);
      color: var(--para-dark);
      opacity: .75;
      width: 40vw;
      min-width: 350px;
      max-width: 850px;
      margin-bottom: 1.2vh;
    }

    a {
      font: var(--heading);
      font-size: 1.7rem;
      color: var(--accent-light);

      // @media screen and (max-width: 700px) {
      //   font-size: 1.2rem;
      // }

      svg {
        margin-bottom: -.3%;
        animation: anim 3s infinite ease;
        display: inline;

        @keyframes anim {
          from {
            transform: translateX(-.3rem);
          }

          50% {
            transform: translateX(.2rem);
          }

          to {
            transform: translateX(-.3rem);
          }
        }
      }

      &:focus {
        outline: none;
      }
    }
  }
}
</style>

