<script lang="ts">
import { defineComponent, ref, watch } from "vue";

import MobileMenu from "@/components/MobileMenu.vue";
import Navbar from "@/sections/nav/Nav.vue";
import Hero from "@/sections/hero/Hero.vue";
import Skills from "@/sections/skills/Skills.vue";
import About from "@/sections/about/About.vue";
import Projects from "@/sections/projects/Projects.vue";
import Contact from "@/sections/contact/Contact.vue";
import Footer from "@/sections/footer/Footer.vue";

export default defineComponent({
  name: "Home",
  components: {
    MobileMenu,
    Navbar,
    Hero,
    Skills,
    About,
    Projects,
    Contact,
    "page-footer": Footer,
  },
  setup() {
    const showMenu = ref(false);

    watch(showMenu, (show) => {
      if (show) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    return {
      showMenu
    }
  },
});
</script>

<template>
  <mobile-menu :showMenu="showMenu" @close-menu="showMenu = false" />
  <navbar @show-menu="showMenu = true" />
  <hero />
  <skills />
  <about />
  <projects />
  <contact />
  <page-footer />
</template>

<style lang="scss" scoped></style>