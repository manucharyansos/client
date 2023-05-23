<template>
  <div>
    <div class="bg-gray-200 min-h-screen pt-2 font-mono my-16">
      <div class="container mx-auto">
        <div class="inputs w-full max-w-2xl p-6 mx-auto">
          <h2 class="text-2xl text-gray-900">Account Setting</h2>
          <div class="mt-6 border-t border-gray-400 pt-4">
            <div class='flex flex-wrap -mx-3 mb-6'>
              <div class="personal w-full border-t border-gray-400 pt-4">
                <div class="w-full flex flex-col md:flex-row justify-between">
                  <h2 class="text-2xl text-gray-900">Personal info:</h2>

                  <div class="flex items-center justify-center md:w-1/2 w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <input
                        id="dropzone-file"
                        type="file"
                        class="hidden"
                        @change="handleFileUpload"
                      />
                      <img :src="user.imageUrl" alt="Selected Image" v-if="user.imageUrl">
                    </label>
                  </div>
                </div>

                <div class="flex items-center justify-between mt-4">

                  <div class='w-full md:w-1/2 px-3 mb-6'>
                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>first name</label>
                    <input
                      class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                      type='text'
                      v-model="user.name"
                      required
                    >
                  </div>
                  <div class='w-full md:w-1/2 px-3 mb-6'>
                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >last name</label>
                    <input
                      class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                      type='text'
                      v-model="user.last_name"
                      required
                    >
                  </div>
                </div>
                <div class="flex items-center justify-between mt-4">
                  <div class='w-full md:w-1/2 px-3 mb-6'>
                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Address</label>
                    <input
                      class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                      type='text'
                      v-model="user.address"
                      required
                    >
                  </div>

                  <div class='w-full md:w-1/2 px-3 mb-6'>
                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >contact</label>
                    <input
                      type="tel"
                      id="phone"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="123-45-678"
                      pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}"
                      v-model="user.contact"
                      required
                    >
                  </div>
                </div>
                <div class="flex items-center justify-between mt-4">

                  <div class="flex items-center mb-4">
                    <input id="man" type="radio" value="Man" v-model="user.gender" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="man" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mx-4">Man</label>

                    <input checked id="woman" type="radio" value="Woman" v-model="user.gender" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="woman" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mx-4">Woman</label>
                  </div>


                  <div class='w-full md:w-1/2 px-3 mb-6'>
                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>age</label>
                    <input
                      class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                      type='number'
                      v-model="user.age"
                      required
                    >
                  </div>
                </div>
                <datepicker v-model="selectedDate"></datepicker>
                <div class='w-full md:w-full px-3 mb-6'>
                  <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Bio</label>
                  <textarea
                    class='bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'
                    v-model="user.bio"
                    required
                  ></textarea>
                </div>
                <div class="flex justify-end">
                  <button
                    class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
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

export default {
  name: "index",
  layout: 'MainLayout',
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
        birthday: '',
        imageUrl: '',
        imageFile: [],
      },
      selectedDate: null,
    }
  },
  mounted() {
    this.populateUserData();
  },
  methods: {
    ...mapActions('userSettings', ['updateUser']),
    handleFileUpload(event) {
      this.user.imageFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.user.imageUrl = reader.result;
        console.log(this.user.imageUrl)
      };
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

      const id = this.id;
      await this.updateUser({ id, userData: formData });
      this.$router.push('/user/my-profile');
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
          image: this.$auth.user.image || '',
        };
      }
    },
  }
}
</script>

<style scoped>

</style>
