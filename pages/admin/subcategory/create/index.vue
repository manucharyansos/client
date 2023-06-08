<template>
  <div class="container mx-auto dark:bg-gray-700">
    <div class="flex row w-full">
      <div class="w-1/2">
        <div class="relative my-12 mx-10 ">
          <div class="shadow-xl">
            <label for="category" class="sr-only">Underline select</label>
            <select
              v-model="category.category_id"
              id="category"
              class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>Choose a country</option>
              <option
                v-for="category of getCategory"
                :key="category.id"
                :value="category.id">
                {{category.name}}
              </option>
            </select>
          </div>
<!--          <p-->
<!--            class="mt-2 text-sm text-red-600 dark:text-red-500"-->
<!--            v-if="errors.category_id"-->
<!--            v-for="err of errors.category_id"-->
<!--          >-->
<!--            {{ err }}-->
<!--          </p>-->
        </div>

        <div class="relative mx-10 my-12 border-gray-600 shadow-xl">
          <input
            type="text"
            id="title"
            class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            v-model="category.name"
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
            v-model="category.description"
          />
          <label
            for="description"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Description</label>
        </div>
      </div>
      <div class="w-1/2">
        <div class="flex items-center justify-center md:w-1/2 w-full mx-auto">
          <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              @change="handleFileUpload"
            />
            <img class="w-full h-64 rounded-xl" :src="category.imageUrl" alt="Selected Image">
          </label>
        </div>
      </div>
    </div>

    <button @click="create" class="relative mx-10 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Create New Product
      </span>
    </button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "index",
  layout: 'AdminLayout',
  middleware: 'admin',
  data (){
    return {
      isImage: false,
      category: {
        name: '',
        description: '',
        imageUrl: '',
        imageFile: [],
        category_id: ''
      }
    }
  },
  async fetch() {
    await this.fetchCategory()
  },
  computed: {
    ...mapGetters('category', ['getCategory'])
  },
  methods :{
    ...mapActions('category', ['createSubcategory', 'fetchCategory']),
    handleFileUpload(event) {
      this.category.imageFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.category.imageUrl = reader.result;
      };
      this.isImage = true
      reader.readAsDataURL(this.category.imageFile);
    },
    async create(){
      const formData = new FormData();
      formData.append('name', this.category.name);
      formData.append('description', this.category.description);
      formData.append('category_id', this.category.category_id);
      formData.append('image', this.category.imageFile);
      const response = await this.createSubcategory(formData)
      if (response) {
        await this.$router.push('/admin/subcategory');
      }
    }

  }
}
</script>

<style scoped>

</style>
