<template>
  <div>
    <div class="relative flex w-full h-80 overflow-hidden group">
      <nuxt-link class="relative flex w-full h-full mx-2 overflow-hidden" :to="`/products/${editProduct}`">
        <img class="object-cover object-center w-full h-full" :src="image_url" alt="product image" />
      </nuxt-link>
      <div class="hidden absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0 group-hover:flex">
        <button
          class="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>

    <div class="mt-4 px-5 pb-5">
      <div class="flex items-center mt-2.5 mb-5">
        <div v-for="star in stars" :key="star">
          <span class="text-green-400" v-if="star <= average_rating">
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400 shadow-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          </span>
          <span class="text-red-400" v-else>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          </span>
        </div>
        <span v-if="average_rating" class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
          {{ average_rating }}
        </span>
      </div>
      <a href="#">
        <h5 class="text-xl tracking-tight text-slate-900 dark:text-white">{{ title }}</h5>
      </a>
      <div class="flex flex-row items-center justify-between">
        <div class=" flex items-center justify-between">
          <p>
            <span class="text-3xl font-bold text-slate-900 dark:text-white">$ {{ price }}</span>
            <!--          <span class="text-sm text-slate-900 line-through">$34534</span>-->
          </p>
        </div>
<!--        <button @click="$emit('addToCart')" class="flex items-center justify-center bg-gray-900 dark:bg-white px-2 py-1 text-sm text-white dark:text-gray-800 transition hover:bg-gray-700">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">-->
<!--            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />-->
<!--          </svg>-->
<!--          {{buttonName}}-->
<!--        </button>-->
      </div>
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
      type: String
    },
    sale: {
      type: String
    },
    saleTo: {
      type: String
    },
    buttonName: {
      type: String
    },
    editProduct: {
      type: Number
    },
    average_rating: {
      type: String,
      default: () => ''
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
  },
  mounted() {
    console.log(typeof (this.average_rating))
  }
}
</script>

<style scoped>

</style>
