<template>
  <button class="btn" :class="{ selected }">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    text: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
.btn {
  min-width: 150px;
  height: 10vw;
  min-height: 36px;
  max-height: 50px;
  border-radius: 6px;
  background-color: var(--skills-btn-bg);
  color: var(--skills-btn-text);
  font: var(--heading);
  font-size: 1.4rem;
  outline: none;
  flex-grow: 1;
  margin: 6px 0;

  &.selected {
    background-color: var(--skills-btn-selected-bg);
    color: var(--skills-btn-selected-text);
  }
}
</style>
