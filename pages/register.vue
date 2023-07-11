<template>


<!--      <div class="relative z-0 w-full mb-6 group">-->
<!--        <input-->
<!--          type="email"-->
<!--          name="email"-->
<!--          id="email"-->
<!--          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-800 peer"-->
<!--          placeholder=" "-->
<!--          required-->

<!--        />-->
<!--        <label-->
<!--          for="email"-->
<!--          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-800 peer-focus:dark:text-indigo-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"-->
<!--          :class="{ label: fieldEmail }"-->
<!--        >Email address-->
<!--        </label>-->

<!--      </div>-->

<!--      <div class="relative z-0 w-full mb-6 group">-->
<!--        <input-->
<!--          type="password"-->
<!--          name="password"-->
<!--          id="password"-->
<!--          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-800 peer"-->
<!--          :class="{ active: fieldPassword }"-->
<!--          placeholder=" "-->
<!--          required-->
<!--          v-model="password"-->
<!--        />-->
<!--        <label-->
<!--          for="password"-->
<!--          :class="{ label: fieldPassword }"-->
<!--          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-800 peer-focus:dark:text-indigo-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">-->
<!--          Password-->
<!--        </label>-->
<!--        <template v-if="fieldPassword">-->
<!--          <p class="text-red-500 text-xs italic font-cormorant">Please choose a password.</p>-->
<!--        </template>-->
<!--        <template v-if="errorMessages.password">-->
<!--          <p-->
<!--            class="text-red-500 text-xs italic font-cormorant"-->
<!--            v-if="errorMessages.password"-->
<!--            v-for="err of errorMessages.password"-->
<!--          >-->
<!--            {{ err }}-->
<!--          </p>-->
<!--        </template>-->
<!--      </div>-->
<!--      <div class="relative z-0 w-full mb-6 group">-->
<!--        <input-->
<!--          type="password"-->
<!--          name="confirmPassword"-->
<!--          id="password"-->
<!--          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-800 peer"-->
<!--          :class="{ active: fieldConfirmPassword }"-->
<!--          placeholder=" "-->
<!--          required-->
<!--          v-model="password_confirmation"-->
<!--        />-->
<!--        <label-->
<!--          for="confirmPassword"-->
<!--          :class="{ label: fieldConfirmPassword }"-->
<!--          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-800 peer-focus:dark:text-indigo-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">-->
<!--          Confirm password-->
<!--        </label>-->
<!--        <template v-if="fieldConfirmPassword">-->
<!--          <p class="text-red-500 text-xs italic font-cormorant">Please choose a password.</p>-->
<!--        </template>-->
<!--      </div>-->
<!--      <div class="flex flex-col items-center">-->
<!--        <button-->
<!--          class="w-full block bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"-->
<!--          @click="sendRegister"-->
<!--        >-->
<!--          Create an account-->
<!--        </button>-->
<!--        <div class="flex flex-row items-center mt-4">-->
<!--          <p class="font-roboto text-sm text-gray-800  dark:text-indigo-50 m-2">Already have an account</p>-->
<!--          <nuxt-link to="/login" class="sign_in_here m-2 text-indigo-800  dark:text-indigo-300"> Sign in here </nuxt-link>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <div class="bg-white dark:bg-gray-700 relative lg:py-20">
    <div class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row">
      <div class="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
        <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
          <div class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
            <img src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
                 class="btn-" alt="image"/>
          </div>
        </div>
        <div class="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
          <div class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10">
            <p class="w-full text-4xl font-medium text-center leading-snug font-serif">Sign up for an account</p>
            <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
              <div class="relative">
                <p :class="{ label: fieldName }" class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Name</p>
                <input
                  placeholder="Name"
                  type="text"
                  class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                  :class="{ active: fieldName }"
                  v-model="name"
                />
                <template v-if="fieldName">
                  <p class="text-red-500 text-xs italic font-cormorant">Please choose a Name.</p>
                </template>
                <template v-if="errorMessages.name">
                  <p
                    class="text-red-500 text-xs italic font-cormorant"
                    v-if="errorMessages.name"
                    v-for="err of errorMessages.name"
                  >
                    {{ err }}
                  </p>
                </template>
              </div>
              <div class="relative">
                <p :class="{ label: fieldEmail }" class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
                <input
                  placeholder="Name"
                  type="email"
                  class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  :class="{ active: fieldEmail }"
                  v-model="email"
                />
                <template v-if="fieldEmail">
                  <p class="text-red-500 text-xs italic font-cormorant">Please choose a email address.</p>
                </template>
                <template v-if="errorMessages.email">
                  <p
                    class="text-red-500 text-xs italic font-cormorant"
                    v-if="errorMessages.email"
                    v-for="err of errorMessages.email"
                  >
                    {{ err }}
                  </p>
                </template>
              </div>
              <div class="relative">
                <p :class="{ label: fieldPassword }" class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Password</p>
                <input
                  placeholder="Password"
                  type="password"
                  class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  :class="{ active: fieldPassword }"
                  v-model="password"
                />
                <template v-if="fieldPassword">
                  <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </template>
                <template v-if="getErrorMessage" v-for="error of errorMessages">
                  <p class="text-red-500 text-xs italic">{{error}}</p>
                </template>
              </div>
              <div class="relative">
                <p :class="{ label: fieldConfirmPassword }" class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Confirm Password</p>
                <input
                  placeholder="Password"
                  type="password"
                  class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  :class="{ active: fieldConfirmPassword }"
                  v-model="password_confirmation"
                />
                <template v-if="fieldConfirmPassword">
                  <p class="text-red-500 text-xs italic font-cormorant">Please choose a password.</p>
                </template>
              </div>
              <div class="relative">
                <button
                  class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease"
                  @click="sendRegister"
                >Sign up</button>
              </div>
              <div class="flex flex-row items-center mt-4">
                <p class="font-roboto text-sm text-gray-800  dark:text-indigo-50 m-2">Already have an account</p>
                <nuxt-link to="/login" class="sign_in_here m-2 text-indigo-800  dark:text-indigo-300"> Sign in here </nuxt-link>
              </div>
            </div>
          </div>
          <svg viewbox="0 0 91 91" class="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300 fill-current">
            <g stroke="none" strokewidth="1" fillrule="evenodd">
              <g fillrule="nonzero">
                <g transform="translate(0 36)"><circle cx="3.261" cy="3.686" r="2.72"/><circle cx="15.296" cy="3.686" r="2.719"/><circle cx="27.333" cy="3.686" r="2.72"/><circle cx="39.369" cy="3.686" r="2.72"/><circle cx="51.405" cy="3.686" r="2.72"/><circle cx="63.441" cy="3.686" r="2.72"/><circle cx="75.479" cy="3.686" r="2.72"/><circle cx="87.514" cy="3.686" r="2.719"/></g>
                <g>
                  <g><circle cx="3.261" cy="3.445" r="2.72"/><circle cx="15.296" cy="3.445" r="2.719"/><circle cx="27.333" cy="3.445" r="2.72"/><circle cx="39.369" cy="3.445" r="2.72"/><circle cx="51.405" cy="3.445" r="2.72"/><circle cx="63.441" cy="3.445" r="2.72"/><circle cx="75.479" cy="3.445" r="2.72"/><circle cx="87.514" cy="3.445" r="2.719"/></g>
                  <g transform="translate(0 12)"><circle cx="3.261" cy="3.525" r="2.72"/><circle cx="15.296" cy="3.525" r="2.719"/><circle cx="27.333" cy="3.525" r="2.72"/><circle cx="39.369" cy="3.525" r="2.72"/><circle cx="51.405" cy="3.525" r="2.72"/><circle cx="63.441" cy="3.525" r="2.72"/><circle cx="75.479" cy="3.525" r="2.72"/><circle cx="87.514" cy="3.525" r="2.719"/></g>
                  <g transform="translate(0 24)"><circle cx="3.261" cy="3.605" r="2.72"/><circle cx="15.296" cy="3.605" r="2.719"/><circle cx="27.333" cy="3.605" r="2.72"/><circle cx="39.369" cy="3.605" r="2.72"/><circle cx="51.405" cy="3.605" r="2.72"/><circle cx="63.441" cy="3.605" r="2.72"/><circle cx="75.479" cy="3.605" r="2.72"/><circle cx="87.514" cy="3.605" r="2.719"/></g>
                  <g transform="translate(0 36)"><circle cx="3.261" cy="3.686" r="2.72"/><circle cx="15.296" cy="3.686" r="2.719"/><circle cx="27.333" cy="3.686" r="2.72"/><circle cx="39.369" cy="3.686" r="2.72"/><circle cx="51.405" cy="3.686" r="2.72"/><circle cx="63.441" cy="3.686" r="2.72"/><circle cx="75.479" cy="3.686" r="2.72"/><circle cx="87.514" cy="3.686" r="2.719"/></g>
                  <g transform="translate(0 49)"><circle cx="3.261" cy="2.767" r="2.72"/><circle cx="15.296" cy="2.767" r="2.719"/><circle cx="27.333" cy="2.767" r="2.72"/><circle cx="39.369" cy="2.767" r="2.72"/><circle cx="51.405" cy="2.767" r="2.72"/><circle cx="63.441" cy="2.767" r="2.72"/><circle cx="75.479" cy="2.767" r="2.72"/><circle cx="87.514" cy="2.767" r="2.719"/></g>
                  <g transform="translate(0 61)"><circle cx="3.261" cy="2.846" r="2.72"/><circle cx="15.296" cy="2.846" r="2.719"/><circle cx="27.333" cy="2.846" r="2.72"/><circle cx="39.369" cy="2.846" r="2.72"/><circle cx="51.405" cy="2.846" r="2.72"/><circle cx="63.441" cy="2.846" r="2.72"/><circle cx="75.479" cy="2.846" r="2.72"/><circle cx="87.514" cy="2.846" r="2.719"/></g>
                  <g transform="translate(0 73)"><circle cx="3.261" cy="2.926" r="2.72"/><circle cx="15.296" cy="2.926" r="2.719"/><circle cx="27.333" cy="2.926" r="2.72"/><circle cx="39.369" cy="2.926" r="2.72"/><circle cx="51.405" cy="2.926" r="2.72"/><circle cx="63.441" cy="2.926" r="2.72"/><circle cx="75.479" cy="2.926" r="2.72"/><circle cx="87.514" cy="2.926" r="2.719"/></g>
                  <g transform="translate(0 85)"><circle cx="3.261" cy="3.006" r="2.72"/><circle cx="15.296" cy="3.006" r="2.719"/><circle cx="27.333" cy="3.006" r="2.72"/><circle cx="39.369" cy="3.006" r="2.72"/><circle cx="51.405" cy="3.006" r="2.72"/><circle cx="63.441" cy="3.006" r="2.72"/><circle cx="75.479" cy="3.006" r="2.72"/><circle cx="87.514" cy="3.006" r="2.719"/></g>
                </g>
              </g>
            </g>
          </svg>
          <svg viewbox="0 0 91 91" class="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500 fill-current">
            <g stroke="none" strokewidth="1" fillrule="evenodd">
              <g fillrule="nonzero">
                <g>
                  <g><circle cx="3.261" cy="3.445" r="2.72"/><circle cx="15.296" cy="3.445" r="2.719"/><circle cx="27.333" cy="3.445" r="2.72"/><circle cx="39.369" cy="3.445" r="2.72"/><circle cx="51.405" cy="3.445" r="2.72"/><circle cx="63.441" cy="3.445" r="2.72"/><circle cx="75.479" cy="3.445" r="2.72"/><circle cx="87.514" cy="3.445" r="2.719"/></g>
                  <g transform="translate(0 12)"><circle cx="3.261" cy="3.525" r="2.72"/><circle cx="15.296" cy="3.525" r="2.719"/><circle cx="27.333" cy="3.525" r="2.72"/><circle cx="39.369" cy="3.525" r="2.72"/><circle cx="51.405" cy="3.525" r="2.72"/><circle cx="63.441" cy="3.525" r="2.72"/><circle cx="75.479" cy="3.525" r="2.72"/><circle cx="87.514" cy="3.525" r="2.719"/></g>
                  <g transform="translate(0 24)"><circle cx="3.261" cy="3.605" r="2.72"/><circle cx="15.296" cy="3.605" r="2.719"/><circle cx="27.333" cy="3.605" r="2.72"/><circle cx="39.369" cy="3.605" r="2.72"/><circle cx="51.405" cy="3.605" r="2.72"/><circle cx="63.441" cy="3.605" r="2.72"/><circle cx="75.479" cy="3.605" r="2.72"/><circle cx="87.514" cy="3.605" r="2.719"/></g>
                  <g transform="translate(0 36)"><circle cx="3.261" cy="3.686" r="2.72"/><circle cx="15.296" cy="3.686" r="2.719"/><circle cx="27.333" cy="3.686" r="2.72"/><circle cx="39.369" cy="3.686" r="2.72"/><circle cx="51.405" cy="3.686" r="2.72"/><circle cx="63.441" cy="3.686" r="2.72"/><circle cx="75.479" cy="3.686" r="2.72"/><circle cx="87.514" cy="3.686" r="2.719"/></g>
                  <g transform="translate(0 49)"><circle cx="3.261" cy="2.767" r="2.72"/><circle cx="15.296" cy="2.767" r="2.719"/><circle cx="27.333" cy="2.767" r="2.72"/><circle cx="39.369" cy="2.767" r="2.72"/><circle cx="51.405" cy="2.767" r="2.72"/><circle cx="63.441" cy="2.767" r="2.72"/><circle cx="75.479" cy="2.767" r="2.72"/><circle cx="87.514" cy="2.767" r="2.719"/></g>
                  <g transform="translate(0 61)"><circle cx="3.261" cy="2.846" r="2.72"/><circle cx="15.296" cy="2.846" r="2.719"/><circle cx="27.333" cy="2.846" r="2.72"/><circle cx="39.369" cy="2.846" r="2.72"/><circle cx="51.405" cy="2.846" r="2.72"/><circle cx="63.441" cy="2.846" r="2.72"/><circle cx="75.479" cy="2.846" r="2.72"/><circle cx="87.514" cy="2.846" r="2.719"/></g>
                  <g transform="translate(0 73)"><circle cx="3.261" cy="2.926" r="2.72"/><circle cx="15.296" cy="2.926" r="2.719"/><circle cx="27.333" cy="2.926" r="2.72"/><circle cx="39.369" cy="2.926" r="2.72"/><circle cx="51.405" cy="2.926" r="2.72"/><circle cx="63.441" cy="2.926" r="2.72"/><circle cx="75.479" cy="2.926" r="2.72"/><circle cx="87.514" cy="2.926" r="2.719"/></g>
                  <g transform="translate(0 85)"><circle cx="3.261" cy="3.006" r="2.72"/><circle cx="15.296" cy="3.006" r="2.719"/><circle cx="27.333" cy="3.006" r="2.72"/><circle cx="39.369" cy="3.006" r="2.72"/><circle cx="51.405" cy="3.006" r="2.72"/><circle cx="63.441" cy="3.006" r="2.72"/><circle cx="75.479" cy="3.006" r="2.72"/><circle cx="87.514" cy="3.006" r="2.719"/></g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "register",
  auth: 'guest',
  layout: 'default',
  data(){
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      fieldName: false,
      fieldEmail: false,
      fieldPassword: false,
      fieldConfirmPassword: false,
      errorMessages: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      }
    }
  },
  watch: {
    name(val){
      if (`${val.length}` >= 3){
        this.fieldName = false
      }
    },
    email(val){
      if (val){
        this.fieldEmail = false
      }
    },
    password(val){
      if (`${val.length}` >= 6){
        this.fieldPassword = false
      }
    },
    password_confirmation(val){
      if (`${val.length}` >= 6){
        this.fieldConfirmPassword = false
      }
    }
  },
  computed: {
    ...mapGetters('authCustom', ['getErrorMessage'])
  },
  methods: {
    ...mapActions('authCustom', ['registerUser']),
    async sendRegister({commit}, userData){
      if (this.name && this.email && this.password && this.password === this.password_confirmation){
        const response = await this.registerUser({
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
        if (response){
          this.name = ''
          this.email = ''
          this.password = ''
          this.password_confirmation = ''
        }
        else{
          this.errorMessages = this.getErrorMessage
        }
      }else{
        if (this.name === ''){
          this.fieldName = true
          if (!this.email){
            this.fieldEmail = true
          }
          if (!this.password){
            this.fieldPassword = true
          }
          if (!this.confirmPassword){
            this.fieldConfirmPassword = true
          }
        }
        if (this.email === ''){
          this.fieldEmail = true
          if (!this.password){
            this.fieldPassword = true
          }
          if (!this.password_confirmation){
            this.fieldConfirmPassword = true
          }
        }
        if (this.password === ''){
          this.fieldPassword = true
          if (!this.email){
            this.fieldEmail = true
          }
        }
      }

    }
  }
}
</script>

<style scoped>
.active{
  border: 1px solid red;
}
.label{
  color: red;
}
a.sign_in_here {
  /*color: #1a202c !important;*/
}


</style>
