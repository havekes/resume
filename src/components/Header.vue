<template>
  <div class="flex items-end text-gray-100 bg-gray-500 header">
    <div class="container flex items-center px-16 m-auto">
      <div class="p-2 mr-8 -my-4 bg-gray-100 rounded-full print-hidden">
        <img v-if="info.photo" :src="info.photo" class="w-40 h-40 rounded-full" />
      </div>

      <div class="flex-1">
        <div class="flex items-center mb-2">
          <h1
            class="flex-1 mr-4 text-2xl font-semibold tracking-widest text-white uppercase name"
          >{{ info.name }}</h1>
          <a
            v-if="info.linkedin"
            :href="info.linkedin"
            class="mr-4 text-3xl text-gray-200 hover:text-white print-hidden"
          >
            <FaIcon :icon="['fab', 'linkedin']" />
          </a>
          <a
            v-if="info.github"
            :href="info.github"
            class="text-3xl text-gray-200 hover:text-white print-hidden"
          >
            <FaIcon :icon="['fab', 'github']" />
          </a>
        </div>
        <div class="flex mb-2">
          <div class="flex-1">
            <p class="font-semibold">{{ info.phone }}</p>
            <p>
              <a :href="emailLink">{{ info.email }}</a>
            </p>
          </div>
          <div>
            <p class="font-semibold">{{ info.location }}</p>
            <p>
              <a :href="websiteLink">{{ info.website }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  computed: {
    websiteLink() {
      return 'https://' + this.info.website
    },
    emailLink() {
      return 'mailto://' + this.info.email
    },
  },
}
</script>

<style scoped>
@media print {
  .header {
    @apply bg-transparent text-black;
  }
  .name {
    @apply text-gray-800;
  }
}
</style>
