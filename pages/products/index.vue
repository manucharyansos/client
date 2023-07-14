<template>
  <div>
    <div v-if="isLoading" class="fixed w-screen h-screen z-50 bg-gray-100 dark:bg-gray-700 opacity-100 flex items-center justify-center">
      <div class=" mx-auto my-auto" role="status">
        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 h-full mx-auto flex flex-wrap mb-4">
      <div
        class="mx-auto my-6 max-w-sm bg-white dark:bg-gray-700"
        v-for="(product, index) of products"
        :key="index"
      >
        <ProductContent
          :image_url="getFirstImage(product)"
          :title="product.title"
          :description="product.description"
          :price="product.price"
          :edit-product="product.id"
          :average_rating="product.average_rating"
        />
      </div>
    </div>
    <div class="flex flex-col md:items-end items-center m-8">
      <!-- Help text -->
      <span class="text-sm text-gray-700 dark:text-gray-400">
              Showing<span class="font-semibold text-gray-900 dark:text-white">{{ currentPage }}</span>
              to
              <span class="font-semibold text-gray-900 dark:text-white">{{ perPage }}</span>
              of
              <span class="font-semibold text-gray-900 dark:text-white">{{ total }}</span>
              Entries
            </span>
      <div class="flex mt-2 xs:mt-0">
        <div v-for="link of links">
          <button
            @click="handleLinkClick(link)"
            :class="[link.active ? 'active' : '']"
            class="inline-flex items-center mx-0.5 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span v-html="link.label"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Products from "~/components/products/index.vue";
import YourCart from "@/components/your-cart";
import {initFlowbite} from "flowbite";
import ProductContent from "@/components/products/Product-Content";

export default {
  name: "index",
  components: {
    Products,
    YourCart,
    ProductContent
  },
  layout: 'UserLayout',
  auth: 'guest',
  data(){
    return {
      isLoading: true
    }
  },
  computed: {
    ...mapState('guests/products', [
      'products',
      'product',
      'lastPage',
      'perPage',
      'total',
      'currentPage',
      'links'
    ])
  },
  mounted() {
    initFlowbite()
  },
  async fetch() {
    await this.fetchProducts(1)
    this.isLoading = false
  },
  methods: {
    ...mapActions('guests/products', ['fetchProducts', 'fetchProduct']),
    getImageUrl(image) {
      return `http://127.0.0.1:8000/storage/products-images/${image}`;
    },
    getFirstImage(product) {
      if (product.images.length > 0) {
        return `http://127.0.0.1:8000/storage/products-images/${product.images[0].image_path}`;
      } else {
        return '/download.png';
      }
    },
    addToCart(id){
      this.fetchProduct(id)
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
    wishlistButton(){}
  },
}
</script>

<style scoped>
.active{
  background: #545050;
}
</style>
