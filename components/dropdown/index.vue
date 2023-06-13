<template>
  <div>
    <template v-for="item of data">
      <button
        type="button"
        class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        :aria-controls="item.dropId"
        :data-collapse-toggle="item.dropId"
      >
        <slot name="svg"></slot>
        <span class="flex-1 ml-3 text-left whitespace-nowrap">{{ item.name }}</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <ul :id="item.dropId" class="hidden py-2 space-y-2">
        <li v-for="drLink of item.openDropdown">
          <nuxt-link :to="drLink.linkTo" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{{ drLink.name }}</nuxt-link>
        </li>
      </ul>
    </template>

  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    data: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
