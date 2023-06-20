<template>
  <div>
    <IndexHeader/>
    <Sidebar/>
    <div class="p-4 sm:ml-64 dark:bg-gray-700">
      <div class="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 mt-14">
        <div class="my-6">
          <Breadcrumb/>
        </div>
        <Nuxt/>
      </div>
    </div>
  </div>
</template>
<script>
import IndexHeader from "@/layouts/admin/header/Index-Header";
import Sidebar from "@/layouts/admin/sidebar";
export default {
  name: "Admin-Layout",
  components: {
    IndexHeader,
    Sidebar
  },
  data(){
    return {

    }
  },
  mounted(){
    // console.log(this.$router)
  }
}
</script>

<style scoped>

</style>
