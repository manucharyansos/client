<template>
  <div>
    <div class="grid bg-white dark:bg-gray-700 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div
        class="mx-auto my-6 max-w-sm bg-white dark:bg-gray-700"
        v-for="(product, index) of getProducts"
        :key="index"
      >
        <product-content
          :image_url="getFirstImage(product)"
          :title="product.title"
          :description="product.description"
          :price="product.price"
          :average_rating="product.average_rating"
          @addToCart="addToCart(product.id)"
          :edit-product="product.id"
          button-name="Add"
        />
      </div>
    </div>
    <div class="flex flex-col md:items-end items-center m-8">
      <!-- Help text -->
      <span class="text-sm text-gray-700 dark:text-gray-400">
              Showing<span class="font-semibold text-gray-900 dark:text-white">{{ getCurrentPage }}</span>
              to
              <span class="font-semibold text-gray-900 dark:text-white">{{ getPerPage }}</span>
              of
              <span class="font-semibold text-gray-900 dark:text-white">{{ getTotal }}</span>
              Entries
            </span>
      <div class="flex mt-2 xs:mt-0">
        <div v-for="link of getLinks">
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
import {mapActions, mapGetters} from "vuex";
import ProductContent from "@/components/products/Product-Content";
import YourCart from "@/components/your-cart";
import {initFlowbite} from "flowbite";

export default {
  name: "index",
  components: {
    ProductContent,
    YourCart
  },
  layout: 'UserLayout',
  auth: 'guest',
  mounted() {
    initFlowbite()
  },
  async fetch() {
    await this.fetchProducts(1)
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
  },
  computed: {
    ...mapGetters('guests/products', [
      'getProducts',
      'getProduct',
      'getLastPage',
      'getPerPage',
      'getTotal',
      'getCurrentPage',
      'getLinks'
    ])
  },
}
</script>

<style scoped>

</style>
