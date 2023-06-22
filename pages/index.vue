<template>
  <div>
<!--    <section class="bg-white dark:bg-gray-900">-->
<!--      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">-->
<!--        <div class="mr-auto place-self-center lg:col-span-7">-->
<!--          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>-->
<!--          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>-->
<!--          <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">-->
<!--            Get started-->
<!--            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>-->
<!--          </a>-->
<!--          <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">-->
<!--            Speak to Sales-->
<!--          </a>-->
<!--        </div>-->
<!--        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">-->
<!--          <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup">-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

    <slider class="mt-16 z-20" animation="fade" height="500px">
      <slider-item
        v-for="(i, index) in list"
        :key="index"
        :style="i"
      >
        <img class="w-full h-full object-cover object-center" :src="i.backgroundImage" alt="">
      </slider-item>
    </slider>


    <carousel-3d >
      <slide v-for="(category, index) of getCategory" :index="index">
        <img :src="`http://127.0.0.1:8000/category-images/${category.image}`" alt="">
      </slide>
    </carousel-3d>


<!--    <carousel>-->

<!--      <img src="/slide-2.jpg" alt="">-->

<!--      <img src="/slide-1.jpeg" alt="">-->

<!--      <img src="/slide-3.jpg" alt="">-->

<!--      <img src="/slide-1.jpeg" alt="">-->

<!--    </carousel>-->

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import { Slider, SliderItem } from 'vue-easy-slider'
// import carousel from 'vue-owl-carousel'

export default {
  name: 'IndexPage',
  layout: 'UserLayout',
  auth: 'guest',
  async fetch() {
    await this.fetchProducts()
    await this.fetchCategory()
  },
  components: {
    Slider,
    SliderItem,
    // carousel
  },
  data(){
    return {
      categories: [],
      list: [
        { backgroundImage: '/slide-1.jpeg' },
        { backgroundImage: '/slide-2.jpg' },
        { backgroundImage: '/slide-3.jpg' },
      ],
    }
  },
  mounted() {
  },
  computed: {
    ...mapGetters('category', ['getCategory'])
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
    ...mapActions('category', ['fetchCategory'])
  }
}
</script>
<style scoped>
.owl-item{
  width: auto;
}
</style>
