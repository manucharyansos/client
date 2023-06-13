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
      @addToCart="addToCart(index)"
      />
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ProductContent from "@/components/products/Product-Content";

export default {
  name: "index",
  components: {ProductContent},
  layout: 'UserLayout',
  async fetch() {
    await this.fetchProducts()
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
    // getImageUrl(image) {
    //   return `http://127.0.0.1:8000/products-images/${image}`;
    // },
    getFirstImage(product) {
      if (product.images.length > 0) {
        return `http://127.0.0.1:8000/products-images/${product.images[0].image_path}`;
      } else {
        return '/download.png';
      }
    },
    addToCart(index){
      alert(index)
    }
  },
  computed: {
    ...mapGetters('products', ['getProducts'])
  },
}
</script>

<style scoped>

</style>
