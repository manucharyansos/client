<template>
  <header>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <nuxt-link to="/" class="flex items-center">
<!--          <img src="/images.png" class="h-8 mr-3" />-->

          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Example</span>
        </nuxt-link>
        <div class="flex items-center md:order-2" v-if="$auth.loggedIn">
          <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span class="sr-only">Open user menu</span>
<!--            <img class="w-8 h-8 rounded-full" src="" alt="user photo">-->
            <nuxt-img :src="`http://127.0.0.1:8000/user-images/${$auth.user.image}`" alt="/images.png" class="w-8 h-8 rounded-full"/>
          </button>
          <!-- Dropdown menu -->
          <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-white">
                {{ $auth.user.name }}
              </span>
              <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
                {{ $auth.user.email }}
              </span>
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <nuxt-link to="/user/my-profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  My Profile
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/user/profile-settings"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Settings
                </nuxt-link>
              </li>
              <li>
                <button
                  @click="userLogout"
                  class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
          <button data-collapse-toggle="mobile-menu"
                  type="button"
                  class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li class="font-sans italic " v-for="pages of allPages">
              <nuxt-link :to="pages.linkTo" class="block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:p-0 dark:text-white">
                {{ pages.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </header>

</template>

<script>
import { initFlowbite } from 'flowbite'
export default {
  name: "Index-Header",
  data(){
    return {
      allPages: [
        { id: 1, name: 'Home', linkTo: '/'},
        { id: 2, name: 'Login', linkTo: '/login'},
        { id: 3, name: 'Register', linkTo: '/register'},
        { id: 4, name: 'Products', linkTo: '/products'},
      ],
      isManu: false
    }
  },
  mounted() {
    initFlowbite();
  },
  methods: {
    async userLogout(){
      await this.$auth.logout()
      await this.$router.push('/')
    },
  },
}
</script>

<style scoped>

</style>
