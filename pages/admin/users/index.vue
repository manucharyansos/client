<template>
  <div class="">

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Image
          </th>
          <th scope="col" class="px-6 py-3">
            User name
          </th>
          <th scope="col" class="px-6 py-3">
            Email
          </th>
          <th scope="col" class="px-6 py-3">
            Biografia
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Delete</span>
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          v-for="user of getUsers"
        >
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <img class="w-16 h-16 object-cover object-center" :src="`http://127.0.0.1:8000/user-images/${ user.image }`" alt="">
          </th>
          <td class="px-6 py-4">
            {{ user.name }}
          </td>
          <td class="px-6 py-4">
            {{ user.email }}
          </td>
          <td class="px-6 py-4">
            {{ user.bio }}
          </td>
          <td class="px-6 py-4 text-right">
            <button class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
          </td>
          <td class="px-6 py-4 text-right">
            <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import { initFlowbite } from "flowbite";

export default {
  name: "index",
  layout: 'AdminLayout',
  middleware: 'admin',
  async fetch(){
    await this.users()
  },
  mounted() {
    initFlowbite()
  },
  computed: {
    ...mapGetters('userSettings', ['getUsers'])
  },
  methods: {
    ...mapActions('userSettings', ['users'])
  }
}
</script>

<style scoped>

</style>
