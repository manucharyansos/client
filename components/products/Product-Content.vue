<template>
  <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img
      class="h-48 w-full object-cover object-center"
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
  }
}
</script>

<style scoped>

</style>
