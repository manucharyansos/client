<template>
  <div>
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed bg-gray-100 dark:bg-gray-600 z-50 hidden w-full p-4 overflow-x-hidden md:inset-0 h-screen">
      <div class=" flex-col gap-3 w-1/2 bg-gray-600 dark:bg-gray-300 mx-auto p-10 overflow-y-auto my-12">
        <div class="flex flex-col my-6 gap-4 bg-gray-700 dark:bg-gray-200 p-4 w-3/4 mx-auto" v-for="review of product.reviews">
          <!-- Profile and Rating -->
          <div class="flex justify justify-between">
            <div class="flex gap-2">
              <div class="w-7 h-7 text-center rounded-full bg-red-500">
                <img :src="`http://127.0.0.1:8000/user-images/${ review.user.image }`" alt="">
              </div>
              <span class="text-white dark:text-gray-800">{{ review.user.name }}</span>
            </div>
            <div class="flex p-1 gap-1 text-orange-300">
              <div v-for="star in stars" :key="star">
                <span class="text-green-400" v-if="star <= review.rating">
                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400 shadow-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </span>
                <span class="text-red-400" v-else>
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </span>
              </div>
            </div>
          </div>

          <div class="text-white dark:text-gray-900">
            {{ review.comment }}
          </div>

          <div class="flex justify-between">
            <span>{{ review.created_at}}</span>
            <button class="p-1 px-2 bg-gray-900 hover:bg-gray-950 border border-gray-950 bg-opacity-60">
<!--              <ion-icon name="share-outline"></ion-icon> Share-->
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    product: {
      type: Object
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
