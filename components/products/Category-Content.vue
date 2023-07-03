<template>
  <div class="flex flex-col items-center my-6">
    <div class="flex flex-col">
      <div >
        <ul class="flex flex-row items-center justify-center py-4 md:py-8 flex-wrap">
          <li v-for="item of data">
            <button
              @click="$emit('categoryButton',item.id)"
              id="mega-menu-icons-dropdown-button"
              data-dropdown-toggle="mega-menu-icons-dropdown"
              class="text-gray-900 border my-2 border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">
              {{ item.name }}
            </button>
            <div id="mega-menu-icons-dropdown" class="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
              <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                <ul class="space-y-4" aria-labelledby="mega-menu-icons-dropdown-button" v-for="subcategory of subcategories">
                  <li>
                    <button @click="$emit('subcategoryButton', subcategory.id)" class="flex my-2 items-center text-gray-500 dark:text-gray-400 group">
                      {{ subcategory.name }}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
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
    },
    subcategories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
