<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: {
    name: String,
    description: String,
    code: String,
    site: String,
    image: String
  }
});
</script>

<template>
<div class="card">
  <div class="image behind" :style="{ '--image': `url('${image}')` }" />
  <div class="image" :style="{ '--image': `url('${image}')` }" />

  <div class="text">
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
  </div>

  <div class="buttons">
    <a :href="code" target="_blank" class="secondary">View Code</a>
    <a :href="site" target="_blank" class="primary">See More</a>
  </div>
</div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-light);
  border-radius: 20px;
  padding: 1.8rem;
  width: 100%;
  max-width: 26rem;
  position: relative;
  margin: auto;
  margin-top: 16rem;

  .image {
    top: -8rem;
    left: 1.8rem;
    position: absolute;
    width: calc(100% - 1.8rem * 2);
    border-radius: 15px;
    height: 16rem;
    background: var(--image) center;
    background-size: cover;

    &.behind {
      filter: blur(20px);
      opacity: .6;
    }
  }

  .text {
    margin-top: 7rem;

    h3 {
      font: var(--heading);
      font-size: 1.3rem;
    }

    p {
      font: var(--para-sans);
      margin: .4rem 0;
    }
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: .5rem;

    a {
      font: var(--heading);
      font-size: 1rem;
      color: var(--accent-light);
      margin-left: 4%;
      padding: .4rem .8rem;
      border-radius: 2rem;
      outline: none;
      line-height: unset;
    }

    .primary {
      background-color: var(--accent-light);
      color: var(--bg-light);
    }
  }
}
</style>
