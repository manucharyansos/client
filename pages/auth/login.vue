<template>
  <div class="w-full max-w-xs mx-auto">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-12 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
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
        <p class="text-red-500 text-xs italic">Please choose a email address.</p>
      </template>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
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
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </template>
        <template v-if="getErrorMessage">
          <p class="text-red-500 text-xs italic">{{getErrorMessage.error}}</p>
        </template>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="login"
        >
          Sign In
        </button>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "login",
  layout: 'AuthLayout',
  data(){
    return {
      email: '',
      password: '',
      fieldEmail: false,
      fieldPassword: false
    }
  },
  watch: {
    email(val){
      if (val){
        this.fieldEmail = false
      }
    },
    password(val){
      if (`${val.length}` >= 6){
        this.fieldPassword = false
      }
    }
  },
  computed: {
    ...mapGetters('authCustom', ['getErrorMessage'])
  },
  methods: {
    ...mapActions('authCustom', ['loginUser']),
    async login({commit}, userData){
      if (this.email === ''){
        this.fieldEmail = true
        if (!this.password){
          this.fieldPassword = true
        }
      }
      if (this.password === ''){
        this.fieldPassword = true
        if (!this.email){
          this.fieldEmail = true
        }
      }
      else{
        await this.loginUser({
          data: {
            email: this.email,
            password: this.password
          }
        }, userData)
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
</style>
