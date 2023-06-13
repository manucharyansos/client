<template>
  <div class="flex flex-col items-center my-6">
    <div class="flex flex-col">
      <div class="flex flex-row items-center justify-center py-4 md:py-8 flex-wrap" >
        <button @click="$emit('categoryButton',item.id)" v-for="item of data" type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">
          {{ item.name }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="image of data">
        <img
          class="h-40 md:h-64 w-40 md:w-64 rounded-lg object-cover object-center"
          :src="`http://127.0.0.1:8000/category-images/${image.image}`" alt="girl-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category-Content",
  props: {
    data: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
