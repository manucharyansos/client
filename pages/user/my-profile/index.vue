<template>
  <div>

    <div class="bg-gray-100 dark:bg-gray-700">
      <!-- End of Navbar -->

      <div class="container mx-auto p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
          <!-- Left Side -->
          <div class="w-full md:w-3/12 md:mx-2">
            <!-- Profile Card -->
            <div class="bg-white dark:bg-gray-700 p-3 border-t-4 border-green-400">
              <div class="image overflow-hidden">
                <img class="h-auto w-full mx-auto"
                     :src="`http://127.0.0.1:8000/user-images/${ getUser.image }`"
                     v-if="getUser.image"
                >
                <img class="h-auto w-full mx-auto"
                     src="/images.png"
                     v-else
                >

              </div>
              <h1 class="text-gray-900 dark:text-indigo-50 font-bold text-xl leading-8 my-1">
                {{ getUser.name}}
              </h1>
              <h3 class="text-gray-600 bg-amber-50 dark:bg-gray-700 dark:text-indigo-50 bg-amber-50 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
              <p class="flex flex-wrap justify-items-start text-sm text-gray-500 dark:text-indigo-50 hover:text-gray-600 leading-6">
                {{ getUser.bio || 'Your description'}}
              </p>
              <ul
                class="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-indigo-50 hover:text-gray-700 dark:text-indigo-200 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li class="flex items-center py-3">
                  <span>Status</span>
                  <span class="ml-auto"><span
                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                </li>
                <li class="flex items-center py-3">
                  <span>Member since</span>
                  <span class="ml-auto">{{ getUser.created_at }}</span>
                </li>
              </ul>
            </div>
            <!-- End of profile card -->
            <div class="my-4"></div>
<!--            &lt;!&ndash; Friends card &ndash;&gt;-->
<!--            <div class="bg-white p-3 hover:shadow">-->
<!--              <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">-->
<!--                        <span class="text-green-500">-->
<!--                            <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"-->
<!--                                 viewBox="0 0 24 24" stroke="currentColor">-->
<!--                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />-->
<!--                            </svg>-->
<!--                        </span>-->
<!--                <span>Similar Profiles</span>-->
<!--              </div>-->
<!--              <div class="grid grid-cols-3">-->
<!--                <div class="text-center my-2">-->
<!--                  <img class="h-16 w-16 rounded-full mx-auto"-->
<!--                       src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"-->
<!--                       alt="">-->
<!--                  <a href="#" class="text-main-color">Kojstantin</a>-->
<!--                </div>-->
<!--                <div class="text-center my-2">-->
<!--                  <img class="h-16 w-16 rounded-full mx-auto"-->
<!--                       src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"-->
<!--                       alt="">-->
<!--                  <a href="#" class="text-main-color">James</a>-->
<!--                </div>-->
<!--                <div class="text-center my-2">-->
<!--                  <img class="h-16 w-16 rounded-full mx-auto"-->
<!--                       src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"-->
<!--                       alt="">-->
<!--                  <a href="#" class="text-main-color">Natie</a>-->
<!--                </div>-->
<!--                <div class="text-center my-2">-->
<!--                  <img class="h-16 w-16 rounded-full mx-auto"-->
<!--                       src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"-->
<!--                       alt="">-->
<!--                  <a href="#" class="text-main-color">Casey</a>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
            <!-- End of friends card -->
          </div>
          <!-- Right Side -->
          <div class="w-full md:w-9/12 h-64">
            <!-- Profile tab -->
            <!-- About Section -->
            <div class="bg-white dark:bg-gray-700 p-3 shadow-sm rounded-sm">
              <div class="flex items-center space-x-2 font-semibold text-gray-900 dark:text-indigo-50 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                <span class="tracking-wide">About</span>
              </div>
              <div class="text-gray-700 dark:text-indigo-50">
                <div class="grid md:grid-cols-2 text-sm">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">First Name</div>
                    <div class="px-4 py-2">
                      {{ getUser.name }}
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Last Name</div>
                    <div class="px-4 py-2">{{ getUser.last_name || 'Last Name'}}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Gender</div>
                    <div class="px-4 py-2">{{ getUser.gender }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Contact No.</div>
                    <div class="px-4 py-2">{{ getUser.contact }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Current Address</div>
                    <div class="px-4 py-2">{{ getUser.address }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Permanant Address</div>
                    <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email.</div>
                    <div class="px-4 py-2">
                      <a class="text-blue-800 dark:text-blue-300" :href="getUser.email">
                        {{ getUser.email }}
                      </a>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Birthday</div>
                    <div class="px-4 py-2">{{ getUser.birthday }}</div>
                  </div>
                </div>
              </div>
              <button
                class="block w-full text-blue-800 dark:text-indigo-50 text-sm font-semibold rounded-lg hover:bg-gray-100 dark:bg-gray-800 focus:outline-none focus:shadow-outline focus:bg-gray-100 dark:bg-gray-800 hover:shadow-xs p-3 my-4">Show
                Full Information</button>
            </div>
            <!-- End of about section -->

            <div class="my-4"></div>

            <!-- Experience and education -->
<!--            <div class="bg-white p-3 shadow-sm rounded-sm">-->

<!--              <div class="grid grid-cols-2">-->
<!--                <div>-->
<!--                  <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">-->
<!--                                <span clas="text-green-500">-->
<!--                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"-->
<!--                                         stroke="currentColor">-->
<!--                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />-->
<!--                                    </svg>-->
<!--                                </span>-->
<!--                    <span class="tracking-wide">Experience</span>-->
<!--                  </div>-->
<!--                  <ul class="list-inside space-y-2">-->
<!--                    <li>-->
<!--                      <div class="text-teal-600">Owner at Her Company Inc.</div>-->
<!--                      <div class="text-gray-500 text-xs">March 2020 - Now</div>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                      <div class="text-teal-600">Owner at Her Company Inc.</div>-->
<!--                      <div class="text-gray-500 text-xs">March 2020 - Now</div>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                      <div class="text-teal-600">Owner at Her Company Inc.</div>-->
<!--                      <div class="text-gray-500 text-xs">March 2020 - Now</div>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                      <div class="text-teal-600">Owner at Her Company Inc.</div>-->
<!--                      <div class="text-gray-500 text-xs">March 2020 - Now</div>-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">-->
<!--                                <span clas="text-green-500">-->
<!--                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"-->
<!--                                         stroke="currentColor">-->
<!--                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />-->
<!--                                        <path fill="#fff"-->
<!--                                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />-->
<!--                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />-->
<!--                                    </svg>-->
<!--                                </span>-->
<!--                    <span class="tracking-wide">Education</span>-->
<!--                  </div>-->
<!--                  <ul class="list-inside space-y-2">-->
<!--                    <li>-->
<!--                      <div class="text-teal-600">Masters Degree in Oxford</div>-->
<!--                      <div class="text-gray-500 text-xs">March 2020 - Now</div>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                      <div class="text-teal-600">Bachelors Degreen in LPU</div>-->
<!--                      <div class="text-gray-500 text-xs">March 2020 - Now</div>-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                </div>-->
<!--              </div>-->
<!--              &lt;!&ndash; End of Experience and education grid &ndash;&gt;-->
<!--            </div>-->
            <!-- End of profile tab -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "index",
  layout: 'UserLayout',
  mounted() {
    if (this.$auth.loggedIn) {
      this.fetchUser()
    }
  },
  computed: {
    ...mapGetters('userSettings', ['getUser'])
  },
  methods: {
    ...mapActions('userSettings', ['fetchUser'])
  }
}
</script>

<style scoped>

</style>
