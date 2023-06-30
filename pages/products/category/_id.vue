<template>
  <div class="mt-28">
    <div class="mx-16 my-14">
      <Breadcrumb/>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 h-full mx-auto flex flex-wrap mb-4">
      <div
        class="mx-auto my-6 max-w-sm bg-white dark:bg-gray-700"
        v-for="(product, index) of getCategoryWithProducts.products"
        :key="index"
      >
        <ProductContent
          :image_url="getFirstImage(product)"
          :title="product.title"
          :description="product.description"
          :price="product.price"
          @addToCart="addToCart(product.id)"
          :edit-product="product.id"
          button-name="Add"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductContent from "@/components/products/Product-Content";
import Breadcrumb from "@/components/Breadcrumb";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "category-id",
  layout: 'UserLayout',
  components: {
    ProductContent,
    Breadcrumb
  },
  async fetch(){
    await this.fetchCategoryWithProducts(this.$route.params.id)
  },
  computed: {
    ...mapGetters('guestsCategories', ['getCategoryWithProducts'])
  },
  methods: {
    ...mapActions('guestsCategories', ['fetchCategoryWithProducts']),
    getFirstImage(product) {
        if (product.images.length > 0) {
          return `http://127.0.0.1:8000/products-images/${product.images[0].image_path}`;
        } else {
          return '/download.png';
      }
    },
    addToCart(){}
  },
  mounted() {
    console.log(this.getCategoryWithProducts)
  }
}
</script>

<style scoped>

</style>
