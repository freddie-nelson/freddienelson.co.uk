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
  <a :href="site" target="_blank" rel="noopener" class="image" :style="{ '--image': `url('${image}')` }" />

  <div class="text">
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
  </div>

  <div class="buttons">
    <a :href="code" target="_blank" rel="noopener" class="secondary">View Code</a>
    <a :href="site" target="_blank" rel="noopener" class="primary">See More</a>
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
  max-width: 30rem;
  position: relative;
  margin: auto;
  margin-top: 16rem;
  transition: transform .5s ease;
  
  @media screen and (min-width: 1100px) {
    &:hover {
      transform: translateY(-1.5rem);
    } 
  }

  .image {
    top: -8.6rem;
    left: 1.8rem;
    position: absolute;
    width: calc(100% - 1.8rem * 2);
    border-radius: 15px;
    height: 17rem;
    background: var(--image) center;
    background-size: cover;

    &.behind {
      filter: blur(20px);
      opacity: .6;
    }
  }

  .text {
    margin-top: 7.2rem;

    h2 {
      font: var(--heading);
      font-size: 1.3rem;
      color: var(--heading-light);
    }

    p {
      font: var(--para-sans);
      color: var(--para-light);
      margin: .4rem 0;
      line-height: 1.4rem;
    }
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: .5rem;

    a {
      font: var(--heading);
      font-size: 1.03rem;
      color: var(--accent-light);
      margin-left: 4%;
      padding: .4rem .8rem;
      border-radius: 2rem;
      outline: none;
      line-height: 1.5rem;
    }

    .secondary {
      transition: color .3s ease;

      &:hover, &:focus {
        color: var(--accent-dark);
      }
    }

    .primary {
      background-color: var(--accent-light);
      color: var(--bg-light);
      transition: background-color .3s ease;

      &:hover, &:focus {
        background-color: var(--accent-dark);
      }
    }
  }
}
</style>
