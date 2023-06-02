<template>
  <div class=" bg-white dark:bg-gray-700 dark:text-indigo-50 ">
    <header class="sticky top-0 mb-4">
      <IndexHeader/>
    </header>
    <main>
      <Nuxt/>
    </main>
    <footer>
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
