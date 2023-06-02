<template>
  <header class="sticky top-0 z-20">
    <nav class=" bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <nuxt-link to="/" class="flex items-center">
<!--          <img src="/images.png" class="h-8 mr-3" />-->
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Example</span>
        </nuxt-link>

        <div class="flex items-center ju md:order-2">
          <button @click="toggle" id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
            <svg id="theme-toggle-dark-icon" v-if="isDark" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            <svg id="theme-toggle-light-icon" v-if="isLight" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          </button>
          <template v-if="$auth.loggedIn">
            <button
              type="button"
              class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span class="sr-only">Open user menu</span>
              <template v-if="$auth.user.image">
                <img
                  :src="`http://127.0.0.1:8000/user-images/${$auth.user.image}`"
                  alt="/images.png"
                  class="w-8 h-8 rounded-full"
                  v-if="$auth.user.image"
                />
              </template>
              <template v-else>
                <img
                  src="/images.pmg"
                  alt="/images.png"
                  class="w-8 h-8 rounded-full"
                />
              </template>
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
          </template>

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
            <template v-if="$auth.user.role === 1">
              <li>
                <nuxt-link to="/admin" class="block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:p-0 dark:text-white">Admin</nuxt-link>
              </li>
            </template>
            <template v-if="!$auth.loggedIn">
              <li>
                <nuxt-link to="/login">Login</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/register">Register</nuxt-link>
              </li>
            </template>
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
        { id: 4, name: 'Products', linkTo: '/products'},
        { id: 4, name: 'Category', linkTo: '/products/category'},
      ],
      isDark: false,
      isLight: true
    }
  },
  mounted() {
    initFlowbite();
  },
  created() {
    this.$auth.$storage.setUniversal('color-theme', 'light');
  },
  methods: {
    async userLogout(){
      await this.$auth.logout()
      await this.$router.push('/')
    },
    toggle() {
      const value = this.$auth.$storage.getUniversal('color-theme');
      if (value) {
        if (value === 'light') {
          document.documentElement.classList.add('dark');
          this.$auth.$storage.setUniversal('color-theme', 'dark');
          this.isLight = false
          this.isDark = true
        } else {
          document.documentElement.classList.remove('dark');
          this.$auth.$storage.setUniversal('color-theme', 'light');
          this.isLight = true
          this.isDark = false
        }
      }
    }
  },
}
</script>

<style scoped>

</style>
