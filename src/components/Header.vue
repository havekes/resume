<template>
  <div class="header flex justify-between items-end">
    <div class="text-left">
      <div class="uppercase font-bold text-2xl text-gray-800 tracking-wider mb-4">{{ info.name }}</div>
      <div>{{ info.phone }}</div>
      <div>
        <a :href="emailLink">{{ info.email }}</a>
      </div>
    </div>
    <div class="text-right">
      <div>{{ info.address }}</div>
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

<style></style>
