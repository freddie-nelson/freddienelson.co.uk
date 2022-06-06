<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Resume",
  components: {},
  setup() {
    // window.addEventListener("resize", () => {
    //   const e = document.querySelector(".resume");
    //   if (e) console.log(e.clientWidth / e.clientHeight);
    // });
  },
});
</script>

<template>
  <div class="container">
    <div class="resume"></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  min-height: 100vh;
  background-color: var(--bg-light);
  display: flex;
  justify-content: center;
  align-items: center;
}

.resume {
  --width: 95vw;
  margin: calc((100vw - var(--width)) / 2);
  width: var(--width);
  max-width: 210mm;
  height: calc(297 / 210 * var(--width));
  max-height: 297mm;
  background: #fcf9f4;
  border-radius: 0.3rem;
}
</style>