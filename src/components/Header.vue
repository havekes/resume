<template>
  <div class="flex items-end justify-between header">
    <div class="text-left">
      <div class="flex items-center mb-4">
        <h1 class="mr-4 text-2xl font-bold tracking-wider text-gray-800 uppercase ">{{ info.name }}</h1>
        <a v-if="info.linkedin" :href="info.linkedin" class="text-3xl text-gray-600 hover:text-gray-800 print-hidden">
          <FaIcon :icon="['fab', 'linkedin']" />
        </a>
      </div>
      <div>{{ info.phone }}</div>
      <div>
        <a :href="emailLink">{{ info.email }}</a>
      </div>
    </div>
    <div class="text-right">
      <div>{{ info.location }}</div>
      <div>
        <a :href="websiteLink">{{ info.website }}</a>
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
