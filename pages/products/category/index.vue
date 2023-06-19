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
  </div>
</template>

<script>
import CategoryContent from "@/components/products/Category-Content";
import {mapActions, mapGetters} from "vuex";
import {initFlowbite} from "flowbite";
export default {
  name: "index",
  components: {CategoryContent},
  layout: 'UserLayout',
  computed: {
    ...mapGetters('category', ['getCategory'])
  },
  async fetch() {
    await this.fetchCategory()
  },
  mounted() {
    initFlowbite()
  },
  methods: {
    ...mapActions('category', ['fetchCategory']),
    getImageUrl(image) {
      return `http://127.0.0.1:8000/category-images/${image}`;
    },
    findProductsBuId(id){
      alert(id)
    }
  }
}
</script>

<style scoped>

</style>
