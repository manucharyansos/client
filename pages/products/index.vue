<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 h-full mx-auto flex flex-wrap mb-4">
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
      @addToCart="addToCart(product.id)"
      :edit-product="product.id"
      />
    </div>


    <div
      id="open-bag"
      class="fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-1/2 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-right-label">
      <button
        type="button"
        data-drawer-hide="open-bag"
        aria-controls="open-bag"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-4 right-5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Close menu</span>
      </button>

      <YourCart
        :products="getProduct"
        @deleteClick="deleteProduct"
        @checkout="checkout"
      />

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
    await this.fetchProducts()
  },
  methods: {
    ...mapActions('products', ['fetchProducts', 'fetchProduct', 'deleteProductFromCart']),
    getImageUrl(image) {
      return `http://127.0.0.1:8000/products-images/${image}`;
    },
    getFirstImage(product) {
      if (product.images.length > 0) {
        return `http://127.0.0.1:8000/products-images/${product.images[0].image_path}`;
      } else {
        return '/download.png';
      }
    },
    addToCart(id){
      this.fetchProduct(id)
    },
    deleteProduct(index){
      this.deleteProductFromCart(index)
    },
    checkout(){
      this.$router.push('/checkout' )
    }
  },
  computed: {
    ...mapGetters('products', ['getProducts', 'getProduct'])
  },
}
</script>

<style scoped>

</style>
