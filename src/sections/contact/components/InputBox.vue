<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputBox",
  props: {
    label: {
      type: String,
      default: "Label"
    },
    type: {
      type: String,
      default: "text"
    },
    textarea: {
      type: Boolean,
      default: false
    },
    modelValue: String
  },
  emits: ["update:modelValue"],
});
</script>

<template>
<div class="input" @click="$refs.input.focus()">
  <div class="label" :class="{ box: modelValue }">{{ label }}</div>
  <input ref="input" v-if="!textarea" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :type="type" required>
  <textarea ref="input" v-else :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :type="type" :name="label" cols="30" rows="10" required></textarea>
</div>
</template>

<style lang="scss" scoped>
.input {
  width: 100%;
  border: 2px solid var(--heading-light);
  border-radius: 5px;
  margin-top: 1.2rem;
  color: var(--heading-light);
  cursor: text;

  &:first-of-type {
    margin-top: .6rem;
  }

  .label {
    position: absolute;
    font: var(--para-sans);
    font-size: 1.1rem;
    padding: .3rem .5rem;
    opacity: .5;
    transition: font-size .2s ease, transform .2s ease;
    user-select: none;

    &.box {
      transform: translate(.3rem, -1rem);
      background-color: var(--accent-dark);
      font-size: .7rem;
      opacity: 1;
      color: var(--heading-dark);
      font-weight: bold;
      border-radius: 3px;
      padding: .2rem .4rem;
    }
  }
  
  input, textarea {
    width: 100%;
    font: var(--para-sans);
    font-size: 1.1rem;
    padding: .3rem .5rem;
    outline: none;
    background: none;
  }

  textarea {
    min-height: 35vh;
  }
}
</style>
