<template>
  <div>
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <nuxt-link to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
            Home
          </nuxt-link>
        </li>
        <li class="inline-flex items-center"  v-for="(item, i) in crumbs" :key="i" >
          <nuxt-link :to="item.to" class="capitalize inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            {{ item.title }}
          </nuxt-link>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    name: {
      type: String
    },
    linkTo: {
      type: String
    },
    showActive: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    crumbs () {
      if (process.client) {
        const pathArray = this.$route.path.split('/')
        pathArray.shift()
        return pathArray.reduce((breadcrumbArray, path, idx) => {
          breadcrumbArray.push({
            to: this.buildBreadcrumbPath(breadcrumbArray, idx, path),
            title: path
          })
          return breadcrumbArray
        }, [])
      }
    }
  },
  methods: {
    buildBreadcrumbPath(breadcrumbArray, idx, path) {
      return breadcrumbArray[idx - 1]
        ? '/' + breadcrumbArray[idx - 1].to.replace('/','') + '/' + path
        : '/' + path
    }
  }
}
</script>

<style scoped>

</style>
