<template>
  <div>
    <div class="fixed w-screen h-screen z-50 bg-gray-300 flex items-center justify-center" v-if="isLoading">
      <div class=" mx-auto my-auto" role="status">
        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>


    <slider class="mt-16 z-20" animation="fade" height="500px" v-if="!isLoading">
      <slider-item
        v-for="(i, index) in list"
        :key="index"
        :style="i"
      >
        <img class="w-full h-full object-cover object-center" :src="i.backgroundImage" alt="">
      </slider-item>
    </slider>


    <div class="flex items-start flex-col p-20 h-full">
      <h3 class="text-lg md:text-2xl lg:text-3xl 3xl:text-4xl xl:leading-10 font-bold text-gray-600 dark:text-white my-6">Browse Categories</h3>
      <carousel-3d
        style="margin: 0"
        v-if="!isLoading"
        :disable3d="true"
        :space="285"
        :width="270"
        :clickable="false"
        :controls-visible="true"
        :autoplay="true"
        :autoplay-timeout="3000"
        :display="5"
      >
        <slide
          v-for="(category, index) of getCategory"
          :index="index"
          style="border: none; background-color: white;"
        >
          <figure class="bg-white dark:bg-gray-700">
            <div class="h-56 overflow-hidden">
              <img class="h-full w-full hover:scale-125 transition duration-500 object-cover object-center cursor-pointer" :src="`http://127.0.0.1:8000/category-images/${category.image}`" alt="">
            </div>
            <div class="flex items-center justify-center mt-6">
              <h4 class="text-gray-600 dark:text-white text-sm md:text-base font-extralight	 xl:text-lg font-semibold capitalize cursor-pointer">{{category.name}}</h4>
            </div>
          </figure>
        </slide>
      </carousel-3d>
    </div>


    <div class="new_arrivals items-center flex flex-col p-20 h-full">
      <h3 class="text-lg mr-auto md:text-2xl lg:text-3xl 3xl:text-4xl xl:leading-10 font-bold text-gray-600 dark:text-white my-6">New Arrivals</h3>

      <Products
        :data="getProducts"
      />

      <Pagination
        :current-page="getCurrentPage"
        :links="getLinks"
        :per-page="getPerPage"
        :total="getTotal"
        @handleLinkClick="handleLinkClick"
      />
    </div>

    <div class="h-80 mb-7 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-[75px]">
      <div class="md:grid md:grid-cols-3 md:gap-2 xl:gap-1.5 relative">
        <div class="mx-auto col-span-2">
          <a class="h-full group flex justify-center relative overflow-hidden" href="/#">
            <span  class="box-border inline overflow-hidden h-80">
              <img alt="" aria-hidden="true" src="/banner-3.webp"  class="max-w-full m-0 p-0">
            </span>
          </a>
        </div>
        <div class="mx-auto col-span-1">
          <a class="group flex justify-center relative overflow-hidden" href="/#">
            <span class="box-border inline overflow-hidden h-80">
              <img class="max-w-full m-0 p-0" alt="" aria-hidden="true" src="/banner-4.webp">
            </span>
          </a>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import { Slider, SliderItem } from 'vue-easy-slider'
import Products from "@/components/products";
import Pagination from "@/components/pagination";

export default {
  name: 'IndexPage',
  layout: 'UserLayout',
  auth: 'guest',
  async serverPrefetch({commit}) {
    await Promise.all([
      await this.fetchProducts({ commit }),
    ])
  },
  async fetch(){
    await this.fetchCategories(1)
  },
  components: {
    Slider,
    SliderItem,
    Products,
    Pagination
  },
  data(){
    return {
      categories: [],
      list: [
        { backgroundImage: '/slide-1.jpeg' },
        { backgroundImage: '/slide-2.jpg' },
        { backgroundImage: '/slide-3.jpg' },
      ],
      isLoading: true
    }
  },
  mounted() {
    this.loadingControl()
  },
  computed: {
    ...mapGetters('guests/categories', ['getCategory']),
    ...mapGetters('guests/products', [
      'getProducts',
      'getLastPage',
      'getPerPage',
      'getTotal',
      'getCurrentPage',
      'getLinks'
    ])
  },
  methods: {
    ...mapActions('guests/products', ['fetchProducts']),
    ...mapActions('guests/categories', ['fetchCategories']),
    loadingControl(){
      if (this.getProducts){
        this.isLoading = false
      }
    },
    async handleLinkClick(link) {
      try {
        const url = new URL(link.url);
        const page = url.searchParams.get('page');
        await this.fetchProducts(page);
      } catch (error) {
        console.error(error);
        const defaultPage = 1;
        await this.fetchProducts(defaultPage);
      }
    },
  }
}
</script>
<style scoped>
carousel-3d a{
  color: red!important;
  background: #000!important;
}
</style>
