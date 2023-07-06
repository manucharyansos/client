<!--<template>-->
<!--  <div-->
<!--    :id="id"-->
<!--    tabindex="-1"-->
<!--    aria-hidden="true"-->
<!--    class="modal-root fixed bg-black bg-opacity-70 inset-0 z-50 cursor-pointer p-4 md:p-5 opacity-100 fixed top-0 left-0 right-0 z-50 hidden w-full p-4  md:inset-0 h-[calc(100%-1rem)] max-h-full">-->
<!--    <div class="w-full md:w-auto absolute left-1/2 transform -translate-x-1/2 shadow-xl h-auto max-h-full top-1/2 -translate-y-1/2 rounded-lg">-->
<!--      <button :data-modal-hide="modal_hide" class="fixed z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md -top-3 md:-top-4 ltr:-right-3 rtl:-left-3 ltr:md:-right-4 rtl:md:-left-4">-->
<!--        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">-->
<!--          <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>-->
<!--        </svg>-->
<!--        <span class="sr-only">Close modal</span>-->
<!--      </button>-->
<!--      <div class="h-full overflow-y-auto rounded-lg" style="max-height: calc(100vh - 120px);">-->
<!--        <div class="w-full px-5 py-5 mx-auto overflow-hidden bg-white border border-gray-300 rounded-lg sm:w-96 md:w-450px sm:px-8">-->
<!--          <div class="text-center mb-6 pt-2.5"><div>-->
<!--            <a class="inline-flex focus:outline-none" href="/">-->
<!--            <span class="box-border inline-block overflow-hidden bg-no-repeat opacity-100	relative m-0 p-0" style=" width: 95px; height: 30px">-->
<!--              <img alt="Logo" src="/logo.jpg" decoding="async" data-nimg="fixed"-->
<!--                   class="absolute ring-inset box-border p-0 mx-auto block max-w-full max-h-full">-->
<!--            </span>-->
<!--            </a>-->
<!--          </div>-->
<!--            <p class="mt-2 mb-8 text-sm md:text-base text-body sm:mb-10">Login with your email &amp; password</p>-->
<!--          </div>-->
<!--          <form class="flex flex-col justify-center" novalidate="">-->
<!--            <div class="flex flex-col space-y-3.5">-->
<!--              <div class="block">-->
<!--                <label for="email" class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Email</label>-->
<!--                <input id="email" name="email" type="email" placeholder="" class="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" autocomplete="off" spellcheck="false" aria-invalid="false">-->
<!--              </div>-->
<!--              <div class="block">-->
<!--                <label for="password" class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Password</label>-->
<!--                <div class="relative">-->
<!--                  <input-->
<!--                    id="password"-->
<!--                    name="password"-->
<!--                    :type="type"-->
<!--                    class="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border border-gray-500 text-input text-xs lg:text-sm font-body rounded-md placeholder-gray-600  transition duration-200 ease-in-out bg-white border border-gray-100 focus:outline-none focus:border-heading h-11 md:h-12"-->
<!--                    autocomplete="off"-->
<!--                    autocapitalize="off"-->
<!--                    spellcheck="false">-->
<!--                  <label for="password" class="absolute right-5 top-5 -mt-2 text-gray-500 cursor-pointer">-->
<!--                    <svg @click="changeType" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">-->
<!--                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>-->
<!--                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>-->
<!--                    </svg>-->
<!--                  </label>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="flex items-center justify-center">-->
<!--                <div class="flex items-center flex-shrink-0">-->
<!--                  <label class="relative inline-block w-10 cursor-pointer switch">-->
<!--                    <input id="remember" type="checkbox" class="w-0 h-0 opacity-0" name="remember_me">-->
<!--                    <span class="absolute inset-0 transition-all duration-300 ease-in bg-gray-500 slider round"></span>-->
<!--                  </label>-->
<!--                  <label for="remember" class="flex-shrink-0 text-sm cursor-pointer text-heading ltr:pl-3 rtl:pr-3">-->
<!--                    Remember me-->
<!--                  </label>-->
<!--                </div>-->
<!--                <div class="flex ltr:ml-auto rtl:mr-auto">-->
<!--                  <button type="button" class="text-sm underline ltr:text-right rtl:text-left text-heading ltr:pl-3 rtl:pr-3 hover:no-underline focus:outline-none">-->
<!--                    Forgot password?-->
<!--                  </button>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="relative">-->
<!--                <button data-variant="flat" class="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-gray-800 text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-11 md:h-12 w-full mt-1.5" type="submit">-->
<!--                  Login-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </form>-->
<!--          <div class="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">-->
<!--            <hr class="w-full border-gray-300">-->
<!--            <span class="absolute -top-2.5 px-2 bg-white">Or</span>-->
<!--          </div>-->
<!--          <button-->
<!--            data-variant="flat"-->
<!--            class="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-gray-600 text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-800 hover:shadow-cart h-11 md:h-12 w-full mt-2.5 bg-facebook hover:bg-facebookHover">-->
<!--            <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" class="flex items-center text-sm rounded-full mx-2 sm:text-base ltr:mr-1.5 rtl:ml-1.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h6.5v-7h-2v-2h2v-1c0-1.653 1.347-3 3-3h2v2h-2c-0.55 0-1 0.45-1 1v1h3l-0.5 2h-2.5v7h4.5c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5z">-->
<!--              </path>-->
<!--            </svg>-->
<!--            Login With Facebook-->
<!--          </button>-->
<!--          <button data-variant="flat" class="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-gray-600 text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-800 hover:shadow-cart h-11 md:h-12 w-full mt-2.5 bg-google hover:bg-googleHover">-->
<!--            <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" class="text-sm sm:text-base rounded-full mx-2 ltr:mr-1.5 rtl:ml-1.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM8.119 14c-3.316 0-6-2.684-6-6s2.684-6 6-6c1.619 0 2.975 0.591 4.019 1.569l-1.628 1.569c-0.447-0.428-1.225-0.925-2.391-0.925-2.050 0-3.719 1.697-3.719 3.787s1.672 3.787 3.719 3.787c2.375 0 3.266-1.706 3.403-2.588h-3.403v-2.056h5.666c0.050 0.3 0.094 0.6 0.094 0.994 0.003 3.428-2.294 5.863-5.759 5.863z"></path>-->
<!--            </svg>Login With Google</button>-->
<!--          <div class="mt-5 mb-1 text-sm text-center sm:text-base text-body">Don't have any account?-->
<!--            <button type="button" class="text-sm font-bold underline sm:text-base text-heading hover:no-underline focus:outline-none">-->
<!--              Register-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "index",-->
<!--  props: {-->
<!--    id: {-->
<!--      type: String-->
<!--    },-->
<!--    modal_hide: {-->
<!--      type :String-->
<!--    }-->
<!--  },-->
<!--  data (){-->
<!--    return {-->
<!--      type: 'password'-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    changeType(){-->
<!--      this.type = 'text'-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
