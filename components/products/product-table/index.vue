<template>
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" class="p-4">Product</th>
      <th scope="col" class="p-4">Category</th>
      <th scope="col" class="p-4">Stock</th>
      <th scope="col" class="p-4">Rating</th>
      <th scope="col" class="p-4">Sales</th>
      <th scope="col" class="p-4">Revenue</th>
      <th scope="col" class="p-4">Last Update</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(product, index) of data" :key="index" class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
      <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div class="flex items-center mr-3">
          <img :src="getFirstImage(product)" alt="iMac Front Image" class="h-8 w-8 mr-3 object-cover object-center">
          {{ product.title }}
        </div>
      </th>
      <td class="px-4 py-3">
        <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">{{ product.subcategory_id }}</span>
      </td>
      <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div class="flex items-center">
          <template v-if="product.stock> 0">
            <div class="h-4 w-4 rounded-full inline-block mr-2 bg-green-700"></div>
            {{ product.stock }}
          </template>
          <div v-else class="h-4 w-4 rounded-full inline-block mr-2 bg-red-700"></div>

        </div>
      </td>
      <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div class="flex items-center">
          <div v-for="star in stars" :key="star">
          <span class="text-green-400" v-if="star <= product.average_rating">
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400 shadow-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          </span>
            <span class="text-red-400" v-else>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          </span>
          </div>
          <span
            v-if="product.average_rating"
            class="text-gray-500 dark:text-gray-400 ml-1">
            {{ product.average_rating}}
          </span>
        </div>
      </td>
      <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gray-400 mr-2" aria-hidden="true">
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
          1.6M
        </div>
      </td>
      <td class="px-4 py-3">$3.2M</td>
      <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div class="flex items-center space-x-4">
          <button
            type="button"
            data-drawer-target="drawer-update-product"
            data-drawer-show="drawer-update-product"
            aria-controls="drawer-update-product"
            class="py-2 px-3 flex items-center text-sm font-medium text-center text-blue-600 bg-white rounded-lg border border-blue-600 hover:bg-primary-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-gray-800 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            @click="$emit('editProduct', product)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 -ml-0.5 object-center object-cover" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
            </svg>
            Edit
          </button>
          <button
            type="button"
            data-drawer-target="drawer-read-product-advanced"
            data-drawer-show="drawer-read-product-advanced"
            aria-controls="drawer-read-product-advanced"
            class="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            @click="$emit('previewSelectedProduct', product)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-6 h-5 object-center object-cover mr-2 -ml-0.5">
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" />
            </svg>
            Preview
          </button>
          <button
            type="button"
            :data-modal-target="target"
            :data-modal-toggle="toggle"
            class="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            @click="$emit('removeProduct', product.id)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 -ml-0.5" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            Delete
          </button>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "index",
  props: {
    data: {
      type: Array
    },
    target: {
      type: String
    },
    toggle: {
      type: String
    }
  },
  data(){
    return {
      stars: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    getFirstImage(product) {
      if (product.images.length > 0) {
        return `http://127.0.0.1:8000/storage/products-images/${product.images[0].image_path}`;
      } else {
        return '/download.png';
      }
    },
  }
}
</script>

<style scoped>

</style>
