<template>
  <div class="container m-2 mx-auto">
    <div class="flex row w-full">
      <div class="w-1/2">
        <div class="relative my-12 mx-10 shadow-xl">
          <label for="category" class="sr-only">Underline select</label>
          <select
            v-model="product.category_id"
            id="category"
            class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            v-for="category of getCategory"
            :key="category.id"
          >
            <option selected>Choose a country</option>
            <option :value="category.id">{{category.name}}</option>
          </select>
        </div>

        <div class="relative mx-10 my-12 border-gray-600 shadow-xl">
          <input
            type="text"
            id="title"
            class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            v-model="product.title"
          />
          <label
            for="title"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Title</label>
        </div>

        <div class="relative mx-10 my-12 border-gray-600 rounded-2xl shadow-2xl">
          <input
            type="text"
            id="description"
            class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            v-model="product.description"
          />
          <label
            for="description"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Description</label>
        </div>

        <div class="relative mx-10 my-12 border-gray-600 rounded-2xl shadow-2xl">
          <input
            type="number"
            id="price"
            class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            v-model="product.price"
          />
          <label
            for="price"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Price</label>
        </div>
      </div>
      <div class="w-1/2">
        <div class="flex items-center justify-center md:w-1/2 w-full">
          <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              multiple
              @change="handleFileUpload"
            />
            <img :src="product.imageUrl" alt="Selected Image">
          </label>
        </div>
      </div>
    </div>

    <button @click="create" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Create New Product
      </span>
    </button>

  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "Index-Product",
  middleware: 'admin',
  layout: 'AdminLayout',
  data(){
    return {
      product: {
        title: '',
        description: '',
        price: '',
        imageUrl: '',
        imageFiles: [],
        category_id: ''
      }
    }
  },
  computed: {
    ...mapGetters('category', ['getCategory'])
  },
  methods: {
    ...mapActions('products', ['createProduct']),
    ...mapActions('category', ['fetchCategory']),
    handleFileUpload(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        const imageFile = files[i];
        reader.onload = () => {
          imageFile.imageUrl = reader.result;
        };
        reader.readAsDataURL(imageFile);
        this.product.imageFiles.push(imageFile);
      }
    },
    async create() {
      const formData = new FormData();
      formData.append('title', this.product.title);
      formData.append('description', this.product.description);
      formData.append('price', this.product.price);
      formData.append('category_id', this.product.category_id);

      // Append each image file individually
      this.product.imageFiles.forEach((file) => {
        formData.append('images[]', file);
      });

      const response = await this.createProduct(formData);
      if (response) {
        await this.$router.push('/admin');
      }
    },
  },
  mounted() {
    this.fetchCategory()
  }
}
</script>

<style scoped>

</style>
