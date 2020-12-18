<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Curve",
});
</script>

<template>
  <svg
    viewBox="0 0 1920 372"
    preserveAspectRatio="xMinYMax meet"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 27.3406L80.0417 17.7668C160.083 8.19289 320.167 -10.9549 480.25 8.19289C640.333 27.3406 800.417 84.7839 960.5 132.653C1120.58 180.523 1280.67 218.818 1440.75 228.392C1600.83 237.966 1760.92 218.818 1840.96 209.244L1921 199.67V372H1840.96C1760.92 372 1600.83 372 1440.75 372C1280.67 372 1120.58 372 960.5 372C800.417 372 640.333 372 480.25 372C320.167 372 160.083 372 80.0417 372H0V27.3406Z"
    />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  width: 100%;
}

path {
  fill: var(--bg-dark);
}
</style>
