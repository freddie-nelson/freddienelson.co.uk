<script lang="ts">
import { Icon } from "@iconify/vue";
import heart from "@iconify-icons/el/heart";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  components: {
    Icon,
  },
  data() {
    return {
      heart,
    };
  },
});
</script>

<template>
  <footer class="footer">
    <p>Made with <Icon :icon="heart" class="heart" /> by Freddie Nelson</p>
    <p>Copyright © 2020 - Present</p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  height: 7rem;
  width: 100%;
  background-color: var(--bg-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc(min(var(--side-padding), 3rem));

  p {
    font: var(--heading);
    font-size: 1rem;
    color: var(--heading-dark);

    @media screen and (max-width: 450px) {
      font-size: 0.8rem;
    }
  }

  .heart {
    display: inline;
    color: var(--accent-dark);
  }
}
</style>
