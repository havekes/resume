<template>
  <div class="flex flex-col category">
    <div class="flex items-center mt-6 mb-4">
      <h2 class="mr-4">{{ title }}</h2>
      <div class="flex-1 h-0 border-b border-gray-400"></div>
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
