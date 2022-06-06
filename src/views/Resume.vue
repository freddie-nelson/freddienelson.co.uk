<script lang="ts">
import { defineComponent, ref } from "vue";
import html2pdf from "html2pdf.js";

import { Icon } from "@iconify/vue";
import downloadIcon from "@iconify-icons/tabler/download";

export default defineComponent({
  name: "Resume",
  components: {
    Icon,
  },
  setup() {
    // window.addEventListener("resize", () => {
    //   const e = document.querySelector(".resume");
    //   if (e) console.log(e.clientWidth / e.clientHeight);
    // });

    const resume = ref<HTMLDivElement>();

    const download = async () => {
      if (!resume.value) return alert("Failed to download as PDF.");

      // const rect = resume.value.getBoundingClientRect();
      // const h = Math.floor(rect.height);

      resume.value.style.borderRadius = "0px";
      resume.value.style.width = "210mm";
      resume.value.style.height = "297mm";

      await html2pdf(resume.value, {
        filename: "freddie-nelson-resume.pdf",
      });

      resume.value.style.borderRadius = "";
      resume.value.style.height = "";
      resume.value.style.width = "";
    };

    return {
      resume,
      download,

      icons: {
        download: downloadIcon,
      },
    };
  },
});
</script>

<template>
  <div class="resume-container">
    <div class="top-bar">
      <router-link to="/" class="link">Freddie Nelson</router-link>

      <button class="download-btn" @click="download">
        <Icon :icon="icons.download" />
        Download as PDF
      </button>
    </div>

    <div class="resume" ref="resume"></div>
  </div>
</template>

<style lang="scss" scoped>
.resume-container {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: var(--bg-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .top-bar {
    display: flex;
    margin: 1.5rem 0;
    justify-content: space-between;
    align-items: center;
    width: 95vw;
    max-width: 210mm;
  }
}

.link {
  font: var(--heading);
  color: var(--heading-dark);
  font-size: 1.3rem;
  position: relative;

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

.resume {
  --width: 95vw;
  margin-bottom: calc((100vw - var(--width)) / 2);
  width: var(--width);
  max-width: 210mm;
  height: calc(297 / 210 * var(--width));
  max-height: 297mm;
  background: #fcf9f4;
  border-radius: 0.3rem;
}

.download-btn {
  display: flex;
  justify-items: center;
  align-items: center;
  background: var(--accent-dark);
  border-radius: 0.3rem;
  padding: 1rem;
  gap: 0.3rem;
  transition: background 0.3s ease;
  outline: none !important;
  color: var(--bg-dark);

  &:hover {
    background: var(--accent-light);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>