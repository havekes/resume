<template>
  <div class="mb-4 experience">
    <div class="flex items-center">
      <h3>{{ title }}</h3>
      <div class="flex-1 mx-2 border-b md:mx-4"></div>
      <h3 class="text-right">{{ date }}</h3>
    </div>
    <div class="my-2 italic" v-if="description">{{ description }}</div>
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
