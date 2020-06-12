<template>
  <div class="category flex flex-col">
    <div class="flex items-center mt-6 mb-4">
      <h2 class="mr-4">{{ title }}</h2>
      <div class="flex-1 border-b border-gray-400 h-0"></div>
    </div>
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
  },
}
</script>
