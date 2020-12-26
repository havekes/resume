<template>
  <div class="mb-4 experience">
    <div class="flex items-center">
      <h3>{{ title }}</h3>
      <div class="flex-1 mx-2 border-b md:mx-4"></div>
      <h3 class="text-right">{{ date }}</h3>
    </div>
    <div class="my-2 italic" v-if="description">{{ description }}</div>
    <slot></slot>
    <a v-if="certificate" :href="certificate" class="flex items-center">
      <svg
        class="inline w-5 h-5 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path
          fill="#fff"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
      <slot name="certificate"></slot>
    </a>
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
    certificate: {
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
