<template>
  <div class="flex items-center justify-between my-2 skill">
    <div class="w-32 mr-2 text-left text-gray-800">{{ name }}</div>
    <div class="flex-1 text-sm text-gray-500">{{ description }}</div>
    <div class="flex items-end w-12 h-4 level">
      <div
        v-for="l in levels"
        :key="l"
        :style="{ height: height(l) }"
        :class="[background(l)]"
        class="box-border w-4 mr-1"
      ></div>
    </div>
  </div>
</template>

<script>
const LEVELS = 3
const BASE_LEVEL_HEIGHT = 0.5

const LEVEL_BG = 'bg-primary-200'
const LEVEL_BG_ACTIVE = 'bg-primary-500'

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    level: {
      type: Number,
      required: true,
    },
  },
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
