<template>
  <nav class="sticky top-0 bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <nuxt-link to="/" class="flex items-center">
<!--        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />-->
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Home</span>
      </nuxt-link>


      <div class="flex items-center ju md:order-2">
        <button @click="toggle" id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
          <svg id="theme-toggle-dark-icon" v-if="isDark" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
          <svg id="theme-toggle-light-icon" v-if="isLight" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { initFlowbite } from 'flowbite'
export default {
  name: "Index",
  data(){
    return {
      isDark: false,
      isLight: true
    }
  },
  created() {
    this.$auth.$storage.setUniversal('color-theme', 'light');
  },
  mounted() {
    initFlowbite();
  },
  methods: {
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
  }

}
</script>

<style scoped>

</style>
