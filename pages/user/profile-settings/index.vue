<template>
  <div class="bg-white dark:bg-gray-700">
    <div class="bg-white dark:bg-gray-700 min-h-screen pt-2 font-mono">
      <div class="container mx-auto">
        <div class="inputs bg-gray-100 dark:bg-gray-900 w-full max-w-4xl p-6 mx-auto">
          <h2 class="text-2xl text-gray-900 dark:text-indigo-50">Account Setting</h2>
          <div class="mt-6 border-t border-gray-400 pt-4">
            <div class='flex flex-wrap -mx-3 mb-6'>
              <div class="personal w-full border-t border-gray-400 pt-4">
                <div class="w-full flex flex-col md:flex-row justify-between">
                  <div class="flex flex-col">
                    <h2 class="text-2xl text-gray-900 dark:text-indigo-50">Personal info:</h2>
                    <div class="max-w-sm">
                      <input
                        type="date"
                        v-model="user.selectedBirthdayDate"
                        class="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-600 block w-full pl-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-700 dark:focus:border-gray-600"
                      >
                    </div>
                  </div>
                  <div class="flex items-center justify-center md:w-1/2 w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <input
                        id="dropzone-file"
                        type="file"
                        class="hidden"
                        @change="handleFileUpload"
                      />
                      <img :src="user.imageUrl" alt="Selected Image" v-if="isImage">
                      <img :src="`http://127.0.0.1:8000/user-images/${user.imageUrl}`" alt="Selected Image">
                    </label>
                  </div>
                </div>
                <div class="flex items-center justify-between mt-4">
                  <div class="relative w-full md:w-1/2 px-3 mb-6 group">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-800 peer"
                      placeholder=" "
                      v-model="user.name"
                    />
                    <label
                      for="name"
                      class="peer-focus:font-medium font-roboto absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-800 peer-focus:dark:text-indigo-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >First name
                    </label>
                  </div>
                  <div class="relative w-full md:w-1/2 px-3 mb-6 group">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-800 peer"
                      placeholder=" "
                      v-model="user.last_name"
                    />
                    <label
                      for="last_name"
                      class="peer-focus:font-medium font-roboto absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-800 peer-focus:dark:text-indigo-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Last name
                    </label>
                  </div>
                </div>
                <div class="flex items-center justify-between mt-4">
                  <div class="relative w-full md:w-1/2 px-3 mb-6 group">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-800 peer"
                      placeholder=" "
                      required
                      v-model="user.address"
                    />
                    <label
                      for="address"
                      class="peer-focus:font-medium font-roboto absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-800 peer-focus:dark:text-indigo-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Address
                    </label>
                  </div>

                  <div class='w-full md:w-1/2 px-3 mb-6'>
                    <label class='peer-focus:font-medium font-roboto absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-800 peer-focus:dark:text-indigo-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' >
                      Contact
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-800 peer"
                      placeholder="123-45-678"
                      pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}"
                      v-model="user.contact"
                      required
                    >
                  </div>
                </div>
                <div class="flex items-center justify-between mt-4">

                  <div class="flex items-center mb-4">
                    <input id="man" type="radio" value="Man" v-model="user.gender" name="default-radio" class="w-4 h-4 text-indigo-800 bg-gray-100 border-gray-300 focus:ring-indigo-800 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="man" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mx-4">Man</label>

                    <input checked id="woman" type="radio" value="Woman" v-model="user.gender" name="default-radio" class="w-4 h-4 text-indigo-800 bg-gray-100 border-gray-300 focus:ring-indigo-800 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="woman" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mx-4">Woman</label>
                  </div>


                  <div class='w-full md:w-1/2 px-3 mb-6'>
                    <label class='peer-focus:font-medium font-roboto absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-800 peer-focus:dark:text-indigo-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                      Age</label>
                    <input
                      class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-800 peer'
                      type='number'
                      v-model="user.age"
                      required
                    >
                  </div>
                </div>

                <div class='w-full md:w-full px-3 mb-6'>
                  <label class='peer-focus:font-medium font-roboto absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-800 peer-focus:dark:text-indigo-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' >Bio</label>
                  <textarea
                    class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-800 peer'
                    v-model="user.bio"
                    required
                  ></textarea>
                </div>
                <div class="flex justify-end">
                  <button
                    class="appearance-none bg-gray-200 text-gray-900 dark:text-indigo-50 dark:bg-gray-700 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                    type="button"
                    @click="updateUserInfo"
                  >
                    save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import { initFlowbite } from 'flowbite'
export default {
  name: "index",
  layout: 'default',
  data(){
    return{
      email: 'www@email.com',
      password: '11111111',
      user: {
        id: '',
        name: '',
        last_name: '',
        age: '',
        address: '',
        contact: '',
        bio: '',
        gender: '',
        selectedBirthdayDate: '',
        imageUrl: '',
        imageFile: [],
      },
      isImage: false
    }
  },
  mounted() {
    this.populateUserData();
    initFlowbite()
  },
  methods: {
    ...mapActions('userSettings', ['updateUser']),
    handleFileUpload(event) {
      this.user.imageFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.user.imageUrl = reader.result;
      };
      this.isImage = true
      reader.readAsDataURL(this.user.imageFile);
    },
    async updateUserInfo() {
      const formData = new FormData();
      formData.append('name', this.user.name);
      formData.append('last_name', this.user.last_name);
      formData.append('age', this.user.age);
      formData.append('address', this.user.address);
      formData.append('contact', this.user.contact);
      formData.append('bio', this.user.bio);
      formData.append('gender', this.user.gender);
      formData.append('image', this.user.imageFile);
      formData.append('birthday', this.user.selectedBirthdayDate);

      const id = this.id;
      const response = await this.updateUser({ id, userData: formData });
      if (response){
        await this.$router.push('/user/my-profile');
      }
    },
    populateUserData() {
      if (this.$auth.user) {
        this.id = this.$auth.user.id;
        this.user = {
          name: this.$auth.user.name || '',
          last_name: this.$auth.user.last_name || '',
          age: this.$auth.user.age || '',
          address: this.$auth.user.address || '',
          contact: this.$auth.user.contact || '',
          bio: this.$auth.user.bio || '',
          imageUrl: this.$auth.user.image || '',
          gender: this.$auth.user.gender || '',
          selectedBirthdayDate: this.$auth.user.birthday || '',
        };
      }
    },
  }
}
</script>

<style scoped>

</style>
