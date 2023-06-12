<template>
  <div>
    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="floating_first_name"
          id="floating_first_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          :class="{ active: fieldName }"
          placeholder=" "
          required
          v-model="user.name"/>
        <label for="floating_first_name" :class="{ label: fieldName }" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
        <p
          class="mx-auto mt-2 text-sm text-red-600 dark:text-red-500"
          v-if="errors.name"
          v-for="err of errors.name"
        >
          {{ err }}
        </p>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="floating_last_name"
          id="floating_last_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          :class="{ active: fieldLastName }"
          placeholder=" "
          required
          v-model="user.last_name"
        />
        <label for="floating_last_name" :class="{ label: fieldLastName }" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
        <p
          class="mx-auto mt-2 text-sm text-red-600 dark:text-red-500"
          v-if="errors.last_name"
          v-for="err of errors.last_name"
        >
          {{ err }}
        </p>
      </div>
    </div>
    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="floating_email" id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          :class="{ active: fieldEmail }"
          placeholder=" "
          required
          v-model="user.email"
        />
        <label for="floating_email" :class="{ label: fieldEmail }" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        <p
          class="mx-auto mt-2 text-sm text-red-600 dark:text-red-500"
          v-if="errors.email"
          v-for="err of errors.email"
        >
          {{ err }}
        </p>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="number"
          name="role"
          id="role"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          :class="{ active: fieldRole }"
          placeholder=" "
          required
          v-model="user.role"
        />
        <label for="role" :class="{ label: fieldRole }" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Role</label>
        <p
          class="mx-auto mt-2 text-sm text-red-600 dark:text-red-500"
          v-if="errors.role"
          v-for="err of errors.role"
        >
          {{ err }}
        </p>
      </div>
    </div>
    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="password"
          name="floating_password"
          id="floating_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          :class="{ active: fieldPassword }"
          placeholder=" "
          required
          v-model="user.password"
        />
        <label for="floating_password" :class="{ label: fieldPassword }" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        <p
          class="mx-auto mt-2 text-sm text-red-600 dark:text-red-500"
          v-if="errors.password"
          v-for="err of errors.password"
        >
          {{ err }}
        </p>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          ype="password"
          name="repeat_password"
          id="floating_repeat_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          :class="{ active: fieldConfirmPassword }"
          placeholder=" "
          required
          v-model="user.password_confirmation"
        />
        <label for="floating_repeat_password" :class="{ label: fieldConfirmPassword }" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
      </div>
    </div>


    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="floating_phone"
          id="floating_phone"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          :class="{ active: fliedNumber }"
          placeholder=" "
          required
          v-model="user.number"
        />
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
        <p
          class="mx-auto mt-2 text-sm text-red-600 dark:text-red-500"
          v-if="errors.number"
          v-for="err of errors.number"
        >
          {{ err }}
        </p>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="address"
          id="address"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          :class="{ active: filedAddress }"
          placeholder=" "
          required
          v-model="user.address"
        />
        <label for="address" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
        <p
          class="mx-auto mt-2 text-sm text-red-600 dark:text-red-500"
          v-if="errors.address"
          v-for="err of errors.address"
        >
          {{ err }}
        </p>
      </div>
    </div>
    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      @click="userCreate"
    >Submit
    </button>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "index",
  layout: 'AdminLayout',
  middleware: 'admin',
  data(){
    return {
      user: {
        name: '',
        last_name: '',
        email: '',
        role: '',
        password: '',
        password_confirmation: '',
        number: '',
        address: ''
      },
      errors: {},
      fieldName: false,
      fieldEmail: false,
      fieldRole: false,
      fieldPassword: false,
      fieldConfirmPassword: false,
      fieldLastName: false,
      filedAddress: false,
      fliedNumber: false
    }
  },
  watch: {
    "user.name"(val){
      if(val){
        this.fieldName = false
      }
    },
    "user.last_name"(val){
      if (val){
        this.fieldLastName = false
      }
    },
    "user.email"(val){
      if (val){
        this.fieldEmail = false
      }
    },
    "user.role"(val){
      if (val){
        this.fieldRole = false
      }
    },
    "user.password"(val){
      if (val){
        this.fieldPassword = false
      }
    },
    "user.number"(val){
      if (val){
        this.fliedNumber = false
      }
    },
    "user.address"(val){
      if (val){
        this.filedAddress = false
      }
    },
  },
  computed: {
    ...mapGetters('userSettings', ['getErrorMessage'])
  },
  methods: {
    ...mapActions('userSettings', ['createUser']),
    async userCreate(){
      if (this.user.name && this.user.last_name && this.user.email &&  this.user.role && this.user.number && this.user.address){
        if (this.user.password === this.user.password_confirmation){
          const response = await this.createUser({
            name: this.user.name,
            last_name: this.user.last_name,
            email: this.user.email,
            password: this.user.password,
            password_confirmation: this.user.password_confirmation,
            role: this.user.role,
            number: this.user.number,
            address: this.user.address,
          })
          if (response){
            this.user.name = '',
              this.user.last_name = '',
              this.user.email = '',
              this.user.password = '',
              this.user.password_confirmation = '',
              this.user.role = '',
              this.user.number = '',
              this.user.address = ''
            this.$router.push('/admin/users')
          }else{
            this.errors = this.getErrorMessage
            console.log(this.errors)
          }
        }else{
          this.fieldConfirmPassword = true
        }
      }else{
        if (this.user.name === ''){
          this.fieldName = true
        }
        if (this.user.last_name === ''){
          this.fieldLastName = true
        }
        if (this.user.email === ''){
          this.fieldEmail = true
        }
        if (this.user.role === ''){
          this.fieldRole = true
        }
        if (this.user.password === ''){
          this.fieldPassword = true
        }
        if (this.user.password_confirmation === ''){
          this.fieldConfirmPassword = true
        }
        if (this.user.number === ''){
          this.fliedNumber = true
        }
        if (this.user.address === ''){
          this.filedAddress = true
        }
      }

    }
  }
}
</script>

<style scoped>
  .active {
    border-bottom: 1px solid red;
  }
  .label {
    color: red;
  }
</style>
