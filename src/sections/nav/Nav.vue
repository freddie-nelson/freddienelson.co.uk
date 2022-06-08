<script lang="ts">
import { defineComponent } from "vue";

import { Icon } from "@iconify/vue";
import menuIcon from "@iconify-icons/line-md/menu";

export default defineComponent({
  name: "Navbar",
  components: {
    Icon,
  },
  setup() {
    return {
      icons: {
        menu: menuIcon,
      },
    };
  },
});
</script>

<template>
  <nav class="navbar">
    <a href="/" class="logo link">Freddie Nelson</a>
    <button
      class="menu-btn"
      aria-label="Open navigation menu"
      @click="$emit('show-menu')"
    >
      <Icon :icon="icons.menu" />
    </button>
    <div class="links">
      <a href="#about" class="link">About</a>
      <a href="#projects" class="link">Projects</a>
      <a href="#contact" class="link">Contact</a>
      <a href="/freddie-nelson-resume.pdf" class="link">Resume</a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  color: var(--heading-dark);
  font: var(--heading);

  .logo,
  .link {
    opacity: 1;
    font-size: 1.3rem;
  }

  .links {
    display: flex;
    justify-content: space-between;
    width: 30%;
    min-width: 350px;
  }

  .link {
    font-size: 1.3rem;
    position: relative;
    mix-blend-mode: difference;

    &:hover {
      &::before {
        width: calc(100% + 20px);
      }
    }

    &::before {
      content: "";
      position: absolute;
      background-color: var(--accent-dark);
      top: calc(49%);
      left: -10px;
      border-radius: 2px;
      transition: width 0.2s ease;
      height: 4px;
      width: 0px;
    }
  }

  .menu-btn {
    display: none;
    outline: none;

    svg {
      width: 35px;
    }
  }

  @media screen and (max-width: 950px) {
    .links {
      display: none;
    }

    .menu-btn {
      display: block;
    }
  }
}
</style>
