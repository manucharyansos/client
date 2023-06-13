<template>
  <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <nuxt-link to="/admin" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
            <span class="ml-3">Dashboard</span>
          </nuxt-link>
        </li>
        <li>
          <dropdown
            :data="users"
          >
            <template v-slot:svg>
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            </template>
          </dropdown>
        </li>
        <li>
          <dropdown
            :data="products"
          >
            <template v-slot:svg>
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
            </template>
          </dropdown>
        </li>
        <li>
          <dropdown
            :data="categories"
          >
            <template v-slot:svg>
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
            </template>
          </dropdown>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import dropdown from "@/components/dropdown";
export default {
  name: "index",
  components: {
    dropdown
  },
  data(){
    return {
      users: [
        {
          name: 'Users',
          openDropdown: [
            { id: 1, name: 'Users', linkTo: '/admin/users' },
            { id: 2, name: 'Create User', linkTo: '/admin/users/create' },
          ],
          dropId: 'user-dropdown'
        }
      ],
      products: [
        {
          name: 'Products',
          openDropdown: [
            { id: 1, name: 'Products', linkTo: '/admin/products' },
            { id: 2, name: 'Create Products', linkTo: '/admin/products/create' },
          ],
          dropId: 'product-dropdown'
        }
      ],
      categories: [
        {
          name: 'Categories',
          openDropdown: [
            { id: 1, name: 'Categories', linkTo: '/admin/categories' },
            { id: 2, name: 'Create Categories', linkTo: '/admin/categories/create' },
            { id: 3, name: 'Create Subcategories', linkTo: '/admin/subcategory/create' },
          ],
          dropId: 'categories-dropdown'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
