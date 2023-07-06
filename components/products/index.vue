<template>
  <div class="grid bg-white dark:bg-gray-700 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    <div v-for="item of data" class="box-border overflow-hidden flex cursor-pointer flex-col items-center transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product mx-2">
      <div class="w-[calc(100%-2rem)] flex mb-3 md:mb-3.5" v-if="item.images">
        <nuxt-link class="relative flex w-full h-60 overflow-hidden" :to="`/products/${item.id}`">
          <img alt="" :src="`http://127.0.0.1:8000/storage/products-images/${item.images[0].image_path}`"
               class="object-cover object-center w-full h-full">
          <div class="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
            <button class="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </nuxt-link>
      </div>
      <div class="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
        <div class="flex flex-row md:items-center mb-0.5 items-start">
          <h3 class="font-semibold text-sm mb-1 md:mb-0 ltr:mr-2 rtl:ml-2 ltr:md:mr-3 rtl:md:ml-3 text-black/70">Ratings</h3>
          <div v-for="star in stars" :key="star">
            <span class="text-green-400" v-if="star <= item.average_rating">
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400 shadow-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </span>
              <span class="text-red-400" v-else>
              <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </span>
          </div>
        </div>
        <h2 class="truncate mb-1 text-sm md:text-base font-bold text-heading">{{ item.title }}</h2>
        <div class="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5 text-heading">
          <span class="inline-block font-bold text-gray-900 dark:text-amber-50 text-lg">$ {{ item.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    editProduct: {
      type: Number
    }
  },
  data(){
    return {
      stars: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style scoped>

</style>
