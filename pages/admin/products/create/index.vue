<template>
  <CreateProduct
    :image-url="product.imageUrl"
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
        v-model="product.title">
      <p
        class="mt-2 text-sm text-red-600 dark:text-red-500"
        v-if="errors.title"
        v-for="err of errors.title"
      >
        {{ err }}
      </p>
    </template>
    <template v-slot:select_subcategory>
      <select
        id="category"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        v-model="product.subcategory_id"
      >
        <option selected="">Select category</option>
        <option
          v-for="subcategory of getSubcategories"
          :key="subcategory.id"
          :value="subcategory.id">
          {{subcategory.name}}
        </option>
      </select>
      <p
        class="mt-2 text-sm text-red-600 dark:text-red-500"
        v-if="errors.subcategory_id"
        v-for="err of errors.subcategory_id"
      >
        {{ err }}
      </p>
    </template>
    <template v-slot:price>
      <input
        type="number"
        name="price"
        id="price"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder="$2999"
        required=""
        v-model="product.price"
      >
      <p
        class="mt-2 text-sm text-red-600 dark:text-red-500"
        v-if="errors.price"
        v-for="err of errors.price"
      >
        {{ err }}
      </p>
    </template>
    <template v-slot:stock>
      <input
        type="number"
        name="stock"
        id="stock"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder="Stock"
        required=""
        v-model="product.stock"
      >
      <p
        class="mt-2 text-sm text-red-600 dark:text-red-500"
        v-if="errors.stock"
        v-for="err of errors.stock"
      >
        {{ err }}
      </p>
    </template>
    <template v-slot:description>
      <textarea
        id="description"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"
        v-model="product.description"
      >
                </textarea>
      <p
        class="mt-2 text-sm text-red-600 dark:text-red-500"
        v-if="errors.description"
        v-for="err of errors.description"
      >
        {{ err }}
      </p>
    </template>
    <template v-slot:image-input>
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
  </CreateProduct>
</template>

<script>
import CreateProduct from "@/components/products/create-product";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "index",
  layout: 'AdminLayout',
  middleware: 'admin',
  components: {CreateProduct},
  data(){
    return {
      product: {
        title: '',
        description: '',
        price: '',
        stock: '',
        imageUrl: '',
        imageFiles: [],
        subcategory_id: '',
        selectedImage: ''
      },
      errors: {}
    }
  },
  computed: {
    ...mapGetters('admin/categories', ['getCategories']),
    ...mapGetters('admin/categories/subcategories', ['getSubcategories']),
    ...mapGetters('admin/products', ['getErrorMessages'])
  },
  methods: {
    ...mapActions('admin/products', ['createProduct']),
    ...mapActions('admin/categories', ['fetchCategories']),
    ...mapActions('admin/categories/subcategories', ['fetchSubCategories']),
    handleFileUpload(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        const imageFile = files[i];
        reader.onload = () => {
          this.product.imageUrl = reader.result;
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
      formData.append('stock', this.product.stock);
      formData.append('subcategory_id', this.product.subcategory_id);

      this.product.imageFiles.forEach((file) => {
        formData.append('images[]', file);
      });
      const response = await this.createProduct(formData);
      if (response) {
        await this.$router.push('/admin/products');
      }else{
        this.errors = this.getErrorMessages
      }
    },
  },
  mounted() {
    this.fetchSubCategories()
  }
}
</script>

<style scoped>

</style>
