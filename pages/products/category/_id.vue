<template>
  <div class="mx-12">
    <div class="py-16">
      <Breadcrumb/>
    </div>
    <div>
      <div class="grid md:grid-cols-2">
        <div class="flex flex-col items-center justify-center">
          <h2 class="capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-heading p-7 text-center w-full">
            # {{ subcategories.name }}
          </h2>
          <p v-if="subcategories.description">
            {{ subcategories.description }}
          </p>
        </div>
        <div class="flex items-center justify-center">
          <img v-if="subcategories.image" class="object-cover object-center w-full h-full m-8" :src="`http://127.0.0.1:8000/category-images/${subcategories.image}`" alt="">
          <img v-else src="/download.jpeg" alt="">
        </div>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 h-full mx-auto flex flex-wrap mb-4">
        <div
          class="mx-auto my-6 max-w-sm bg-white dark:bg-gray-700"
          v-for="(product, index) of subcategories.products"
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
  data(){
    return {
      subcategories: []
    }
  },
  async fetch(){
    await this.fetchSubcategoryWithProducts(this.$route.params.id)
  },
  created() {
    this.subcategories = this.getSubcategoryWithProducts
  },
  computed: {
    ...mapGetters('guests/categories', ['getSubcategoryWithProducts'])
  },
  methods: {
    ...mapActions('guests/categories', ['fetchSubcategoryWithProducts']),
    getFirstImage(product) {
        if (product.images.length > 0) {
          return `http://127.0.0.1:8000/products-images/${product.images[0].image_path}`;
        } else {
          return '/download.png';
      }
    },
    addToCart(){}
  },
}
</script>

<style scoped>

</style>
