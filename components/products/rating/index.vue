<template>
<div>
  <div class="flex my-6">
    <div v-for="star in stars" :key="star" @click="selectRating(star)">
      <span class="text-green-400" v-if="star <= selectedRating">
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400 shadow-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      </span>
      <span class="text-red-400" v-else>
        <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      </span>
      <input type="number" v-model="rating" hidden>
    </div>
    <div>
      <span class="text-md text-gray-400 ml-12">4.59</span>
    </div>
  </div>
  <div>
    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
        <label for="comment" class="sr-only">Your comment</label>
        <textarea id="comment" rows="3" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
      </div>
      <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
        <button
          @submit.prevent="submitReview"
          type="submit"
          class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          Post comment
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "index",
  data() {
    return {
      rating: 1,
      comment: '',
      productId: 1,
      stars: [1, 2, 3, 4, 5],
      selectedRating: 0
    };
  },
  methods: {
    ...mapActions('guests/products', ['reviewProduct', 'fetchProducts']),
    async submitReview() {
      // await this.reviewProduct({
      //   id: this.productId,
      //   data: {
      //     rating: this.rating,
      //     comment: this.comment,
      //   }
      // })
      console.log(this.rating)
    },
    selectRating(rating) {
      this.selectedRating = rating;
      this.rating = rating
    }
  },
}
</script>

<style scoped>

</style>
