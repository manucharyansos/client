<template>
  <div>
    <CreateCategory
      :image-url="category.imageUrl"
      @create="create"
    >
      <template v-slot:name>
        <input
          type="text"
          name="name"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Type product name"
          required=""
          v-model="category.name">
        <p
          class="mt-2 text-sm text-red-600 dark:text-red-500"
          v-if="errors.name"
          v-for="err of errors.name"
        >
          {{ err }}
        </p>
      </template>
      <template v-slot:description>
        <input
          type="text"
          name="description"
          id="price"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Description"
          required=""
          v-model="category.description"
        >
        <p
          class="mt-2 text-sm text-red-600 dark:text-red-500"
          v-if="errors.description"
          v-for="err of errors.description"
        >
          {{ err }}
        </p>
      </template>
      <template v-slot:image>
        <input
          id="dropzone-file"
          type="file"
          class="hidden"
          multiple
          @change="handleFileUpload"
        >
      </template>
      <template v-slot:img_err>
        <p
          class="mx-auto mt-2 text-sm text-red-600 dark:text-red-500"
          v-if="errors.images"
          v-for="err of errors.images"
        >
          {{ err }}
        </p>
      </template>
    </CreateCategory>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CreateCategory from "@/components/categories/categories-table/create-category";
export default {
  name: "index",
  layout: 'AdminLayout',
  middleware: 'admin',
  components: {CreateCategory},
  data (){
    return {
      isImage: false,
      category: {
        name: '',
        description: '',
        imageUrl: '',
        imageFile: [],
      },
      errors: {}
    }
  },
  computed: {
    ...mapGetters('category', ['getErrorMessage'])
  },
  methods :{
    ...mapActions('category', ['createCategory']),
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
      formData.append('image', this.category.imageFile);
      const response = await this.createCategory(formData)
      if (response) {
        await this.$router.push('/admin/categories');
      }
      else{
        this.errors = this.getErrorMessage
      }
    }

  }
}
</script>

<style scoped>

</style>
