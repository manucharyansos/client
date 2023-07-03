<template>
  <div class="flex flex-col dark:bg-gray-700 ">
   <div class="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

     <div class="bg-gradient-to-r from-blue-300 via-40%-blue to-indigo-500 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       <div class="flex items-center justify-between">
         <h2 class="float-left mb-3 font-normal text-white">Users</h2>
         <svg class="w-10 h-10 mb-2 text-white float-right" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
         </svg>
       </div>

       <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">
         {{ countUsers }}
       </h5>

     </div>

     <div class="bg-gradient-to-r from-red-300 via-40%-red to-orange-400 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex items-center justify-between">
         <h4 class="float-left mb-3 font-normal text-white">Main Products</h4>
         <svg class="w-10 h-10 mb-2 text-white float-right" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"></path>
         </svg>
       </div>

       <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">
         {{ countProduct }}
       </h5>
     </div>

     <div class="bg-gradient-to-r from-green-300 via-40%-green to-emerald-500 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       <div class="flex items-center justify-between">
         <h4 class="float-left mb-3 font-normal text-white">Main Categories</h4>
         <svg class="w-10 h-10 mb-2 text-white float-right" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"></path>
         </svg>
       </div>
       <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">
         {{ countCategory }}
       </h5>
       <h5 class="mb-2 text-base font-semibold tracking-tight text-white dark:text-white" v-for="updated of updatedCategory">
<!--         {{ updated.updated_at }}-->
       </h5>
     </div>

   </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "index",
  layout: 'AdminLayout',
  middleware: 'admin',
  data(){
    return {
      countProduct: null,
      updatedProduct: null,
      countCategory: null,
      updatedCategory: null,
      countUsers: null,
      updatedUsers: null,
    }
  },
  async fetch(){
    await this.fetchProducts(1)
    await this.users()
    await this.fetchCategories(1)
  },
  computed: {
    ...mapGetters('products', ['getProducts']),
    ...mapGetters('category', ['getCategories']),
    ...mapGetters('userSettings', ['getUsers'])
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
    ...mapActions('category', ['fetchCategories']),
    ...mapActions('userSettings', ['users'])
  },
  mounted() {
    this.countProduct = this.getProducts.length
    this.updatedProduct = this.getProducts.length
    this.countUsers = this.getUsers.length
    this.updatedUsers = this.getUsers.length
    this.countCategory = this.getCategories.length
    this.updatedCategory = this.getCategories
  }
}
</script>

<style scoped>

</style>
