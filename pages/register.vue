<template>
  <div class="w-full mx-auto font-roboto bg-white dark:bg-gray-700 md:mt-0 sm:max-w-md xl:p-0">
    <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg shadow p-14">
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="name"
          id="name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-800 peer"
          placeholder=" "
          required
          :class="{ active: fieldName }"
          v-model="name"
        />
        <label
          for="name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-800 peer-focus:dark:text-indigo-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          :class="{ label: fieldName }"
        >Name
        </label>
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

      <div class="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="email"
          id="email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-800 peer"
          placeholder=" "
          required
          :class="{ active: fieldEmail }"
          v-model="email"
        />
        <label
          for="email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-800 peer-focus:dark:text-indigo-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          :class="{ label: fieldEmail }"
        >Email address
        </label>
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

      <div class="relative z-0 w-full mb-6 group">
        <input
          type="password"
          name="password"
          id="password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-800 peer"
          :class="{ active: fieldPassword }"
          placeholder=" "
          required
          v-model="password"
        />
        <label
          for="password"
          :class="{ label: fieldPassword }"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-800 peer-focus:dark:text-indigo-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Password
        </label>
        <template v-if="fieldPassword">
          <p class="text-red-500 text-xs italic font-cormorant">Please choose a password.</p>
        </template>
        <template v-if="errorMessages.password">
          <p
            class="text-red-500 text-xs italic font-cormorant"
            v-if="errorMessages.password"
            v-for="err of errorMessages.password"
          >
            {{ err }}
          </p>
        </template>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="password"
          name="confirmPassword"
          id="password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-800 peer"
          :class="{ active: fieldConfirmPassword }"
          placeholder=" "
          required
          v-model="password_confirmation"
        />
        <label
          for="confirmPassword"
          :class="{ label: fieldConfirmPassword }"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-800 peer-focus:dark:text-indigo-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Confirm password
        </label>
        <template v-if="fieldConfirmPassword">
          <p class="text-red-500 text-xs italic font-cormorant">Please choose a password.</p>
        </template>
      </div>
      <div class="flex flex-col items-center">
        <button
          class="w-full block bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="sendRegister"
        >
          Create an account
        </button>
        <div class="flex flex-row items-center mt-4">
          <p class="font-roboto text-sm text-gray-800  dark:text-indigo-50 m-2">Already have an account</p>
          <nuxt-link to="/login" class="sign_in_here m-2 text-indigo-800  dark:text-indigo-300"> Sign in here </nuxt-link>
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
  border-bottom: 1px solid red;
}
.label{
  color: red;
}
a.sign_in_here {
  /*color: #1a202c !important;*/
}


</style>
