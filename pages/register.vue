<template>
  <div class="w-full max-w-xs mx-auto">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-12 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 font-roboto" for="Name">
          Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :class="{ active: fieldName }"
          id="Name"
          type="text"
          placeholder="Name"
          v-model="name"
        >
      </div>
      <template v-if="fieldName">
        <p class="text-red-500 text-xs italic font-cormorant">Please choose a Name.</p>
      </template>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 font-roboto" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :class="{ active: fieldEmail }"
          id="email"
          type="email"
          placeholder="Email"
          v-model="email"
        >
      </div>
      <template v-if="fieldEmail">
        <p class="text-red-500 text-xs italic font-cormorant">Please choose a email address.</p>
      </template>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2 font-roboto" for="password">
          Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
               :class="{ active: fieldPassword }"
               id="password"
               type="password"
               placeholder="***********"
               v-model="password"
        >
        <template v-if="fieldPassword">
          <p class="text-red-500 text-xs italic font-cormorant">Please choose a password.</p>
        </template>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2 font-roboto" for="confirmPassword">
          Confirm Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
               :class="{ active: fieldConfirmPassword }"
               id="confirmPassword"
               type="password"
               placeholder="***********"
               v-model="confirmPassword"
        >
        <template v-if="fieldPassword">
          <p class="text-red-500 text-xs italic font-cormorant">Please choose a password.</p>
        </template>
        <template v-if="getErrorMessage">
          <p class="text-red-500 text-xs italic">{{getErrorMessage.error}}</p>
        </template>
      </div>
      <div class="flex flex-col items-center">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="sendRegister"
        >
          Sign In
        </button>
        <div class="flex flex-row">
          <p class="font-roboto text-base">Already have an account?</p>
          <nuxt-link to="/login" class="sign_in_here"> Sign in here </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "register",
  layout: 'AuthLayout',
  auth: 'guest',
  data(){
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      fieldName: false,
      fieldEmail: false,
      fieldPassword: false,
      fieldConfirmPassword: false
    }
  },
  watch: {
    name(val){
      if (val){
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
    confirmPassword(val){
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
        if (!this.confirmPassword){
          this.fieldConfirmPassword = true
        }
      }
      if (this.password === ''){
        this.fieldPassword = true
        if (!this.email){
          this.fieldEmail = true
        }
      }
      else{
        await this.registerUser({
          name: this.name,
          email: this.email,
          password: this.password,
          confirm_password: this.confirmPassword
        })
        this.email = ''
        this.password = ''
      }
    }
  }
}
</script>

<style scoped>
.active{
  border: 1px solid red;
}
a.sign_in_here {
  color: #1a202c !important;
}


</style>
