<template>
  <div class="mx-auto z-10 mt-20 w-full rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-md hover:shadow-lg">
    <img
      class="md:h-64 sm:h-80 md:w-64 sm:w-80 transform duration-300 hover:scale-105 object-cover object-center"
      :src="image_url"
      alt="Product Image"
    />
    <div class="p-4">
      <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
        {{title}}
      </h2>
      <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
        {{description}}
      </p>

      <div class="flex items-center cursor-pointer">
        <div v-for="star in stars" :key="star" @click="selectRating(star)">
          <p class="text-green-400" v-if="star <= selectedRating">
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          </p>
          <p class="text-red-400" v-else>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          </p>
        </div>
      </div>

      <div class="flex items-center">
        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
          {{price}} $
        </p>
        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
          {{sale}}
        </p>
        <p class="ml-auto text-base font-medium text-green-500">{{saleTo}}</p>
      </div>
      <button
        type="button"
        class="text-white text-sm bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        @click="$emit('addToCart')">
        Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product-Content",
  props: {
    image_url: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    price: {
      type: Number
    },
    sale: {
      type: String
    },
    saleTo: {
      type: String
    }
  },
  data() {
    return {
      selectedRating: 0,
      stars: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    selectRating(rating) {
      this.selectedRating = rating;
    }
  }
}
</script>

<style scoped>

</style>
