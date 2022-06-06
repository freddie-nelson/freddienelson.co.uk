<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import { Icon } from "@iconify/vue";
import chevronIcon from "@iconify-icons/line-md/chevron-small-right";

import Typewriter from "typewriter-effect/dist/core";
import {
  setupTypewriterDesktop,
  setupTypewriterMobile,
} from "./setupTypewriter";

export default defineComponent({
  name: "Hero",
  components: {
    Icon,
  },
  setup() {
    const role = ref<HTMLSpanElement>();

    onMounted(() => {
      // setup typewriter effect
      const tw = new Typewriter(role.value, {
        delay: 80,
        loop: true,
      });

      const delay = 1600;
      const pause = 300;

      if (window.innerWidth <= 700) {
        setupTypewriterMobile(tw, delay, pause);
      } else {
        setupTypewriterDesktop(tw, delay, pause);
      }
    });

    return {
      role,

      icons: {
        chevron: chevronIcon,
      },
    };
  },
});
</script>

<template>
  <section id="hero">
    <div class="content">
      <h1>Your <span class="highlight" ref="role"></span>developer.</h1>
      <p>
        I’m Freddie Nelson, I have 4 Years programming experience and I
        specialise in frontend development.
      </p>
      <a href="#contact">Get in touch <icon :icon="icons.chevron" /></a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#hero {
  width: 100%;
  height: 100vh;
  background-color: var(--bg-dark);
  display: flex;

  .content {
    margin-top: 29vh;
    width: 100%;

    h1 {
      font: var(--page-title);
      color: var(--heading-dark);
      margin-bottom: 1rem;
      white-space: nowrap;

      .highlight {
        color: var(--accent-dark);
        margin-right: 0.4rem;

        // @media screen and (max-width: 700px) {
        //   display: none;
        // }
      }
    }

    p {
      font: var(--page-subtitle);
      color: var(--para-dark);
      opacity: 0.75;
      width: 70%;
      min-width: 350px;
      max-width: 750px;
      margin-bottom: 1.2vh;

      @media screen and (max-width: 450px) {
        width: 100%;
      }
    }

    a {
      font: var(--heading);
      font-size: 1.7rem;
      color: var(--accent-light);

      // @media screen and (max-width: 700px) {
      //   font-size: 1.2rem;
      // }

      svg {
        margin-bottom: -0.1%;
        animation: anim 3s infinite ease;
        display: inline;

        @keyframes anim {
          from {
            transform: translateX(-0.3rem);
          }

          50% {
            transform: translateX(0.2rem);
          }

          to {
            transform: translateX(-0.3rem);
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

