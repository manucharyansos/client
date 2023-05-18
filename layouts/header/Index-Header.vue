<template>
  <header>
<!--    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">-->
<!--      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl relative">-->
<!--        <nuxt-link to="/" class="flex items-center">-->
<!--          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Example</span>-->
<!--        </nuxt-link>-->
<!--        <div class="flex items-center lg:order-2">-->
<!--            <template v-if="$auth.loggedIn">-->
<!--              <span class="text-gray-800 dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">-->
<!--                {{$auth.user.name}}-->
<!--              </span>-->
<!--              <button-->
<!--                @click="userLogout"-->
<!--                class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"-->
<!--              >-->
<!--              Log out-->
<!--              </button>-->
<!--            </template>-->
<!--            <template v-else>-->
<!--              <nuxt-link-->
<!--                class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"-->
<!--                to="/auth/login"-->
<!--              >-->
<!--                Log in-->
<!--              </nuxt-link>-->
<!--            </template>-->
<!--          <div class="lg:hidden w-6 h-6" @click="openManu">-->
<!--            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>-->
<!--            </svg>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div-->
<!--          class="hidden lg:flex top-10 justify-center lg:justify-between lg:items-center w-full lg:w-auto lg:order-1 border lg:border-0"-->
<!--          id="mobile-menu-2"-->
<!--          :class="{ lgManu: isManu }"-->
<!--        >-->
<!--          <ul class="flex flex-col lg:items-end mt-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:w-40">-->
<!--            <li class="font-sans italic " v-for="pages of allPages">-->
<!--              <nuxt-link :to="pages.linkTo" class="block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:p-0 dark:text-white">-->
<!--                {{ pages.name }}-->
<!--              </nuxt-link>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--    </nav>-->


    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Example</span>
        </a>
        <div class="flex items-center md:order-2" v-if="$auth.loggedIn">
          <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span class="sr-only">Open user menu</span>
            <img class="w-8 h-8 rounded-full" src="" alt="user photo">
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
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
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
          <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
          <ul class="flex flex-col lg:items-end mt-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:w-40">
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
        { id: 2, name: 'Login', linkTo: '/auth/login'},
        { id: 3, name: 'Register', linkTo: '/auth/register'},
      ],
      isManu: false
    }
  },
  methods: {
    async userLogout(){
      await this.$auth.logout()
      await this.$router.push('/')
    },
    openManu(){
      this.isManu = !this.isManu
    }
  },
}
</script>

<style scoped>
  .lgManu{
    display: flex;
  }
</style>
