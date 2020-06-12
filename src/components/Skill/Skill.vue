<template>
  <div class="skill flex items-center justify-between my-2">
    <div class="text-gray-800 mr-2 w-16 text-left">{{ name }}</div>
    <div class="flex-1 text-gray-500 text-sm">{{ description }}</div>
    <div class="level flex items-end h-4 w-12">
      <div v-for="l in levels" :style="{ height: height(l) }" :class="[background(l)]" :key="l"></div>
    </div>
  </div>
</template>

<script>
const LEVELS = 3
const BASE_LEVEL_HEIGHT = 0.5

const LEVEL_BG = 'bg-gray-300'
const LEVEL_BG_ACTIVE = 'bg-gray-800'

export default {
  props: ['name', 'description', 'level'],
  data() {
    return {
      levels: Array(LEVELS)
        .fill()
        .map((x, i) => i),
    }
  },
  methods: {
    height(l) {
      return BASE_LEVEL_HEIGHT + 0.25 * l + 'rem'
    },
    background(l) {
      return l / LEVELS <= this.level / 100 ? LEVEL_BG_ACTIVE : LEVEL_BG
    },
  },
}
</script>

<style>
.level div {
  @apply w-4;
  margin-right: 0.1rem;
  box-sizing: border-box;
}
</style>
