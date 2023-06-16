<template>
  <div class=" bg-white dark:bg-gray-700 dark:text-indigo-50 ">
    <header class="">
      <IndexHeader/>
    </header>
    <main class="mt-16">
      <Nuxt/>
    </main>
    <footer class="bg-white dark:bg-gray-900">
      <IndexFooter/>
    </footer>
  </div>
</template>

<script>
import IndexHeader from "@/layouts/main/header/Index-Header";
import IndexFooter from "@/layouts/main/footer/Index-Footer";
export default {
  name: "default",
  components: {
    IndexFooter,
    IndexHeader,
  }
}
</script>

<style scoped>

</style>
