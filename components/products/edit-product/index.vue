<template>
  <section class="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
    <div v-if="isAlert" class="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
      <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
      </div>
    </div>
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4 my-6">
          <Breadcrumb/>
        </div>

        <notifications />

        <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
          <div class="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">

            <div class="w-full sm:w-8/12 mx-auto flex flex-col items-center">
              <img
                class="w-full mb-5 mx-auto"
                v-if="product_data.images"
                :src="`http://127.0.0.1:8000/storage/products-images/${product_data.images[0].image_path}`"
                alt="">
              <p class="text-sm text-gray-300">Roll over image to zoom in</p>
            </div>
          </div>
          <carousel-3d>
            <slide v-for="(image, index) of product_data.images" :index="index">
              <img :src="`http://127.0.0.1:8000/storage/products-images/${image.image_path}`" alt="Product Image">
            </slide>
          </carousel-3d>
        </div>
        <div class="w-full lg:w-1/2 px-4">
          <div class="max-w-md mb-6">
<!--            <span class="text-xs text-gray-400 tracking-wider">APPLE #3299803</span>-->
            <h2 class="mt-6 mb-4 text-2xl md:text-4xl lg:text-5xl font-heading font-medium">{{ product_data.title }}</h2>
            <p class="flex items-center mb-6">
              <span class="mr-2 text-sm text-blue-500 font-medium">$</span>
              <span class="text-3xl text-blue-500 font-medium">{{ product_data.price }}</span>
            </p>
            <p class="text-lg text-gray-400">{{ product_data.description }}</p>
          </div>
          <div class="flex mb-6 items-center">
            <div class="inline-flex mr-4">
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
                    <span class="text-md text-gray-400 ml-12">{{ product_data.average_rating }}</span>
                  </div>
                </div>
                <div>
                  <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                      <label for="comment" class="sr-only">Your comment</label>
                      <textarea
                        id="comment"
                        rows="3"
                        class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                        placeholder="Write a comment..."
                        required
                        v-model="comment"></textarea>
                    </div>
                    <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                      <button
                        @click="submitReview"
                        type="submit"
                        class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Post comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {{ averageRating }}
          </div>
          <div class="mb-6">
            <h4 class="mb-3 font-heading font-medium">
              <span>Color:</span>
              <span class="text-gray-400">Silver</span>
            </h4>
            <button class="inline-flex items-center justify-center p-1 rounded-full border border-gray-300">
              <div class="w-6 h-6 rounded-full bg-white"></div>
            </button>
            <button class="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
              <div class="w-6 h-6 rounded-full bg-orange-800"></div>
            </button>
            <button class="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
              <div class="w-6 h-6 rounded-full bg-blue-900"></div>
            </button>
            <button class="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
              <div class="w-6 h-6 rounded-full bg-yellow-500"></div>
            </button>
          </div>
          <div class="mb-10">
            <h4 class="mb-3 font-heading font-medium">Qty:</h4>
            <input class="w-24 px-3 py-2 text-center bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" type="text" placeholder="1">
          </div>
          <div class="flex flex-wrap -mx-2 mb-12">
            <div class="w-full md:w-2/3 px-2 mb-2 md:mb-0">
              <span @click="$emit('addToBag', product_data.id)" class="block cursor-pointer py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl">
              Add to bag
            </span>
            </div>
            <div class="w-full md:w-1/3 px-2">
              <a class="flex w-full py-4 px-2 items-center justify-center leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-white focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl" href="#">
                <span class="mr-2">Wishlist</span>
                <svg width="23" height="22" viewbox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.3235 20.1324L2.52488 10.8515C1.75232 10.0706 1.24237 9.06367 1.06728 7.97339C0.8922 6.88311 1.06086 5.76477 1.54936 4.7768V4.7768C1.91837 4.03089 2.45739 3.3843 3.12201 2.89033C3.78663 2.39635 4.55781 2.06911 5.37203 1.93558C6.18626 1.80205 7.0202 1.86605 7.80517 2.1223C8.59013 2.37855 9.30364 2.81972 9.88691 3.40946L11.3235 4.86204L12.7601 3.40946C13.3434 2.81972 14.0569 2.37855 14.8419 2.1223C15.6269 1.86605 16.4608 1.80205 17.275 1.93558C18.0892 2.06911 18.8604 2.39635 19.525 2.89033C20.1897 3.3843 20.7287 4.03089 21.0977 4.7768V4.7768C21.5862 5.76477 21.7549 6.88311 21.5798 7.97339C21.4047 9.06367 20.8947 10.0706 20.1222 10.8515L11.3235 20.1324Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 class="mb-6 font-heading font-medium">More information</h4>
            <button class="flex w-full pl-6 lg:pl-12 pr-6 py-4 mb-4 justify-between items-center leading-7 rounded-2xl border-2 border-blueGray-200 hover:border-blueGray-300">
              <h3 class="text-lg font-heading font-medium">Shipping &amp; returns</h3>
              <span>
              <svg width="12" height="8" viewbox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z" fill="black"></path>
              </svg>
            </span>
            </button>
            <button class="flex w-full pl-6 lg:pl-12 pr-6 py-4 justify-between items-center leading-7 rounded-2xl border-2 border-blueGray-200 hover:border-blueGray-300">
              <h3 class="text-lg font-heading font-medium">Product details</h3>
              <span>
              <svg width="12" height="8" viewbox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z" fill="black"></path>
              </svg>
            </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import Breadcrumb from "~/components/Breadcrumb";
import { Slider, SliderItem } from 'vue-easy-slider'
import Rating from "@/components/products/rating";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "index",
  data(){
    return {
      rating: 1,
      comment: '',
      stars: [1, 2, 3, 4, 5],
      selectedRating: 0,
      isAlert: false
    }
  },
  props: {
    product_data: {
      type: Object,
    }
  },
  components: {
    Breadcrumb,
    Slider,
    SliderItem,
    Rating
  },
  computed: {
    ...mapGetters('guests/products', ['getErrorMessages']),
    averageRating() {
      // this.product_data.reviews
    }
  },
  methods: {
    ...mapActions('guests/products', ['reviewProduct']),
    async submitReview() {
      const response = await this.$store.dispatch('guests/products/reviewProduct', {
        id: this.product_data.id,
        data: {
          rating: this.rating,
          comment: this.comment,
        }
      });
      if (response) {
        this.$notify({
          text: 'Thank you for your review. It has been submitted to the webmaster for approval.',
          duration: 3000,
          speed: 1000,
          position: 'center',
          type: 'success',
        });
      } else {
        this.$notify({
          text: this.getErrorMessages.comment[0],
          duration: 3000,
          speed: 1000,
          position: 'center',
          type: 'error',
        });
      }
    },
    selectRating(rating) {
      this.selectedRating = rating;
      this.rating = rating
    },
  }
}
</script>

<style scoped>
.active{
  background: darkgray;
}
</style>
