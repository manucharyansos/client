<template>
  <div>
    <div class="flex flex-col justify-center items-center ">
      <h1 class="mt-14 text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">Shop By Category</h1>
    </div>
    <template v-if="getCategory">
      <category-content
        :data="getCategory"
        @categoryButton="findProductsBuId"
      />
    </template>
    <div class="mx-12">
      <Pagination
        :total="getTotal"
        :per-page="getPerPage"
        :links="getLinks"
        :current-page="getCurrentPage"
        @handleLinkClick="handleLinkClick"
      />
    </div>
  </div>
</template>

<script>
import CategoryContent from "@/components/products/Category-Content";
import {mapActions, mapGetters} from "vuex";
import {initFlowbite} from "flowbite";
import Pagination from "@/components/pagination";
export default {
  name: "index",
  components: {CategoryContent, Pagination},
  layout: 'UserLayout',
  computed: {
    ...mapGetters('guestsCategories', [
      'getCategory',
      'getLastPage',
      'getPerPage',
      'getTotal',
      'getCurrentPage',
      'getLinks'
    ])
  },
  async fetch() {
    await this.fetchCategories(1)
  },
  mounted() {
    initFlowbite()
  },
  methods: {
    ...mapActions('guestsCategories', ['fetchCategories']),
    getImageUrl(image) {
      return `http://127.0.0.1:8000/category-images/${image}`;
    },
    findProductsBuId(id){
      this.$router.push(`/products/category/${id}`)
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
