<template>
  <div class="flex flex-col md:items-end items-center m-4">
    <!-- Help text -->
    <span class="text-sm text-gray-700 dark:text-gray-400">
      Showing<span class="font-semibold text-gray-900 dark:text-white">{{ currentPage }}</span>
      to
      <span class="font-semibold text-gray-900 dark:text-white">{{ perPage }}</span>
      of
      <span class="font-semibold text-gray-900 dark:text-white">{{ total }}</span>
      Entries
    </span>
    <div class="flex mt-2 xs:mt-0">
      <div v-for="link of links">
        <button
          @click="$emit('handleLinkClick', link)"
          :class="[link.active ? 'active' : '']"
          class="inline-flex items-center mx-0.5 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span v-html="link.label"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    currentPage: { type: Number},
    perPage: { type: Number},
    total: { type: Number},
    links: { type: Array},
  }
}
</script>

<style scoped>
.active{
  background: darkgray;
}
</style>
