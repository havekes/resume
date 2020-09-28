<template>
  <div class="flex items-center justify-between my-2 skill">
    <div class="w-32 mr-2 text-left text-gray-800">{{ name }}</div>
    <div class="flex-1 text-sm text-gray-500">{{ description }}</div>
    <div class="flex items-end w-12 h-4 level">
      <div
        v-for="l in levels"
        :style="{ height: height(l) }"
        :class="[background(l)]"
        :key="l"
      ></div>
    </div>
  </div>
</template>

<script>
const LEVELS = 3
const BASE_LEVEL_HEIGHT = 0.5

const LEVEL_BG = 'bg-gray-200'
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
      return BASE_LEVEL_HEIGHT + 0.3 * l + 'rem'
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
  margin-right: 0.2rem;
  box-sizing: border-box;
}
</style>
