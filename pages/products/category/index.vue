<template>
  <div>
    <div class="flex flex-col justify-center items-center ">
      <h1 class="mt-14 text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">Shop By Category</h1>
    </div>
    <template v-if="categories">
      <category-content
        :data="categories"
        :subcategories="subcategories"
        @categoryButton="findSubcategoriesBuId"
        @subcategoryButton="findProductsBuId"
      />
    </template>
    <div class="mx-12">
      <Pagination
        :total="total"
        :per-page="perPage"
        :links="links"
        :current-page="currentPage"
        @handleLinkClick="handleLinkClick"
      />
    </div>
  </div>
</template>

<script>
import CategoryContent from "@/components/products/Category-Content";
import {mapActions, mapGetters, mapState} from "vuex";
import {initFlowbite} from "flowbite";
import Pagination from "@/components/pagination";
export default {
  name: "index",
  components: {CategoryContent, Pagination},
  layout: 'UserLayout',
  computed: {
    ...mapState('guests/categories', [
      'categories',
      'lastPage',
      'perPage',
      'total',
      'currentPage',
      'links',
      'subcategories'
    ])
  },
  async fetch() {
    await this.fetchCategories(1)
  },
  mounted() {
    initFlowbite()
  },
  methods: {
    ...mapActions('guests/categories', ['fetchCategories', 'fetchSubCategoryById']),
    getImageUrl(image) {
      return `http://127.0.0.1:8000/category-images/${image}`;
    },
    findProductsBuId(id){
      this.$router.push(`/products/category/${id}`)
    },
    async findSubcategoriesBuId(id){
      await this.fetchSubCategoryById(id)
    },
    async handleLinkClick(link) {
      try {
        const url = new URL(link.url);
        const page = url.searchParams.get('page');
        await this.fetchCategories(page);
      } catch (error) {
        console.error(error);
        const defaultPage = 1;
        await this.fetchCategories(defaultPage);
      }
    },
  }
}
</script>

<style scoped>

</style>
