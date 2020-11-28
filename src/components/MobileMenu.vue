<script lang="ts">
// Import close icon
import { Icon } from "@iconify/vue";
import closeIcon from "@iconify-icons/line-md/close";

import { defineComponent } from "vue";

export default defineComponent({
  name: "MobileMenu",
  components: {
    Icon
  },
  data() {
    return {
      closeIcon
    }
  },
  props: {
    showMenu: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<template>
  <transition name="fade">
    <div class="mobile-menu" v-if="showMenu">
      <button @click="$emit('close-menu')" name="Close navigation menu" class="close"><Icon :icon="closeIcon" /></button>
      <div class="content">
        <a @click="$emit('close-menu')" href="#about" class="link">About</a>
        <a @click="$emit('close-menu')" href="#projects" class="link">Projects</a>
        <a @click="$emit('close-menu')" href="#contact" class="link">Contact</a>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.mobile-menu {
  z-index: 10;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  display: flex;

  .content {
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    font: var(--heading);
    color: var(--accent-light);
    height: 40%;
    max-height: 330px;
  }

  .close {
    position: absolute;
    top: 15px;
    right: var(--side-padding);
    color: var(--accent-light);
    outline: none;
    
    svg {
      width: 35px;
      height: auto;
    }
  }
}
</style>
