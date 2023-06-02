<template>
  <div>
    <div class="flex flex-col justify-center items-center ">
      <h1 class="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">Shop By Category</h1>
    </div>
    <template v-if="getCategory" v-for="category of getCategory">
      <category-content
        :category_images="getImageUrl(category.image)"
        :show_category="category.name"
      />
    </template>
  </div>
</template>

<script>
import CategoryContent from "@/components/products/Category-Content";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "index",
  components: {CategoryContent},
  layout: 'UserLayout',
  computed: {
    ...mapGetters('category', ['getCategory'])
  },
  mounted() {
    this.fetchCategory()
  },
  methods: {
    ...mapActions('category', ['fetchCategory']),
    getImageUrl(image) {
      return `http://127.0.0.1:8000/category-images/${image}`;
    },
  }
}
</script>

<style scoped>

</style>
