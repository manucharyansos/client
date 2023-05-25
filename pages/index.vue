<template>
<!--  <Tutorial/>-->
  <div class="">
    <p style="height: 300px" class="bg-white dark:bg-gray-700 dark:text-indigo-50">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam debitis delectus dignissimos distinctio et facilis incidunt, libero minus molestiae nemo porro, praesentium quam quod reprehenderit sapiente sunt totam unde voluptate.
    </p>


  </div>
</template>

<script>
import { initFlowbite, } from 'flowbite'
export default {
  name: 'IndexPage',
  layout: 'MainLayout',
  auth: 'guest',
  mounted() {
    initFlowbite();
  },
  methods: {

  }
}
</script>
<style scoped>

</style>
