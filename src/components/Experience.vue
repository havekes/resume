<template>
  <div class="mb-4 experience">
    <div class="flex items-center">
      <h3 class="mr-4">{{ title }}</h3>
      <div class="flex-1 border-b"></div>
      <h3 class="ml-4">{{ date }}</h3>
    </div>
    <div class="my-2" v-if="description">{{ description }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
}
</script>

<style>
.experience ul {
  @apply list-disc ml-10;
}
.experience ul > li {
  @apply pl-2;
}
</style>
