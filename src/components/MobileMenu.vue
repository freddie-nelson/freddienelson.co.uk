<script lang="ts">
import { defineComponent } from "vue";

// Import close icon
import { Icon } from "@iconify/vue";
import closeIcon from "@iconify-icons/line-md/close";

export default defineComponent({
  name: "MobileMenu",
  components: {
    Icon,
  },
  props: {
    showMenu: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      icons: {
        close: closeIcon,
      },
    };
  },
});
</script>

<template>
  <transition name="slide">
    <div class="mobile-menu" v-if="showMenu">
      <button
        @click="$emit('close-menu')"
        name="Close navigation menu"
        class="close"
      >
        <Icon :icon="icons.close" />
      </button>
      <div class="content">
        <a @click="$emit('close-menu')" href="#about" class="link">About</a>
        <a @click="$emit('close-menu')" href="#projects" class="link">
          Projects
        </a>
        <a @click="$emit('close-menu')" href="#contact" class="link">Contact</a>
        <router-link @click="$emit('close-menu')" to="/resume" class="link">
          Resume
        </router-link>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translate(100vw);
  opacity: 0;
}

.mobile-menu {
  z-index: 20;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--bg-light);
  display: flex;

  .content {
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    font: var(--heading);
    color: var(--heading-light);
    height: 40%;
    max-height: 330px;
  }

  .close {
    position: absolute;
    top: 15px;
    right: var(--side-padding);
    color: var(--heading-light);
    outline: none;

    svg {
      width: 35px;
      height: auto;
    }
  }
}
</style>
